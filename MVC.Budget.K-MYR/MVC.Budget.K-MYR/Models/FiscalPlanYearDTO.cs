﻿namespace MVC.Budget.K_MYR.Models;

public class FiscalPlanYearDTO
{

    public decimal HappyEvaluatedTotal { get; set; }
    public decimal UnhappyEvaluatedTotal { get; set; }
    public decimal NecessaryEvaluatedTotal { get; set; }
    public decimal UnnecessaryEvaluatedTotal { get; set; }
    public decimal TotalSpent { get; set; }
    public decimal OverspendingTotal { get; set; }
    public IEnumerable<decimal> TotalPerMonth { get; set; }
    public IEnumerable<decimal> HappyPerMonth { get; set; }
    public IEnumerable<decimal> HappyEvaluatedPerMonth { get; set; }
    public IEnumerable<decimal> UnhappyPerMonth { get; set; }
    public IEnumerable<decimal> UnhappyEvaluatedPerMonth { get; set; }
    public IEnumerable<decimal> NecessaryPerMonth { get; set; }
    public IEnumerable<decimal> NecessaryEvaluatedPerMonth { get; set; }
    public IEnumerable<decimal> UnnecessaryPerMonth { get; set; }
    public  IEnumerable<decimal> UnnecessaryEvaluatedPerMonth { get; set; }
    public IEnumerable<decimal> UnevaluatedPerMonth { get; set; }
    public IEnumerable<MonthlyOverspendingPerCategory> MonthlyOverspendingPerCategory { get; set; }
    public IEnumerable<decimal> SavingsPerMonth { get; set; }
    public IEnumerable<decimal> IncomePerMonth { get; set; }
}