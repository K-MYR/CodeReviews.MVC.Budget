using System.Windows;
using MVC.Budget.K_MYR.Configuration.ViewModels;

namespace MVC.Budget.K_MYR.Configuration;

public partial class MainWindow : Window
{
    public MainWindow(MainWindowViewModel viewModel)
    {
        InitializeComponent();

        DataContext = viewModel;
    }
}