using System.Diagnostics;

namespace MVC.Budget.K_MYR.Launcher;

public class ApplicationLauncher
{
    private readonly string _workingDirectory;

    public ApplicationLauncher(string workingDirectory)
    {
        _workingDirectory = workingDirectory;
    }

    public void Launch()
    {

        try
        {        
            RunDockerCommand(
                    "load",
                    $"-i \"{Path.Combine(_workingDirectory, "spendwise.tar")}\"");

            RunDockerCommand(
                    "load",
                    $"-i \"{Path.Combine(_workingDirectory, "sqlserver.tar")}\"");

            RunDockerCommand(
                    "compose",
                    $"-f \"{Path.Combine(_workingDirectory, "compose.yaml")}\" up -d");

            Console.WriteLine();
            Console.WriteLine("Spendwise started successfully.");
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
}
