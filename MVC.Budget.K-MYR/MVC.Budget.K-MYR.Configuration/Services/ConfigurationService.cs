using Microsoft.Extensions.Configuration;
using MVC.Budget.K_MYR.Configuration.Models;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace MVC.Budget.K_MYR.Configuration.Services;

public class ConfigurationService
{
    private readonly string _configurationPath;
    private readonly JsonSerializerOptions _options;

    public ConfigurationService(string configurationPath)
    {
        _configurationPath = configurationPath;

        _options = new JsonSerializerOptions
        {
            WriteIndented = true
        };
        _options.Converters.Add(new JsonStringEnumConverter());
    }

    public AppConfiguration Load()
    {
        EnsureConfigurationExists();

        var configuration = new ConfigurationBuilder()
            .AddJsonFile(
                _configurationPath,
                optional: false,
                reloadOnChange: false)
            .Build();

        return configuration.Get<AppConfiguration>()
            ?? new AppConfiguration();
    }

    public void Save(AppConfiguration configuration)
    {
        EnsureConfigurationExists();

        var json = JsonSerializer.Serialize(configuration, _options);

        File.WriteAllText(_configurationPath, json);
    }

    private void EnsureConfigurationExists()
    {
        if (File.Exists(_configurationPath))
            return;

        var directory = Path.GetDirectoryName(_configurationPath);

        if (!string.IsNullOrEmpty(directory))
            Directory.CreateDirectory(directory);

        var defaultConfiguration = new AppConfiguration();

        var json = JsonSerializer.Serialize(defaultConfiguration, _options);

        File.WriteAllText(_configurationPath, json);
    }
}