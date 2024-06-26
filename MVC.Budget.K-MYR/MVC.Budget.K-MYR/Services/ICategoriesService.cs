﻿using MVC.Budget.K_MYR.Models;
using System.Linq.Expressions;

namespace MVC.Budget.K_MYR.Services
{
    public interface ICategoriesService
    {
        Task<List<Category>> GetCategories();
        Category? GetByID(int id);
        ValueTask<Category?> GetByIDAsync(int id);
        Task<List<Category>> GetCategoriesWithUnevaluatedTransactions(int fiscalPlanId);
        Task<T> AddCategory<T>(T categoryPost) where T : Category, new();
        Task UpdateCategory<T>(T category, T categoryPut, DateTime month) where T : Category;
        Task DeleteCategory<T>(T category) where T : Category;
        Task<Category?> GetCategoryWithFilteredStatistics(int id, Expression<Func<Category, IEnumerable<CategoryBudget>>> filter);
    }
}