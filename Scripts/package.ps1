$ErrorActionPreference = "Stop"

$root = Split-Path $PSScriptRoot -Parent
$dist = Join-Path $root "dist"

Write-Host "Cleaning distribution directory..."

if (Test-Path $dist) {
    Remove-Item $dist -Recurse -Force
}

New-Item -ItemType Directory -Path $dist | Out-Null

Write-Host "Building Spendwise image..."

docker build `
    -t spendwise:latest `
    -f (Join-Path $root "Dockerfile") `
    $root

if ($LASTEXITCODE -ne 0) {
    throw "Docker image build failed."
}

Write-Host "Spendwise image built successfully."

Write-Host "Pulling SQL Server image..."

docker pull mcr.microsoft.com/mssql/server:2022-latest

if ($LASTEXITCODE -ne 0) {
    throw "SQL Server image pull failed."
}

Write-Host "Saving SQL Server image..."

docker save `
    -o (Join-Path $dist "sqlserver.tar") `
    mcr.microsoft.com/mssql/server:2022-latest

if ($LASTEXITCODE -ne 0) {
    throw "SQL Server image export failed."
}

Write-Host "SQL Server image saved successfully."

Write-Host "Saving Spendwise image..."

docker save `
    -o (Join-Path $dist "spendwise.tar") `
    spendwise:latest

if ($LASTEXITCODE -ne 0) {
    throw "Spendwise image export failed."
}

Write-Host "Spendwise image saved successfully."

Write-Host "Creating Docker image manifest..."

$spendwiseImageId = docker image inspect spendwise:latest --format "{{.Id}}"

if ($LASTEXITCODE -ne 0) {
    throw "Failed to get Spendwise image ID."
}

$sqlServerImageId = docker image inspect mcr.microsoft.com/mssql/server:2022-latest --format "{{.Id}}"

if ($LASTEXITCODE -ne 0) {
    throw "Failed to get SQL Server image ID."
}

$imageManifest = @{
    spendwise = $spendwiseImageId.Trim()
    sqlserver = $sqlServerImageId.Trim()
} | ConvertTo-Json

Set-Content `
    -Path (Join-Path $dist "image-manifest.json") `
    -Value $imageManifest `
    -Encoding UTF8

Write-Host "Docker image manifest created."

Write-Host "Publishing configuration tool..."

$configurationProject = Join-Path $root "MVC.Budget.K-MYR\MVC.Budget.K-MYR.Configuration\MVC.Budget.K-MYR.Configuration.csproj"
$configTool = Join-Path $dist "config-tool"

dotnet publish $configurationProject `
    -c Release `
    -r win-x64 `
    --self-contained true `
    -o $configTool

if ($LASTEXITCODE -ne 0) {
    throw "Configuration tool publish failed."
}

Write-Host "Configuration tool published successfully."

Write-Host "Creating configuration tool shortcut..."

$shortcutPath = Join-Path $dist "Spendwise.Configuration.lnk"
$targetPath = Join-Path $configTool "Spendwise.Configuration.exe"

$wshShell = New-Object -ComObject WScript.Shell
$shortcut = $wshShell.CreateShortcut($shortcutPath)

$shortcut.TargetPath = $targetPath
$shortcut.WorkingDirectory = $configTool
$shortcut.Description = "Spendwise Configuration"

$shortcut.Save()

Write-Host "Configuration tool shortcut created."

Write-Host "Publishing Spendwise launcher..."

$launcherProject = Join-Path $root "MVC.Budget.K-MYR\MVC.Budget.K-MYR.Launcher\MVC.Budget.K-MYR.Launcher.csproj"
$launcherDirectory = Join-Path $dist "launcher"

dotnet publish $launcherProject `
    -c Release `
    -r win-x64 `
    --self-contained true `
    -o $launcherDirectory

if ($LASTEXITCODE -ne 0) {
    throw "Spendwise launcher publish failed."
}

Write-Host "Spendwise launcher published successfully."

Write-Host "Creating Spendwise launcher shortcut..."

$launcherShortcutPath = Join-Path $dist "Spendwise.lnk"
$launcherExecutablePath = Join-Path $launcherDirectory "Spendwise.Launcher.exe"

$wshShell = New-Object -ComObject WScript.Shell
$launcherShortcut = $wshShell.CreateShortcut($launcherShortcutPath)

$launcherShortcut.TargetPath = $launcherExecutablePath
$launcherShortcut.WorkingDirectory = $launcherDirectory
$launcherShortcut.Description = "Start Spendwise"

$launcherShortcut.Save()

Write-Host "Spendwise launcher shortcut created."

Write-Host "Copying runtime files..."

Copy-Item `
    (Join-Path $root "compose.yaml") `
    (Join-Path $dist "compose.yaml") `
    -Force

Copy-Item `
    (Join-Path $root ".env.example") `
    (Join-Path $dist ".env.example") `
    -Force

Copy-Item `
    (Join-Path $root "MVC.Budget.K-MYR\MVC.Budget.K-MYR\appsettings.json") `
    (Join-Path $dist "appsettings.json") `
    -Force

Write-Host "Runtime files copied successfully."

Write-Host "Creating distribution archive..."

$archivePath = Join-Path $root "Spendwise.zip"
$tempPackageDirectory = Join-Path $root ".package-temp"
$tempSpendwiseDirectory = Join-Path $tempPackageDirectory "Spendwise"

if (Test-Path $archivePath) {
    Remove-Item $archivePath -Force
}

if (Test-Path $tempPackageDirectory) {
    Remove-Item $tempPackageDirectory -Recurse -Force
}

New-Item -ItemType Directory -Path $tempSpendwiseDirectory -Force | Out-Null

Copy-Item `
    -Path (Join-Path $dist "*") `
    -Destination $tempSpendwiseDirectory `
    -Recurse `
    -Force

Compress-Archive `
    -Path (Join-Path $tempPackageDirectory "*") `
    -DestinationPath $archivePath `
    -CompressionLevel Optimal

Remove-Item $tempPackageDirectory -Recurse -Force

Write-Host "Distribution archive created:"
Write-Host $archivePath