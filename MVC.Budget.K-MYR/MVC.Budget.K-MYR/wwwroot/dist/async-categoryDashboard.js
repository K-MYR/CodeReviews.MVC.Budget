"use strict";
(self["webpackChunkthebudgeteer"] = self["webpackChunkthebudgeteer"] || []).push([["async-categoryDashboard"],{

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/categoryDashboard.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/categoryDashboard.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryDashboard)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/chart.js/dist/chart.js");
/* harmony import */ var _asyncComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asyncComponents */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/asyncComponents.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/api.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/config.js");
/* harmony import */ var _messageBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messageBox */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/messageBox.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery/dist/jquery.js");
﻿
chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_0__.DoughnutController, chart_js__WEBPACK_IMPORTED_MODULE_0__.ArcElement);





class CategoryDashboard {
    #data;
    #isLoading;
    initPromise;
    #monthPicker;
    #sentimentChart;
    #necessityChart;    
    table;
    #budgetHeader;
    #differenceHeader;
    #totalHeader;

    constructor(date, data) {
        this.#data = data;
        this.initPromise = this.#init(date);
    }

    async #init(date) {
        try {
            this.#isLoading = true;
            var token = document.getElementById('antiforgeryToken').value;
            var datepickerPromise = this.#initializeDatePicker(date);
            var tablePromise = this.#initializeTable(token);
            this.#initializeCharts();
            this.#budgetHeader = document.getElementById('budget-header');
            this.#totalHeader = document.getElementById('total-header');
            this.#differenceHeader = document.getElementById('difference-header');

            await tablePromise;
            await datepickerPromise;
            this.table.ajax.reload(null, false);
        } finally {
            this.#isLoading = false;
        }
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
        this.#sentimentChart = new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(sentimentChart, {
            type: 'doughnut',
            data: {
                labels: [
                    'Happy',
                    'Unhappy'
                ],
                datasets: [{
                    label: 'Total Amount',
                    data: [sentimentChart.dataset.happy, sentimentChart.dataset.unhappy],
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
        this.#necessityChart = new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(necessityChart, {
            type: 'doughnut',
            data: {
                labels: [
                    'Necessary',
                    'Unnecessary'
                ],
                datasets: [{
                    label: 'Total Amount',
                    data: [necessityChart.dataset.necessary, necessityChart.dataset.unnecessary],
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

    async #initializeDatePicker(date) {
        this.#monthPicker = await (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_1__.getDatePicker)("#monthSelector", "month")
        this.#monthPicker.datepicker('setDate', date.toISOString());
        this.#monthPicker.on('changeDate', async () => {
            this.#refresh(this.#monthPicker.datepicker('getUTCDate'));            
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

    async #initializeTable(token) {
        try {
            const { default: DataTable } = await __webpack_require__.e(/*! import() | datatables */ "async-datatables").then(__webpack_require__.bind(__webpack_require__, /*! datatables.net-bs5 */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/datatables.net-bs5/js/dataTables.bootstrap5.mjs"));
            var lastAjaxData = {
                start: 0,
                lastId: null,
                lastValue: null
            };
            var self = this;
            var table = new DataTable('#transactions-table', {
                processing: true,
                serverSide: true,
                deferLoading: 0,
                order: [[1, 'desc']],
                ajax: function (data, callback, settings) {
                    var table = new $.fn.dataTable.Api(settings);

                    var isPrevious = false;
                    var lastId = null;
                    var lastValue = null;
                    var orderBy = null;
                    var orderDirection = null;                    

                    if (data.order?.[0]) {
                        orderBy = data.order[0].name;
                        orderDirection = data.order[0].dir;
                    }

                    if (data.start !== 0) {
                        let rowData = null;

                        if (lastAjaxData.start !== data.start) {
                            isPrevious = lastAjaxData.start > data.start;
                            rowData = isPrevious ? table.row(':first').data() : table.row(':last').data();
                        } else {
                            lastId = lastAjaxData.lastId;
                            lastValue = lastAjaxData.lastValue;
                        }

                        if (rowData) {
                            lastId = rowData.id;
                            if (orderBy) {
                                lastValue = rowData[orderBy];
                            }
                        }
                    }

                    var date = self.#monthPicker.datepicker('getUTCDate');
                    var start = new Date(Date.UTC(date.getFullYear(), date.getMonth()));
                    var end = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 1));                  
                    end.setMilliseconds(-1);
                    var requestData = {
                        draw: data.draw,
                        start: data.start,
                        pageSize: data.length,
                        orderBy: orderBy,
                        orderDirection: orderDirection === 'asc' ? 0 : 1,
                        lastId: lastId,
                        lastValue: lastValue,
                        isPrevious: isPrevious,
                        categoryId: self.#data.id,
                        MinDate: start.toISOString(),
                        MaxDate: end.toISOString(),
                    };
                    $.ajax({
                        url: _config__WEBPACK_IMPORTED_MODULE_3__.API_ROUTES.transactions.GET_SEARCH,
                        type: 'POST',
                        contentType: 'application/json',
                        headers: {
                            'RequestVerificationToken': token
                        },
                        data: JSON.stringify(requestData),
                        success: function (response) {
                            callback({
                                draw: response.draw,
                                recordsFiltered: data.start + response.transactions.length + (response.hasNext === true ? 1 : 0),
                                data: response.transactions
                            });
                            lastAjaxData = {
                                start: requestData.start,
                                lastId: requestData.lastId,
                                lastValue: requestData.lastValue
                            };
                        },
                        error: function (xhr, status, error) {
                            _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow('Failed to fetch data.Please try again.', '#cross-icon');
                        }
                    });

                },
                info: false,
                layout: {
                    topStart: null,
                    topEnd: null,
                    bottomStart: 'pageLength',
                    bottomEnd: {
                        paging: {
                            type: 'simple',
                            numbers: false
                        }
                    }
                },
                lengthMenu: [10, 25, 50],
                columns: [
                    { data: 'title', render: DataTable.render.text(), name: 'title' },
                    { data: 'dateTime', name: 'dateTime' },
                    { data: 'amount', name: 'amount' },
                    {
                        data: null,
                        defaultContent:
                            `<div class="d-flex justify-content-center align-items-center flex-wrap gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="table-icon" tabindex="0" data-icon="edit">
                            <use href="#edit-icon"/>
                        </svg >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="table-icon" viewBox="0 0 16 16" tabindex="0" data-icon="delete">
                            <use href="#trash-icon"/>
                        </svg>
                    </div>`,
                        targets: -1,
                        sortable: false
                    },
                ],
                columnDefs: [{
                    targets: 2,
                    render: function (data, type, row) {
                        if (type === 'display') {
                            return window.userNumberFormat.format(data);
                        } else {
                            return data;
                        }
                    }
                }, {
                    targets: 1,
                    render: function (data, type, row) {
                        if (type === 'display') {
                            return new Date(data).toLocaleString(window.userLocale);
                        } else {
                            return data;
                        }
                    }
                }],
                scrollX: true,
                scrollCollapse: true
            });
            this.table = table;
            var tableContainer = document.getElementById('table-container');
            tableContainer.style = '';
            table.columns.adjust();
        } catch (error) {
            _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);
        }
    }

    async #refresh(date) {
        try {
            if (this.#isLoading) {
                _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow('The dashboard is loading...', '#info-icon');
                return false;
            }
            this.#isLoading = true;
            this.table.ajax.reload(null, true)
            var response = await this.#getData(this.#data.id, date, this.#data.categoryType);

            if (response.isSuccess) {
                this.#formatCharts(response.data);
                this.#formatHeaders(response.data);
                this.#data = response.data;
            } else {
                _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow(response.message, '#cross-icon');
            }
            
        } finally {
            this.#isLoading = false;
        }
    } 

    async #getData(id, date, type) {
        var data = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.getCategoryDataByMonth)(id, date, type);
        return data;
    }

    #formatCharts(data) {
        var dataObj = data ?? this.#data;

        if (dataObj == null) {
            return false;
        }
        this.#sentimentChart.data.datasets[0].data = [dataObj.happyTotal, dataObj.total - dataObj.happyTotal, Number.MIN_VALUE];
        this.#sentimentChart.update();

        this.#necessityChart.data.datasets[0].data = [dataObj.necessaryTotal, dataObj.total - dataObj.necessaryTotal, Number.MIN_VALUE];
        this.#necessityChart.update();

        return true;
    }

    #formatHeaders(data) {
        var dataObj = data ?? this.#data;
        if (dataObj == null) {
            return false;
        }
        var isIncomeCategory = dataObj.categoryType === 1;
        var budgetHeading = isIncomeCategory ? 'Goal' : 'Budget';
        var totalHeading = isIncomeCategory ? 'Income' : 'Expenses';
        var budget = dataObj.budgetLimit?.budget ?? dataObj.budget;
        var difference = budget - dataObj.total;
        var differenceHeading;
        if (difference < 0) {
            differenceHeading = isIncomeCategory ? "Surplus" : "Overspending";
        } else {
            differenceHeading = isIncomeCategory ? "Pending" : "Available";
        }       

        this.#budgetHeader.textContent = `${budgetHeading}: ${window.userNumberFormat.format(budget)}`;
        this.#totalHeader.textContent = `${totalHeading}: ${window.userNumberFormat.format(dataObj.total)}`;
        this.#differenceHeader.textContent = `${differenceHeading}: ${window.userNumberFormat.format(Math.abs(difference))}`;

        return true;
    }

    formatDashboard(data) {
        var dataObj = data ?? this.#data;

        if (dataObj == null) {
            return false;
        }
        this.#formatCharts(dataObj);
        this.#formatHeaders(dataObj);
        this.table.rows().invalidate().draw();

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
            this.#data.total += transaction.amount;

            if (transaction.isHappy) {
                this.#data.happyTotal += transaction.amount;
            }
            if (transaction.isNecessary) {
                this.#data.necessaryTotal += transaction.amount;
            }     

            this.#formatHeaders();
            this.#formatCharts();
            this.table.ajax.reload(null, false);
        }
    }

    editTransaction(oldTransaction, newAmount, newIsHappy, newIsNecessary) {
        var difference = newAmount - oldTransaction.amount
        this.#data.total += difference;
        this.#data.happyTotal += (newIsHappy * newAmount) - (oldTransaction.isHappy * oldTransaction.amount);
        this.#data.necessaryTotal += (newIsNecessary * newAmount) - (oldTransaction.isNecessary * oldTransaction.amount);

        this.#formatHeaders();
        this.#formatCharts();
    }

    removeTransaction(transaction) {
        this.#data.total -= transaction.amount;
        this.#data.happyTotal -= transaction.isHappy * transaction.amount;
        this.#data.necessaryTotal -= transaction.isNecessary * transaction.amount;

        this.#formatHeaders();
        this.#formatCharts();
    }

    getCurrentMonthUTC = () => this.#monthPicker.datepicker('getUTCDate');
    getCurrentMonth = () => this.#monthPicker.datepicker('getDate');
}

/***/ })

}]);
//# sourceMappingURL=async-categoryDashboard.js.map