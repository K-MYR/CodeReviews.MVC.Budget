using MVC.Budget.K_MYR.Models;
using System.Collections.Concurrent;
using System.Reflection;

namespace MVC.Budget.K_MYR.Extensions;

public static class OrderingHelpers
{
    private static readonly HashSet<string> _allowedProperties = new(StringComparer.OrdinalIgnoreCase)
    {
        nameof(Transaction.DateTime),
        nameof(Transaction.Title),
        nameof(Transaction.Amount),
        string.Join(".", nameof(Category), nameof(Category.Name))
    };

    private static readonly ConcurrentDictionary<string, PropertyInfo> _cache = new();

    public static bool IsAllowedProperty(string propertyName)
    {
        return _allowedProperties.Contains(propertyName);
    }

    public static PropertyInfo? GetProperty<T>(string propertyName)
    {
        if(_cache.TryGetValue(propertyName, out var cached))
        {
            return cached;
        }

        string[] properties = propertyName.Split('.');
        PropertyInfo? propertyInfo = null;
        Type type = typeof(T);

        foreach (string prop in properties)
        {
            propertyInfo = type.GetProperty(prop, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);

            if (propertyInfo == null)
            {
                return null;
            }
            type = propertyInfo.PropertyType;
        }

        if(propertyInfo is not null)
        {
            _cache.TryAdd(propertyName, propertyInfo);
        }

        return propertyInfo;
    }
}
