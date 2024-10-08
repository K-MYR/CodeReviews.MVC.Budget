﻿using System.Globalization;

namespace MVC.Budget.K_MYR.Models.ViewModels;

public class LayoutViewModel(CultureInfo culture, string currency)
{
    public CultureInfo Culture { get; set; } = culture;
    public string CurrencyCode { get; set; } = currency;
}


public class LayoutModel<T>(T model, CultureInfo culture, string currency) : LayoutViewModel(culture, currency)
{
    public T PageModel { get; set; } = model;
}