"use strict";
(self["webpackChunkthebudgeteer"] = self["webpackChunkthebudgeteer"] || []).push([["category"],{

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category-entry.js":
/*!********************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category-entry.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-validation */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation-unobtrusive */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js");
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_bootstrap_imports_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/bootstrap-imports.scss */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/bootstrap-imports.scss");
/* harmony import */ var datatables_net_bs5_css_dataTables_bootstrap5_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datatables.net-bs5/css/dataTables.bootstrap5.min.css */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css");
/* harmony import */ var country_select_js_build_css_countrySelect_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! country-select-js/build/css/countrySelect.min.css */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/country-select-js/build/css/countrySelect.min.css");
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-icons/font/bootstrap-icons.css");
/* harmony import */ var bootstrap_datepicker_dist_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css");
/* harmony import */ var _scss_site_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/site.scss */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/site.scss");
/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./site.js */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/site.js");
/* harmony import */ var _category_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category.js */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category.js");
﻿













/***/ }),

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asyncComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asyncComponents */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/asyncComponents.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/api.js");
/* harmony import */ var _messageBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messageBox */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/messageBox.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/utilities.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery/dist/jquery.js");
﻿




const chartDefaultsTask = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_0__.importChartDefaults)();
const smallScreenSize = 576;
const currentDate = new Date();
const categoryId = document.getElementById('category_Id');

const categoryDashboardPromise = getCategoryDashboard(currentDate, JSON.parse(categoryId.dataset.object));
const modalsPromise = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_0__.importBootstrapModals)()
    .catch(() => {
        _messageBox__WEBPACK_IMPORTED_MODULE_2__["default"].addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);
    });
const collapsesPromise = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_0__.importBootstrapCollapses)()
    .then(() => {
        $('.accordion-head').on('click keydown', function (event) {
            if (event.type === 'click' || event.type === 'keydown' && event.key === 'Enter') {
                if (event.target.id !== 'addTransaction-button') {
                    let collapse = $(this).next();
                    if (!collapse[0].classList.contains('collapsing')) {
                        collapse.collapse('toggle');
                        let caret = $('.accordion-caret', this)[0];
                        caret.classList.toggle('rotate');
                    }
                }
            }
        });
    })
    .catch(() => {
        _messageBox__WEBPACK_IMPORTED_MODULE_2__["default"].addAndShow('A critical error occurred. Please reload the page.', '#cross-icon', false);
    });

const tooltipsPromise = getTooltips();
setupDataTableHandlers(categoryDashboardPromise, modalsPromise)
initAddTransactionModal(categoryDashboardPromise, modalsPromise)
setupRerenderHandlers(categoryDashboardPromise);
(0,_utilities__WEBPACK_IMPORTED_MODULE_3__.setupRefocusHandlers)();

async function getCategoryDashboard(id, date, data) {
    try {
        const { default: CategoryDashboard } = await Promise.all(/*! import() | categoryDashboard */[__webpack_require__.e("async-chartJS~statisticsDashboard~homeDashboard~categoryDashboard"), __webpack_require__.e("async-categoryDashboard")]).then(__webpack_require__.bind(__webpack_require__, /*! ./categoryDashboard */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/categoryDashboard.js"));
        await chartDefaultsTask;

        return new CategoryDashboard(id, date, data);

    } catch(error) {
        _messageBox__WEBPACK_IMPORTED_MODULE_2__["default"].addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);
    }
} 

async function setupRerenderHandlers(dashboardPromise) {
    var dashBoard = await dashboardPromise;   
    await dashBoard.initPromise;
    window.addEventListener('countryChanged', () => {
        setTimeout(() => dashBoard.formatDashboard(), 0);
    })
}

async function setupDataTableHandlers(dashboardPromise, modalsPromise) {
    var dashBoard = await dashboardPromise;   
    await dashBoard.initPromise;
    var table = dashBoard.table;
    var modals = await modalsPromise;

    var updateTransactionModal = modals.find(m => m._element.id == 'updateTransaction-modal');
    var deleteTransactionModal = modals.find(m => m._element.id == 'deleteTransaction-modal');

    initUpdateTransactionModal(dashBoard, updateTransactionModal, table);
    initDeleteTransactionModal(dashBoard, deleteTransactionModal, table);

    var idUpdate = document.getElementById('updateTransaction_id');
    var labelUpdate = document.getElementById('updateTransaction-label');
    var title = document.getElementById('updateTransaction_title');
    var dateTime = document.getElementById('updateTransaction_datetime');
    var amount = document.getElementById('updateTransaction_amount');
    var isHappy = document.getElementById('updateTransaction_isHappyTrue');
    var isUnhappy = document.getElementById('updateTransaction_isHappyFalse');
    var isNecessary = document.getElementById('updateTransaction_isNecessaryTrue');
    var isUnnecessary = document.getElementById('updateTransaction_isNecessaryFalse');

    var labelDelete = document.getElementById('deleteTransaction-label');
    var idDelete = document.getElementById('deleteTransaction_id');
    table.on('click keydown', 'svg', function (event) {
        if (event.type === 'click' || event.type === 'keydown' && event.key === 'Enter') {

            var row = table.row(event.target.closest('tr'));
            var data = row.data();
            switch (this.dataset.icon) {
                case 'edit':
                    idUpdate.value = data.id;
                    labelUpdate.textContent = `Edit '${data.title}'`;
                    title.value = data.title;
                    dateTime.value = data.dateTime.slice(0, 19);
                    amount.value = data.amount;
                    let element = data.isHappy ? isHappy : isUnhappy;
                    element.checked = true;
                    element = data.isNecessary ? isNecessary : isUnnecessary;
                    element.checked = true;
                    updateTransactionModal.show();
                    break;
                case 'delete':
                    idDelete.value = data.id;
                    labelDelete.textContent = `Delete '${data.title}'`;
                    deleteTransactionModal.show();
                    break;
            }
        }
    });

    var tableContainer = document.getElementById('table-container');
    tableContainer.style = '';
    table.columns.adjust();
}

async function initAddTransactionModal(dashboardPromise, modalsPromise) {
    var modals = await modalsPromise;
    var dB = await dashboardPromise;
    var modal = modals.find(m => m._element.id == 'addTransaction-modal');
    var addTransactionModalCategoryId = document.getElementById('addTransaction_categoryId');
    var form = document.getElementById('addTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let response = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.postTransaction)(new FormData(this));
            if (response.isSuccess) {
                dB.addTransaction(response.data);
            }
            _messageBox__WEBPACK_IMPORTED_MODULE_2__["default"].addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });

    var addIcon = document.getElementById('addTransaction-button');
    $(addIcon).on('click keydown', function (event) {
        if (event.type === 'click' || event.type === 'keydown' && event.key === 'Enter') {
            addTransactionModalCategoryId.value = categoryId.value;
            modal.show();
        }
    });
}

function initUpdateTransactionModal(dashboard, modal, table) {
    var form = document.getElementById('updateTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let formData = new FormData(this);
            let response = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.putTransaction)(formData);
            if (response.isSuccess) {
                let row = table.row((_, data) => data.id === parseInt(formData.get('Id')));
                if (row) {
                    let data = row.data();
                    let newAmount = parseFloat(formData.get('Amount'));
                    let newIsHappy = formData.get('IsHappy') === 'true';
                    let newIsNecessary = formData.get('IsNecessary') === 'true'; 
                    dashboard.editTransaction(data, newAmount, newIsHappy, newIsNecessary);
                    data.amount = newAmount;
                    data.title = formData.get('Title');
                    data.dateTime = formData.get('DateTime');
                    data.isHappy = newIsHappy;
                    data.isNecessary = newIsNecessary;
                    data.isEvaluated = formData.get('IsEvaluated') === 'true';
                    data.previousIsHappy = formData.get('PreviousIsHappy') === 'true';
                    data.PreviousIsNecessary = formData.get('PreviousIsNecessary') === 'true';
                    row.invalidate();
                }
                _messageBox__WEBPACK_IMPORTED_MODULE_2__["default"].addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
            }
        }
    });
}

function initDeleteTransactionModal(dashboard, modal, table) {
    var form = document.getElementById('deleteTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown) {
            modal.hide();
            var formData = new FormData(this);
            var id = parseInt(formData.get('Id'));
            var token = formData.get('__RequestVerificationToken');
            var response = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.deleteTransaction)(id, token);
            if (response.isSuccess) {              
                let row = table.row((_, data) => data.id === parseInt(formData.get('Id')));
                if (row) {
                    dashboard.removeTransaction(row.data());
                    row.remove().draw();
                }
            }
            _messageBox__WEBPACK_IMPORTED_MODULE_2__["default"].addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });
}

async function getTooltips() {
    const Tooltip = (await Promise.all(/*! import() | bootstrap-tooltips */[__webpack_require__.e("async-bootstrap-collapses~bootstrap-modals~bootstrap-tooltips"), __webpack_require__.e("async-bootstrap-tooltips")]).then(__webpack_require__.t.bind(__webpack_require__, /*! bootstrap/js/dist/tooltip */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap/js/dist/tooltip.js", 23))).default;
    var tooltipElements = document.querySelectorAll('.tooltipped');
    var tooltips = [...tooltipElements].map(element => new Tooltip(element, {
        container: 'body',
        delay: { show: 500, hide: 0 },
        offset: [0, 10],
        placement: (instance, _) => {
            var query = window.matchMedia(`(min-width: ${smallScreenSize}px)`);
            return instance._element.classList.contains('sidebar-button-container')
                && query.matches ? 'right' : 'top';
        },
    }));
    return tooltips;
}

/***/ }),

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-icons/font/bootstrap-icons.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-icons/font/bootstrap-icons.css ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["styles-index~fiscalPlan~category","styles-fiscalPlan~category","vendors-index~fiscalPlan~category"], () => (__webpack_exec__("../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=category.js.map