﻿import { ArcElement, Chart, DoughnutController } from 'chart.js';
Chart.register(DoughnutController, ArcElement);
import { getDatePicker } from './asyncComponents'
import { getFiscalPlanDataByMonth } from './api';
import messageBox from './messageBox';

export default class HomeDashboard {
    #data;
    #isLoading;
    #monthPicker;
    #sentimentChartMonthly;
    #necessityChartMonthly;
    #overspendingHeading;
    #incomeBalanceHeader;
    #incomeAccordionBody;
    #expenseBalanceHeader;
    #expenseAccordionBody;
    #menu;

    constructor(menu, id, date, data) {
        this.#data = data;
        this.#menu = menu;      
        this.#init(id, date);
    }

    async #init(id, date) {
        try {
            this.#isLoading = true;
            var datepickerPromise = this.#initializeDatePicker(id, date);
            var chartPromise = this.#initializeCharts();            

            this.#overspendingHeading = document.getElementById('home-overspending');

            this.#incomeBalanceHeader = document.getElementById('incomeBalanceHeader');
            this.#incomeAccordionBody = document.getElementById('incomeAccordionBody');

            this.#expenseBalanceHeader = document.getElementById('expensesBalanceHeader');
            this.#expenseAccordionBody = document.getElementById('expensesAccordionBody');  
            
            this.#formatHeaders();   
            this.#formatCategories();
            await datepickerPromise;
            await chartPromise;
        } finally {
            this.#isLoading = false;
        }        
    }

    attachMenuHandlers() {
        var categories = this.#data.incomeCategories.concat(this.#data.expenseCategories);

        for (let i = 0; i < categories.length; i++) {
            let category = categories[i];
            let element = document.getElementById(`category_${category.id}`);

            if (element) {
                element.addEventListener("click", this.#handleCategoryInteraction.bind(this));
                element.addEventListener("keydown", this.#handleCategoryInteraction.bind(this));
            }     
        }
    }

    #handleCategoryInteraction(event) {
        if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
            this.#onCategoryClick(event);
        }
    }

    #onCategoryClick(event) {
        var categoryElement = event.target.closest('.category');
        var id = categoryElement.dataset.id;
        if (this.#menu.dataset.categoryid != 0) {
            let borderBox = document.getElementById(`category_${this.#menu.dataset.categoryid}`).querySelector('.border-animation');
            borderBox.classList.remove('border-rotate');
        }
        var x = event.pageX;
        var y = event.pageY;
        if (x === undefined || y === undefined) {
            let rect = categoryElement.getBoundingClientRect();
            x = rect.left + (rect.width / 2);
            y = rect.top + (rect.height / 2);
        }
        y = Math.max(Math.min(y - 100, window.innerHeight - 200), 66);
        x = Math.max(Math.min(x - 100, window.innerWidth - 220), 20);
        
        
        this.#menu.dataset.categoryid = id;
        this.#menu.style.left = `${x}px`;
        this.#menu.style.top = `${y}px`;
        this.#menu.classList.add('active');

        categoryElement.querySelector('.border-animation').classList.add('border-rotate');
    }

    async #initializeDatePicker(id, date) {
        this.#monthPicker = await getDatePicker("#home-monthSelector", "month")
        this.#monthPicker.datepicker('setDate', date.toISOString());
        this.#monthPicker.on('changeDate', async () => {
            this.#refresh(id, this.#monthPicker.datepicker('getUTCDate'));
        });

        $('.monthPicker .calendar-button').on('click', function () {
            var input = $(this).siblings('.monthSelector');
            if (!input.data('datepicker').picker.is(':visible')) {
                input.datepicker('show');
            } else {
                input.datepicker('hide');
            }
        });
    }

    #initializeCharts() {
        var options = {
            responsive: true,
            layout: {
                padding: 2
            },
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            var label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += window.userNumberFormat.format(context.parsed);
                            }
                            return label;
                        }
                    }
                }
            }
        };
        var sentimentChart = document.getElementById('sentimentChart');
        this.#sentimentChartMonthly = new Chart(sentimentChart, {
            type: 'doughnut',
            data: {
                labels: [
                    'Happy',
                    'Unhappy'
                ],
                datasets: [{
                    label: 'Total Amount',
                    data: [this.#data.expensesHappyTotal, this.#data.expensesTotal - this.#data.expensesHappyTotal],
                    backgroundColor: [
                        'rgb(25,135,84)',
                        'rgb(220,53,69)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: options
        });

        var necessityChart = document.getElementById('necessityChart');
        this.#necessityChartMonthly = new Chart(necessityChart, {
            type: 'doughnut',
            data: {
                labels: [
                    'Necessary',
                    'Unnecessary'
                ],
                datasets: [{
                    label: 'Total Amount',
                    data: [this.#data.expensesNecessaryTotal, this.#data.expensesTotal - this.#data.expensesNecessaryTotal],
                    backgroundColor: [
                        'rgb(25,135,84)',
                        'rgb(220,53,69)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: options
        });
    }

    async #refresh(id, date) {        
        try {
            if (this.#isLoading) {
                messageBox.addAndShow('The dashboard is loading...', '#info-icon');
            }

            this.#isLoading = true;
            let response = await this.#getData(id, date);
            if (response.isSuccess) {
                this.#renderData(response.data);
            } else {
                messageBox.addMessage({ text: response.message, iconId: '#cross-icon' });
                messageBox.show();
            }
            
        } finally {
            this.#isLoading = false;
        }
    }   

    async #getData(id, date) {
        var data = await getFiscalPlanDataByMonth(id, date);
        return data;
    }

    formatDashboard(data) {
        try {
            if (this.#isLoading) {
                messageBox.addAndShow('The dashboard is loading...', '#info-icon');
                return false;
            }
            this.#isLoading = true;

            this.#formatHeaders(data);
            this.#formatCategories(data); 
            this.#formatCharts(data);
            
        } finally {
            this.#isLoading = false;
        }
    }

    #formatCategories(data) {
        var dataObj = data ?? this.#data;

        if (dataObj == null) {
            return false;
        }

        var categoryElements = this.#data.incomeCategories.concat(this.#data.expenseCategories);

        for (let i = 0; i < categoryElements.length; i++) {
            this.#formatCategory(categoryElements[i]);
        }  
        return true;
    }

    #formatCategory(category) {
        if (!category) {
            return false;
        }
        var balanceElement = document.getElementById(`category_${category.id}_balance`);
        balanceElement.textContent = `${window.userNumberFormat.format(category.total)} / 
            ${window.userNumberFormat.format(category.budget)}`;
        if (category.total > category.budget) {
            let deviationAmount = category.total - category.budget;
            let deviationSpan = document.getElementById(`category_${category.id}_deviationText`);
            deviationSpan.textContent = category.categoryType === 1
                ? `Surplus: ${window.userNumberFormat.format(deviationAmount)}`
                : `Overspending: ${window.userNumberFormat.format(deviationAmount)}`;
        }
        return true;
    }

    #formatCharts(data) {
        var dataObj = data ?? this.#data;

        if (dataObj == null) {
            return false;
        }
        this.#sentimentChartMonthly.data.datasets[0].data = [dataObj.expensesHappyTotal, dataObj.expensesTotal - dataObj.expensesHappyTotal, Number.MIN_VALUE];
        this.#sentimentChartMonthly.update();

        this.#necessityChartMonthly.data.datasets[0].data = [dataObj.expensesNecessaryTotal, dataObj.expensesTotal - dataObj.expensesNecessaryTotal, Number.MIN_VALUE];
        this.#necessityChartMonthly.update();

        return true;
    }

    #formatHeaders(data) {
        var dataObj = data ?? this.#data;

        if (dataObj == null) {
            return false;
        }
       
        this.#overspendingHeading.textContent = `Overspending: ${window.userNumberFormat.format(dataObj.overspending)}`;
        this.#incomeBalanceHeader.textContent = `${window.userNumberFormat.format(dataObj.incomeTotal)} / ${window.userNumberFormat.format(dataObj.incomeBudget)}`;
        this.#expenseBalanceHeader.textContent = `${window.userNumberFormat.format(dataObj.expensesTotal)} / ${window.userNumberFormat.format(dataObj.expensesBudget)}`;

        return true;
    }

    #renderData(data) {
        var dataObj = data ?? this.#data;       

        if (dataObj == null) {
            return false;
        }      

        this.#formatCharts(dataObj);
        this.#formatHeaders(dataObj);

        this.#updateCategories(dataObj.incomeCategories);
        this.#updateCategories(dataObj.expenseCategories);

        return true;
    }

    #updateCategories(categories) {
        if (categories.length == 0) {
            return false;
        }

        for (let i = 0; i < categories.length; i++) {
            this.#updateCategory(categories[i]);
        }
        return true;
    }

    #updateCategory(category) {
        if (!category) {
            return false;
        }
        var categoryElement = document.getElementById(`category_${category.id}`);

        if (!categoryElement) {
            this.addCategory(category);
            return true;
        }

        var categoryNameElement = document.getElementById(`category_${category.id}_name`);
        categoryNameElement.textContent = decodeURIComponent(category.name);        

        var budget = category.budgetLimit?.budget ?? category.budget;
        var progressBarElement = document.getElementById(`category_${category.id}_progressbar`)
        var balanceElement = document.getElementById(`category_${category.id}_balance`)
        balanceElement.textContent = `${window.userNumberFormat.format(category.total)} / 
            ${window.userNumberFormat.format(budget)}`;

        var deviationDiv = document.getElementById(`category_${category.id}_deviation`)

        if (category.total > budget) {
            let deviationSpan;
            let deviationAmount = category.total - budget;
            if (!deviationDiv) {
                let categoryBodyDiv = categoryElement.querySelector('.category-body');
                deviationDiv = document.createElement('div');
                deviationDiv.className = 'category-body-content deviation';
                deviationDiv.id = `category_${category.id}_deviation`;

                deviationSpan = document.createElement('span');
                deviationSpan.id = `category_${category.id}_deviationText`;
                deviationSpan.className = 'deviation-text';

                deviationDiv.appendChild(deviationSpan);
                categoryBodyDiv.insertBefore(deviationDiv, balanceElement.parentElement);
            } else {
                deviationSpan = deviationDiv.querySelector(`#category_${category.id}_deviationText`);
            }
            deviationSpan.textContent = category.categoryType === 1
                ? `Surplus: ${window.userNumberFormat.format(deviationAmount)}`
                : `Overspending: ${window.userNumberFormat.format(deviationAmount)}`;

        } else if (deviationDiv) {
            deviationDiv.remove();
        }

        var progressBarPercentage = budget > 0 ? Math.min(100, Math.floor(category.total * 100 / budget)) : 100;
        var color = "bg-success";
        if (category.categoryType == 2) {
            color = progressBarPercentage < 50 ? "bg-success" : progressBarPercentage < 85 ? "bg-warning" : "bg-danger";
        }

        progressBarElement.className = `progress-bar ${color}`;
        progressBarElement.style.width = `${progressBarPercentage}%`;
        progressBarElement.ariaValuenow = `${progressBarPercentage}`;

        return true;
    }    

    #createCategoryElement(category) {
        var mainDiv = document.createElement('div');
        mainDiv.id = `category_${category.id}`;
        mainDiv.className = 'category';
        mainDiv.dataset.id = `${category.id}`;
        mainDiv.tabIndex = 0;
        mainDiv.addEventListener("click", this.#onCategoryClick.bind(this));

        var borderContainerDiv = document.createElement('div');
        borderContainerDiv.className = 'border-container';

        var contentDiv = document.createElement('div');
        contentDiv.className = 'content';

        var categoryBodyDiv = document.createElement('div');
        categoryBodyDiv.className = 'category-body';

        var categoryNameDiv = document.createElement('div');
        categoryNameDiv.id = `category_${category.id}_name`;
        categoryNameDiv.className = "category-body-content";
        categoryNameDiv.textContent = decodeURIComponent(category.name);

        var budget = category.budgetLimit?.budget ?? category.budget;

        var categoryBalanceDiv = document.createElement('div');
        categoryBalanceDiv.className = "category-body-content balance";

        var categoryBalanceSpan = document.createElement('span');
        categoryBalanceSpan.id = `category_${category.id}_balance`;
        categoryBalanceSpan.className = 'balance-text';
        categoryBalanceSpan.textContent = `${window.userNumberFormat.format(category.total)} / 
            ${window.userNumberFormat.format(budget)}`;

        categoryBalanceDiv.appendChild(categoryBalanceSpan);
        categoryBodyDiv.appendChild(categoryNameDiv);

        if (category.total > category.budget) {
            let deviationAmount = category.total - category.budget;
            let deviationDiv = document.createElement('div');
            deviationDiv.className = 'category-body-content deviation';
            deviationDiv.id = `category_${category.id}_deviation`;

            let deviationSpan = document.createElement('span');
            deviationSpan.id = `category_${category.id}_deviationText`;
            deviationSpan.className = 'deviation-text';
            deviationSpan.textContent = category.categoryType === 1
                ? `Surplus: ${window.userNumberFormat.format(deviationAmount)}`
                : `Overspending: ${window.userNumberFormat.format(deviationAmount)}`;

            deviationDiv.appendChild(deviationSpan);
            categoryBodyDiv.appendChild(deviationDiv);
        } 

        categoryBodyDiv.appendChild(categoryBalanceDiv);

        var progressDiv = document.createElement('div');
        progressDiv.className = 'progress';

        var progressBarPercentage = budget > 0 ? Math.min(100, Math.floor(category.total * 100 / budget)) : 100;

        var color = "bg-success";
        if (category.categoryType == 2) {
            color = progressBarPercentage < 50 ? "bg-success" : progressBarPercentage < 85 ? "bg-warning" : "bg-danger";
        }

        var progressBarDiv = document.createElement('div');
        progressBarDiv.id = `category_${category.id}_progressbar`;
        progressBarDiv.className = `progress-bar ${color}`;
        progressBarDiv.role = 'progressbar';
        progressBarDiv.style.width = `${progressBarPercentage}%`;
        progressBarDiv.ariaValuenow = `${progressBarPercentage}`;
        progressBarDiv.ariaValuemin = '0';
        progressBarDiv.ariaValuemax = '100';
        progressBarDiv.setAttribute('aria-labelledby', `category_${category.id}_balance`); 

        progressDiv.appendChild(progressBarDiv);

        contentDiv.appendChild(categoryBodyDiv);
        contentDiv.appendChild(progressDiv);

        var borderAnimationDiv = document.createElement('div');
        borderAnimationDiv.className = 'border-animation';

        borderContainerDiv.appendChild(contentDiv);
        borderContainerDiv.appendChild(borderAnimationDiv);

        mainDiv.appendChild(borderContainerDiv);

        return mainDiv;
    }

    getCategory(id) {
        var categories = this.#data.incomeCategories.concat(this.#data.expenseCategories);
        var category = categories.find(c => c.id == id);
        return category;
    }

    addCategory(category) { 
        var categoryDTO =
        {
            id: category.id,
            name: category.name,
            budget: category.budget,            
            categoryType: category.categoryType,
            happyTotal: 0,
            necessaryTotal: 0,           
            total: 0
        }

        if (category.categoryType === 1) {
            this.#data.incomeBudget += category.budget;
        } else if (category.categoryType === 2) {
            this.#data.expensesBudget += category.budget;
        }  

        var categoryElement = this.#createCategoryElement(categoryDTO);

        var accordion = categoryDTO.categoryType == 1 ? this.#incomeAccordionBody : this.#expenseAccordionBody;
        var array = categoryDTO.categoryType == 1 ? this.#data.incomeCategories : this.#data.expenseCategories;
        var insertIndex = array.findIndex((object) => categoryDTO.name.localeCompare(object.name) < 0);

        if (insertIndex === -1) {
            array.push(categoryDTO);
            accordion.appendChild(categoryElement);
        } else {
            array.splice(insertIndex, 0, categoryDTO);      
            accordion.insertBefore(categoryElement, accordion.children[insertIndex]);
        }

        this.#formatCharts();
        this.#formatHeaders();
    }

    editCategory(formData, month) {        
        var type = parseInt(formData.get('Type'));
        var id = parseInt(formData.get('Id'));
        var name = formData.get("Name");
        var budget = parseFloat(formData.get("Budget"));
        var array;

        switch (type) {
            case 1:
                array = this.#data.incomeCategories;
                break;
            case 2:
                array = this.#data.expenseCategories;
                break;
            default:
                return false;
        }

        var category = array.find(c => c.id === id);

        if (!category) {
            return false;
        }

        var oldBudget = category.budgetLimit?.budget ?? category.budget;

        if (category.name == name && oldBudget == budget) {
            return;
        }

        if (oldBudget != budget) {
            let overspending = Math.max(0, category.total - oldBudget);
            let newOverspending = Math.max(0, category.total - budget);
            let diff = newOverspending - overspending;
            this.#data.overspending += diff;
            switch (type) {
                case 1:
                    this.#data.incomeBudget += budget - oldBudget;
                    break;
                case 2:
                    this.#data.expensesBudget += budget - oldBudget;
                    break;
                default:
                    return false;
            }

            this.#formatHeaders();
            category.budgetLimit = { budget, month }
        }

        category.name = name;

        this.#updateCategory(category);
    }

    removeCategory(id, type) {        
        var categoryElement = document.getElementById(`category_${id}`);

        if (!categoryElement) {
            return false;
        }

        categoryElement.removeEventListener("click", this.#onCategoryClick)
        categoryElement.remove();

        var array;

        switch (type) {
            case 1:
                array = this.#data.incomeCategories;
                break;
            case 2:
                array = this.#data.expenseCategories;
                break;
            default:
                return false;
        }
        var index = array.findIndex(item => item.id === id);    
        if (index !== -1) {
            let category = array[index];
            if (type === 1) {
                this.#data.incomeTotal -= category.total;
                this.#data.incomeBudget -= category.budget;
            } else if (type === 2) {
                this.#data.overspending -= Math.max(0, category.total - category.budget)
                this.#data.expensesTotal -= category.total;
                this.#data.expensesBudget -= category.budget;
                this.#data.expensesHappyTotal -= category.happyTotal;
                this.#data.expensesNecessaryTotal -= category.necessaryTotal;
            }            
            array.splice(index, 1);
            this.#formatCharts();
            this.#formatHeaders();
        }
        return true;
    }

    addTransaction(transaction) {
        var transactionDate = new Date(transaction.dateTime)
        var transactionYear = transactionDate.getYear();
        var transactionMonth = transactionDate.getMonth();
        var currentDate = this.getCurrentMonthUTC();
        var currentYear = currentDate.getYear();
        var currentMonth = currentDate.getMonth();

        if (transactionYear === currentYear && transactionMonth == currentMonth) {
            let array = this.#data.incomeCategories.concat(this.#data.expenseCategories);
            let category = array.find((element) => element.id === transaction.categoryId);  
            let overspending = Math.max(0, category.total - category.budget);   
            
            category.total += transaction.amount;
            this.#data.overspending += Math.max(0, category.total - category.budget - overspending);

            if (category.categoryType === 2) {
                this.#data.expensesTotal += transaction.amount;
                if (transaction.isHappy) {
                    this.#data.expensesHappyTotal += transaction.amount;
                }
                if (transaction.isNecessary) {
                    this.#data.expensesNecessaryTotal += transaction.amount;
                }
            } else if (category.categoryType === 1) {
                this.#data.incomeTotal += transaction.amount;
            }

            if (transaction.isHappy) {
                category.happyTotal += transaction.amount;
            }
            if (transaction.isNecessary) {
                category.necessaryTotal += transaction.amount;
            }

            this.#formatHeaders();
            this.#formatCharts();
            this.#updateCategory(category);
        }        
    }

    getCurrentMonthUTC = () => this.#monthPicker.datepicker('getUTCDate');
    getCurrentMonth = () => this.#monthPicker.datepicker('getDate');        
}
