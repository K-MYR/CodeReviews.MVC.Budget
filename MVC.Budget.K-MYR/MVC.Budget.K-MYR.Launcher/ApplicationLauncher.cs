using System.Diagnostics;
using System.Text.Json;

namespace MVC.Budget.K_MYR.Launcher;

public class ApplicationLauncher
{
    private readonly string _workingDirectory;
    private readonly JsonSerializerOptions _jsonSerializerOptions;

    public ApplicationLauncher(string workingDirectory)
    {
        _workingDirectory = workingDirectory;
        _jsonSerializerOptions = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };
    }

    public void Launch()
    {

        try
        {
            Console.WriteLine($"Starting application...");

            ImageManifest manifest = LoadManifest();

            EnsureImagesExist(manifest);

            StartupDockerContainer();

            Console.WriteLine("\nApplication deployed successfully.");
            Console.WriteLine("Press any key to close...");
            Console.ReadKey();
        }
        catch (Exception ex)
        {
            Console.WriteLine();
            Console.WriteLine("Failed to start Spendwise:");
            Console.WriteLine(ex.Message);
            Console.WriteLine();
            Console.WriteLine("Press any key to close...");
            Console.ReadKey();
        }
    }

    private void StartupDockerContainer()
    {
        Console.WriteLine($"\nStarting docker containers...");

        RunDockerCommand(
                        "compose",
                        $"-f \"{Path.Combine(_workingDirectory, "compose.yaml")}\" up -d");
    }

    private void EnsureImagesExist(ImageManifest manifest)
    {
        Console.WriteLine($"\nChecking Docker images...");

        EnsureImage(
            "spendwise:latest",
            manifest.Spendwise,
            Path.Combine(_workingDirectory, "spendwise.tar"));

        EnsureImage(
            "mcr.microsoft.com/mssql/server:2022-latest",
            manifest.SqlServer,
            Path.Combine(_workingDirectory, "sqlserver.tar"));
    }

    private ImageManifest LoadManifest()
    {
        Console.WriteLine($"\nLoading images manifest...");

        var manifestPath = Path.Combine(
                        _workingDirectory,
                        "image-manifest.json");

        var manifestText = File.ReadAllText(manifestPath);

        var manifest = JsonSerializer.Deserialize<ImageManifest>(manifestText, _jsonSerializerOptions)
            ?? throw new InvalidOperationException("Could not read image manifest.");
        return manifest;
    }

    void RunDockerCommand(string command, string arguments)
    {
        using var process = new Process();

        process.StartInfo = new ProcessStartInfo
        {
            FileName = "docker",
            Arguments = $"{command} {arguments}",
            WorkingDirectory = _workingDirectory,
            UseShellExecute = false
        };

        process.Start();

        process.WaitForExit();

        if (process.ExitCode != 0)
        {
            throw new Exception(
                $"Docker command failed: docker {command} {arguments}");
        }
    }

    void EnsureImage(string imageName, string expectedImageId, string tarPath)
    {
        Console.WriteLine($"Checking Docker image {imageName}...");

        var actualImageId = GetDockerImageId(imageName);

        if (actualImageId == expectedImageId)
        {
            Console.WriteLine("Correct image already loaded. Skipping image load.");
            return;
        }

        if (actualImageId is null)
        {
            Console.WriteLine("Image not found. Loading image...");
        }
        else
        {
            Console.WriteLine("Installed image differs from packaged image. Loading packaged image...");
        }

        RunDockerCommand(
            "load",
            $"-i \"{tarPath}\"");
    }

    string? GetDockerImageId(string imageName)
    {
        using var process = new Process();

        process.StartInfo = new ProcessStartInfo
        {
            FileName = "docker",
            Arguments = $"image inspect \"{imageName}\" --format \"{{{{.Id}}}}\"",
            WorkingDirectory = _workingDirectory,
            UseShellExecute = false,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            CreateNoWindow = true
        };

        process.Start();

        var output = process.StandardOutput.ReadToEnd();

        process.WaitForExit();

        if (process.ExitCode != 0)
        {
            return null;
        }

        return output.Trim();
    }
}
