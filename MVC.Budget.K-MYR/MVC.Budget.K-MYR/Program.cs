using Microsoft.EntityFrameworkCore;
using MVC.Budget.K_MYR.Data;
using MVC.Budget.K_MYR.Extensions;
using MVC.Budget.K_MYR.Repositories;
using MVC.Budget.K_MYR.Services;
using System.Globalization;
using System.Text.Json.Serialization;

CultureInfo.DefaultThreadCurrentCulture = CultureInfo.InvariantCulture;
CultureInfo.DefaultThreadCurrentUICulture = CultureInfo.InvariantCulture;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTransient<ICategoriesRepository, CategoriesRepository>();
builder.Services.AddTransient<ITransactionsRepository, TransactionsRepository>();
builder.Services.AddTransient<ICategoryBudgetsRepository, CategoryBudgetsRepository>();
builder.Services.AddTransient<IFiscalPlansRepository, FiscalPlansRepository>();

builder.Services.AddTransient<ICategoriesService, CategoriesService>();
builder.Services.AddTransient<ITransactionsService, TransactionsService>();
builder.Services.AddTransient<IFiscalPlansService, FiscalPlansService>();


builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();
builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("MSQL")));
builder.Services.AddControllersWithViews(options =>
                {
                    options.InputFormatters.Insert(0, JsonPatchInputFormatter.GetJsonPatchInputFormatter());
                })
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                    options.AllowInputFormatterExceptionMessages = false;
                });


var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<DatabaseContext>();

    if (builder.Configuration.GetValue<bool>("Auto-Migrate"))
        db.Database.Migrate();
    if (builder.Configuration.GetValue<bool>("SeedData"))
        SeedData.InitializeDatabase(db);
}

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHttpsRedirection();
}

app.UseHsts();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
