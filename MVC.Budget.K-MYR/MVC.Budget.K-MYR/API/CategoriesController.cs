using Microsoft.AspNetCore.Mvc;
using MVC.Budget.K_MYR.Models;
using MVC.Budget.K_MYR.Services;

namespace MVC.Budget.K_MYR.API;

[Route("api/[controller]")]
public class ExpenseCategoriesController(ICategoriesService categoriesService) :
    GenericCategoriesController<ExpenseCategory>(categoriesService)
{
}

[Route("api/[controller]")]
public class IncomeCategoriesController(ICategoriesService categoriesService) :
    GenericCategoriesController<IncomeCategory>(categoriesService)
{
}
