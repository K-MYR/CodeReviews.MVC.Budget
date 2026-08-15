using MVC.Budget.K_MYR.Launcher;

var distributionDirectory = Path.GetFullPath(
                Path.Combine(AppContext.BaseDirectory, ".."));

var applicationLauncher = new ApplicationLauncher(distributionDirectory);
applicationLauncher.Launch();