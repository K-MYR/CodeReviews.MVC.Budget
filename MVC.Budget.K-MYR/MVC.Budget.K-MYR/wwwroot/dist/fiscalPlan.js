"use strict";
(self["webpackChunkthebudgeteer"] = self["webpackChunkthebudgeteer"] || []).push([["fiscalPlan"],{

/***/ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan-entry.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../../C # Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan-entry.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-validation */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation-unobtrusive */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js");
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var datatables_net_bs5_css_dataTables_bootstrap5_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net-bs5/css/dataTables.bootstrap5.css */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/datatables.net-bs5/css/dataTables.bootstrap5.css");
/* harmony import */ var country_select_js_build_css_countrySelect_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! country-select-js/build/css/countrySelect.min.css */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/country-select-js/build/css/countrySelect.min.css");
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-icons/font/bootstrap-icons.css");
/* harmony import */ var bootstrap_datepicker_dist_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css");
/* harmony import */ var _scss_site_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/site.scss */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/site.scss");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./site */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/site.js");
/* harmony import */ var _fiscalPlan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fiscalPlan */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan.js");
﻿











/***/ }),

/***/ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan.js":
/*!********************************************************************************************************************************!*\
  !*** ../../../../../C # Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/utilities.js");
/* harmony import */ var _asyncComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asyncComponents */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/asyncComponents.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/api.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery/dist/jquery.js");
﻿



const currentDate = new Date();

const chartDefaultsTask = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_1__.importChartDefaults)();

const fiscalPlanId = document.getElementById("fiscalPlan_Id");
const menu = document.getElementById('menu-container');

const homeDashboardPromise = getHomeDashboard(menu, fiscalPlanId.value, currentDate, JSON.parse(fiscalPlanId.dataset.object));
const statisticsDashboardPromise = getStatisticsDashboard(fiscalPlanId.value, currentDate);
const reevaluationDashboardPromise = getReevaluationDashboard(fiscalPlanId.value);
const modalsPromise = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_1__.importBootstrapModals)();
const collapsesPromise = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_1__.importBootstrapCollapses)().then((collapses) => {
    $(".accordion-head").on("click", function (event) {     
        if (!event.target.classList.contains("add-category-icon")) {
            collapses.find(c => c._element.id == this.nextElementSibling.id).toggle();
            let caret = $('.accordion-caret', this)[0];
            caret.classList.toggle("rotate");
        }
    });
});
const transactionsTablePromise = getTransactionsTable()
    .then((table) => {
        $('#search-form').on("submit", async function (event) {
            event.preventDefault();
            if ($(this).valid()) {
                let transactions = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.getTransactions)(new FormData(this));
                table.clear();
                table.rows.add(transactions);
                table.draw();
            }
        });
    });

setupModalHandlers();
setupFlipContainer();

async function setupModalHandlers() {
    const modals = await modalsPromise;
    const homeDashboard = await homeDashboardPromise;
    const addCategoryModal = modals.find(m => m._element.id == "addCategory-modal");
    const addCategoryModalType = document.getElementById("addCategory_type");
    const addCategoryFiscalPlanId = document.getElementById("addCategory_fiscalPlanId");

    const updateCategoryModal = modals.find(m => m._element.id == "updateCategory-modal");
    const updateCategoryModalLabel = document.getElementById("updateCategory-label");
    const updateCategoryModalId = document.getElementById("updateCategory_id");
    const updateCategoryModalName = document.getElementById("updateCategory_name");
    const updateCategoryModalBudget = document.getElementById("updateCategory_budget");
    const updateCategoryModalType = document.getElementById("updateCategory_type");
    const updateCategoryFiscalPlanId = document.getElementById("updateCategory_fiscalPlanId");

    const addTransactionModal = modals.find(m => m._element.id == "addTransaction-modal");
    const addTransactionModalCategoryId = document.getElementById("addTransaction_categoryId");

    document.getElementById('add-category-form').addEventListener("submit", async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
            addCategoryModal.hide();
            var category = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.postCategory)(new FormData(this));

            if (category) {
                homeDashboard.addCategory(category);
            }
        }
    });
    document.getElementById('add-transaction-form').addEventListener("submit", async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
            addTransactionModal.hide();
            var transaction = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.postTransaction)(new FormData(this));

            if (transaction) {
                homeDashboard.addTransaction(transaction);
            }
        }
    });
    document.getElementById('update-category-form').addEventListener("submit", async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
            updateCategoryModal.hide();
            var month = homeDashboard.getCurrentMonth().toISOString()
            var isUpdated = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.putCategory)(new FormData(this), month);
        }
    });

    $(".add-category-icon").on("click", function (event) {
        var type = $(this).closest('.accordion')[0].dataset.type;
        addCategoryModalType.value = type;
        addCategoryFiscalPlanId.value = fiscalPlanId.value;
        addCategoryModal.show();
    });

    document.getElementById('close-menu').onclick = function () {
        menu.classList.remove('active');
        var id = menu.dataset.categoryid;
        var borderBox = document.getElementById(`category_${id}`).querySelector('.border-animation');
        borderBox.classList.remove('border-rotate');
        menu.dataset.categoryid = 0;
    }
    document.getElementById('add-menu').onclick = async function () {
        addTransactionModalCategoryId.value = menu.dataset.categoryid;
        addTransactionModal.show();
    }
    document.getElementById('edit-menu').onclick = function () {
        var category = document.getElementById(`category_${menu.dataset.categoryid}`);

        updateCategoryModalLabel.textContent = category.dataset.name;
        updateCategoryModalId.value = category.dataset.id;
        updateCategoryModalName.value = category.dataset.name;
        updateCategoryModalBudget.value = category.dataset.budget;
        updateCategoryModalType.value = category.dataset.type;    
        updateCategoryFiscalPlanId.value = fiscalPlanId.value;
        updateCategoryModal.show();
    }
    document.getElementById('delete-menu').onclick = function () {
        var token = menu.querySelector('input').value;
        var id = parseInt(menu.dataset.categoryid);
        var type = parseInt(menu.dataset.type);
        var isDeleted = (0,_api__WEBPACK_IMPORTED_MODULE_2__.deleteCategory)(id, type, token)
        if (isDeleted) {
            homeDashboard.removeCategory(id, type);
            menu.classList.remove('active');
            menu.dataset.categoryid = 0;
        }
    }
    document.getElementById('details-menu').onclick = function () {
        var id = menu.dataset.categoryid;
        window.location.href = "Category/" + id;
    }

    homeDashboard.setupMenuHandlers();
}

function setupFlipContainer() {
    var flipContainer = document.getElementById("flip-container-inner");
    var currentSideIndex = 0;
    var currentDeg = 0;

    $('#action-sidebar').on("click", '.sidebar-button-container', async function (event) {
        if (currentSideIndex === this.dataset.index) {
            return;
        }

        var degreeDiff = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.shortestAngle)(currentSideIndex, this.dataset.index);

        currentDeg += degreeDiff;

        flipContainer.style = `transform: rotateY(${currentDeg}deg)`;

        currentSideIndex = this.dataset.index;
    });

    flipContainer.addEventListener("transitionend", () => {

        currentDeg = currentDeg % 360;
        (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.resetStyle)(flipContainer, `transform: rotateY(${currentDeg}deg)`);
    });
}

async function getTransactionsTable() {
    try {
        const { default: DataTable} = await __webpack_require__.e(/*! import() | datatables */ "async-datatables").then(__webpack_require__.bind(__webpack_require__, /*! datatables.net-bs5 */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/datatables.net-bs5/js/dataTables.bootstrap5.mjs"));
        let dataTable = new DataTable('#transactions-table', {
            info: false,
            dom: '<"pb-1" t<"d-flex justify-content-between mt-3"<"pt-1"l>p>>',
            columns: [
                { data: 'title' }, { data: 'dateTime' }, { data: 'amount' }, { data: 'category' }, {
                    data: null,
                    defaultContent:
                    `<svg  width='20' height='20' fill='rgba(255, 255, 255, 1)' class='me-2 table-icon' viewBox='0 0 16 16'>
                        <defs>
                        <linearGradient id="icon_gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#CCFBE5;stop-opacity:1" />
                            <stop offset="50%" style="stop-color:#A2D6CB;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#7EB1B1;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                        <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/>
                        <path fill-rule="evenodd" d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z'>
                    </svg >
                    <svg width="20" height="20" fill="rgba(255, 255, 255, 1)" viewBox="0 0 16 16" class="table-icon">
                    <defs>
                        <linearGradient id="icon_gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#CCFBE5;stop-opacity:1" />
                            <stop offset="50%" style="stop-color:#A2D6CB;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#7EB1B1;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>`,
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
        dataTable.on('click', 'svg', function () {
            var row = dataTable.row($(this).parents('tr'));
            var data = row.data();
            console.log(data);
        });
        return dataTable;
    } catch (error) {
        console.error('Error loading Datatable:', error);
        throw error;
    }
}

async function getStatisticsDashboard(id, date) {
    try {
        await chartDefaultsTask;
        const { default: StatisticsDashboard } = await Promise.all(/*! import() | statisticsDashboard */[__webpack_require__.e("async-chartJS~statisticsDashboard~homeDashboard"), __webpack_require__.e("async-statisticsDashboard")]).then(__webpack_require__.bind(__webpack_require__, /*! ./statisticsDashboard */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/statisticsDashboard.js"));

        return new StatisticsDashboard(id, date);
    } catch (error) {
        console.error('Error loading statistics dashboard:', error);
        throw error;
    }    
}

async function getHomeDashboard(menu, id, date, data) {
    try {
        await chartDefaultsTask;
        const { default: HomeDashboard } = await Promise.all(/*! import() | homeDashboard */[__webpack_require__.e("async-chartJS~statisticsDashboard~homeDashboard"), __webpack_require__.e("async-homeDashboard")]).then(__webpack_require__.bind(__webpack_require__, /*! ./homeDashboard */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/homeDashboard.js"));

        return new HomeDashboard(menu, id, date, data);

    } catch (error) {
        console.error('Error loading home dashboard:', error);
        throw error;
    }
} 

async function getReevaluationDashboard(id) {
    try {
        const { default: ReevaluationDashboard } = await __webpack_require__.e(/*! import() | reevaluationDashboard */ "async-reevaluationDashboard").then(__webpack_require__.bind(__webpack_require__, /*! ./reevaluationDashboard */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/reevaluationDashboard.js"));

        return new ReevaluationDashboard(id);
    } catch (error) {
        console.error('Error loading reevaluation dashboard:', error);
        throw error;
    }
    
} 


/***/ }),

/***/ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/utilities.js":
/*!*******************************************************************************************************************************!*\
  !*** ../../../../../C # Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/utilities.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomColor: () => (/* binding */ getRandomColor),
/* harmony export */   resetStyle: () => (/* binding */ resetStyle),
/* harmony export */   shortestAngle: () => (/* binding */ shortestAngle)
/* harmony export */ });
﻿function shortestAngle(index1, index2) {
    var diff = (index2 - index1 + 4) % 4;

    if (diff === 1) {
        return -90;
    } else if (diff === 2) {
        return -180;
    } else if (diff === 3) {
        return 90;
    } else {
        return 0;
    }
}

function resetStyle(element, style) {
    element.style = style + '; transition: transform 0s';
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/***/ }),

/***/ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css":
/*!************************************************************************************************************************************************************************************!*\
  !*** ../../../../../C # Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/datatables.net-bs5/css/dataTables.bootstrap5.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../../../../C # Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/datatables.net-bs5/css/dataTables.bootstrap5.css ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["styles-index~fiscalPlan","styles-fiscalPlan","vendors-index~fiscalPlan"], () => (__webpack_exec__("../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=fiscalPlan.js.map