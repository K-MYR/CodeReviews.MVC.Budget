﻿using MVC.Budget.K_MYR.Models;
using System.Linq.Expressions;

namespace MVC.Budget.K_MYR.Repositories;

public interface ICategoriesRepository : IGenericRepository<Category>
{
    Task<Category?> GetCategoryAsync(int id);
    Task<List<Category>> GetCategoriesWithFilteredTransactionsAsync(Expression<Func<Category, bool>>? filter = null, Func<IQueryable<Category>, IOrderedQueryable<Category>>? orderBy = null, Expression<Func<Category, IOrderedEnumerable<Transaction>>>? filterTransactions = null);
    Task<Category?> GetCategoryWithFilteredStatistics(int id, Expression<Func<Category, IEnumerable<CategoryBudget>>> filter);
    Task<List<CategoryDTO>> GetDataByMonth(int id, DateTime month);
    Task<List<CategoryStatistic>> GetDataByYear(int id, int year);
}