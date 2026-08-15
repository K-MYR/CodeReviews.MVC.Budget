const API_BASE_URL = '/api';
const FISCAL_PLAN_BASE = `${API_BASE_URL}/FiscalPlan`;
const EXPENSE_CATEGORIES_BASE = `${API_BASE_URL}/ExpenseCategories`;
const INCOME_CATEGORIES_BASE = `${API_BASE_URL}/IncomeCategories`;
const TRANSACTIONS_BASE = `${API_BASE_URL}/Transactions`;

export const API_ROUTES = {
    COUNTRY: '/Country',
    fiscalPlans: {        
        BASE: FISCAL_PLAN_BASE,
        BY_ID: (id) => `${FISCAL_PLAN_BASE}/${id}`,
        GET_MONTHLY_DATA: (id, queryParams) => `${FISCAL_PLAN_BASE}/${id}/MonthlyData?${queryParams}`,
        GET_YEARLY_DATA: (id, queryParams) => `${FISCAL_PLAN_BASE}/${id}/YearlyData?${queryParams}`,
    },
    transactions: {
        BASE: TRANSACTIONS_BASE,
        BY_ID: (id) => `${TRANSACTIONS_BASE}/${id}`,
        GET_SEARCH: `${TRANSACTIONS_BASE}/Search`,
        GET_UNEVALUATED: (queryParams) => `${TRANSACTIONS_BASE}/Unevaluated?${queryParams}`,
    },
    incomeCategories: {
        BASE: INCOME_CATEGORIES_BASE,
        GET_MONTHLY_DATA: (id, queryParams) => `${INCOME_CATEGORIES_BASE}/${id}/MonthlyData?${queryParams}`,
        BY_ID_PARAMS: (id, queryParams) => `${INCOME_CATEGORIES_BASE}/${id}?${queryParams}`,
        BY_ID: (id) => `${INCOME_CATEGORIES_BASE}/${id}`,
    },
    expenseCategories: {
        BASE: EXPENSE_CATEGORIES_BASE,
        GET_MONTHLY_DATA: (id, queryParams) => `${EXPENSE_CATEGORIES_BASE}/${id}/MonthlyData?${queryParams}`,
        BY_ID_PARAMS: (id, queryParams) => `${EXPENSE_CATEGORIES_BASE}/${id}?${queryParams}`,
        BY_ID: (id) => `${EXPENSE_CATEGORIES_BASE}/${id}`,
    }
};

export const PAGE_ROUTES = {
    INDEX: '',
    FISCAL_PLAN: (id) => `/FiscalPlan/${id}`,
    CATEGORY: (id) => `/Category/${id}`,
}