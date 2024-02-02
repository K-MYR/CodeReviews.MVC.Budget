﻿using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace MVC.Budget.K_MYR.Models;

public class Transaction
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DateTime DateTime { get; set; }
    [DataType(DataType.Currency)]
    [Precision(19, 4)]
    public decimal Amount { get; set; }
    public int CategoryId { get; set; }
    public Category Category { get; set; }
}