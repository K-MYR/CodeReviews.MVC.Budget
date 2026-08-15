using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Text.Json.Serialization;

namespace MVC.Budget.K_MYR.Configuration.Models;

public class AppConfiguration
{
    public bool AutoMigrate { get; set; }

    public bool SeedData { get; set; }

    public ConnectionStringsConfiguration ConnectionStrings { get; set; } = new();

    public LoggingConfiguration Logging { get; set; } = new();
}

public class ConnectionStringsConfiguration
{
    public string MSQL { get; set; } = string.Empty;

    public string SQLServer { get; set; } = string.Empty;
}

public class LoggingConfiguration
{
    public LogLevelConfiguration LogLevel { get; set; } = new();
}

public class LogLevelConfiguration
{
    public LogLevel Default { get; set; } = LogLevel.Information;

    [JsonPropertyName("Microsoft.AspNetCore")]
    [ConfigurationKeyName("Microsoft.AspNetCore")]
    public LogLevel MicrosoftAspNetCore { get; set; } = LogLevel.Warning;
}