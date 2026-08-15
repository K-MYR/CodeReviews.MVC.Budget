using Microsoft.Extensions.DependencyInjection;
using MVC.Budget.K_MYR.Configuration.Services;
using MVC.Budget.K_MYR.Configuration.ViewModels;
using System.IO;
using System.Windows;

namespace MVC.Budget.K_MYR.Configuration;

public partial class App : Application
{
    private readonly IServiceProvider _serviceProvider;

    public App()
    {
        var services = new ServiceCollection();

        ConfigureServices(services);

        _serviceProvider = services.BuildServiceProvider();
    }

    private static void ConfigureServices(IServiceCollection services)
    {
        services.AddTransient<MainWindowViewModel>();
        services.AddTransient<MainWindow>();

        string? currentDir = Path.GetDirectoryName(AppContext.BaseDirectory)
            ?? throw new InvalidOperationException("Could not determine the current directory.");

        string? configDirectory = Path.GetDirectoryName(currentDir)
            ?? throw new InvalidOperationException("Could not determine the distribution directory.");

        var configurationPath = Path.Combine(configDirectory, "appsettings.json");

        services.AddSingleton(_ => new ConfigurationService(configurationPath));
    }

    protected override void OnStartup(StartupEventArgs e)
    {
        base.OnStartup(e);

        var mainWindow = _serviceProvider
            .GetRequiredService<MainWindow>();

        mainWindow.Show();
    }
}