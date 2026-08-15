using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MVC.Budget.K_MYR.Configuration.Models;
using MVC.Budget.K_MYR.Configuration.Services;

namespace MVC.Budget.K_MYR.Configuration.ViewModels;

public partial class MainWindowViewModel : ObservableObject
{
    private readonly ConfigurationService _configurationService;

    [ObservableProperty]
    public partial AppConfiguration Configuration { get; set; } = new();

    public MainWindowViewModel(ConfigurationService configurationService)
    {
        _configurationService = configurationService;

        Configuration = _configurationService.Load();
    }

    [RelayCommand]
    private void Save()
    {
        _configurationService.Save(Configuration);
    }
}