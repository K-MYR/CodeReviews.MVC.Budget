﻿using MVC.Budget.K_MYR.Data;
using MVC.Budget.K_MYR.Models;
using System.Linq.Expressions;

namespace MVC.Budget.K_MYR.Services;

public class CategoriesService : ICategoriesService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly ILogger<CategoriesService> _logger;

    public CategoriesService(IUnitOfWork unitOfWork, ILogger<CategoriesService> logger)
    {
        _unitOfWork = unitOfWork;
        _logger = logger;
    }

    public Task<List<Category>> GetCategories()
    {
        return _unitOfWork.CategoriesRepository.GetAsync();
    }

    public ValueTask<Category?> GetByIDAsync(int id)
    {
        return _unitOfWork.CategoriesRepository.GetByIDAsync(id);
    }

    public Category? GetByID(int id)
    {
        return _unitOfWork.CategoriesRepository.GetByID(id);
    }

    public Task<List<Category>> GetCategoriesWithUnevaluatedTransactions(int fiscalPlanId)
    {
        var cutoffDate = DateTime.UtcNow.AddDays(-14);

        return _unitOfWork.CategoriesRepository.GetCategoriesWithFilteredTransactionsAsync(
                c => c.FiscalPlanId == fiscalPlanId,
                q => q.OrderBy(c => c.Name),
                c => c.Transactions.Where(t => t.Evaluated == false && t.DateTime < cutoffDate)
                    .OrderByDescending(d => d.DateTime));
    }

    public async Task<T> AddCategory<T>(T categoryPost) where T : Category, new()
    {
        var category = new T()
        {
            Name = categoryPost.Name,
            Budget = categoryPost.Budget,
            FiscalPlanId = categoryPost.FiscalPlanId
        };

        var categoryStatistics = new CategoryBudget()
        {
            CategoryId = category.Id,
            Budget = category.Budget,
            Month = new DateTime(DateTime.UtcNow.Year, DateTime.UtcNow.Month, 1)
        };

        category.PreviousBudgets.Add(categoryStatistics);

        _unitOfWork.CategoriesRepository.Insert(category);

        await _unitOfWork.Save();

        return category;
    }

    public async Task UpdateCategory<T>(T category, T categoryPut, DateTime month) where T : Category
    {
        if (categoryPut.Budget != category.Budget) 
        {
            var currentBudget = category.PreviousBudgets.SingleOrDefault(b => b.Month.Month == month.Month && b.Month.Year == month.Year);

            if (currentBudget is null)
            {
                _unitOfWork.CategoryBudgetsRepository.Insert(new CategoryBudget
                {
                    CategoryId = category.Id,
                    Budget = categoryPut.Budget,
                    Month = month
                });
            }
            else
            {
                currentBudget.Budget = categoryPut.Budget;
            }
        }

        if(month.Year == DateTime.UtcNow.Year && month.Month == DateTime.UtcNow.Month) 
        {
            category.Budget = categoryPut.Budget;
        }

        category.Name = categoryPut.Name;
        category.FiscalPlanId = categoryPut.FiscalPlanId;    

        await _unitOfWork.Save();
    }

    public async Task DeleteCategory<T>(T category) where T : Category
    {
        _unitOfWork.CategoriesRepository.Delete(category);
        await _unitOfWork.Save();
    }

    public Task<Category?> GetCategoryWithFilteredStatistics(int id, Expression<Func<Category, IEnumerable<CategoryBudget>>> filter)
    {
        return _unitOfWork.CategoriesRepository.GetCategoryWithFilteredStatistics(id, filter);
    }
}
