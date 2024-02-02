﻿using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace MVC.Budget.K_MYR.Models;

public class Category
{
    public int Id { get; set; }
    [Required]
    [StringLength(50, MinimumLength = 1)]
    public string? Name { get; set; }
    [Required]
    [DataType(DataType.Currency)]
    [Precision(19,4)]
    public decimal Budget { get; set; }
    public int IncomeId { get; set; }
    public Income Income { get; set; } = null!;
    public ICollection<Transaction> Transactions { get; } = new List<Transaction>();
}