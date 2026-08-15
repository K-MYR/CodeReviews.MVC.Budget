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

        var configurationPath = Path.Combine(
            AppContext.BaseDirectory,
            "appsettings.json");

        services.AddSingleton(_ =>
            new ConfigurationService(configurationPath));
    }

    protected override void OnStartup(StartupEventArgs e)
    {
        base.OnStartup(e);

        var mainWindow = _serviceProvider
            .GetRequiredService<MainWindow>();

        mainWindow.Show();
    }
}