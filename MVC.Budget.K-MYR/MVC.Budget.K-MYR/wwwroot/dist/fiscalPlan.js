"use strict";
(self["webpackChunkthebudgeteer"] = self["webpackChunkthebudgeteer"] || []).push([["fiscalPlan"],{

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan-entry.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan-entry.js ***!
  \**********************************************************************************************************************************************/
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
/* harmony import */ var _fiscalPlan_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fiscalPlan.js */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan.js");
﻿













/***/ }),

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/config.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/utilities.js");
/* harmony import */ var _asyncComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asyncComponents */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/asyncComponents.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/api.js");
/* harmony import */ var _messageBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messageBox */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/messageBox.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery/dist/jquery.js");
﻿





const smallScreenSize = 576;
const currentDate = new Date();
const fiscalPlanId = document.getElementById('fiscalPlan_Id');
const menu = document.getElementById('menu-container');
const antiforgeryToken = document.getElementById('antiforgeryToken');
const chartDefaultsTask = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_2__.importChartDefaults)();
const homeDashboardPromise = getHomeDashboard(menu, fiscalPlanId.value, currentDate, JSON.parse(fiscalPlanId.dataset.object));
const statisticsDashboardPromise = getStatisticsDashboard(fiscalPlanId.value, currentDate);
const reevaluationDashboardPromise = getReevaluationDashboard(antiforgeryToken.value);
const modalsPromise = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_2__.importBootstrapModals)()
    .catch(() => {
        _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);
    });
const collapsesPromise = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_2__.importBootstrapCollapses)()
    .then(() => {
        $('.accordion-head').on('click keydown', function (event) {
            if (event.type === 'click' || event.type === 'keydown' && event.key === 'Enter') {
                if (!event.target.classList.contains('addCategory-icon')) {
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
        _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);
    });
const transactionsTablePromise = getTransactionsTable();    
const tooltipsPromise = getTooltips();

setupFlipContainer();
setupModalHandlers(modalsPromise, homeDashboardPromise, reevaluationDashboardPromise);
setupDataTableModalHandlers(transactionsTablePromise, modalsPromise);
setupRerenderHandlers(homeDashboardPromise, statisticsDashboardPromise, reevaluationDashboardPromise, transactionsTablePromise);
setupRefocusHandlers();

async function setupRerenderHandlers(homeDBPromise, statisticsDBPromise, reevaluationDBPromise, tablePromise) {
    var [homeDB, statisticsDB, reevaluationDB, transactionsTable] = await Promise.all(
        [homeDBPromise, statisticsDBPromise, reevaluationDBPromise, tablePromise]
    );
    window.addEventListener('countryChanged', () => {
        setTimeout(() => homeDB.formatDashboard(), 0);
        setTimeout(() => reevaluationDB.formatDashboard(), 0);
        setTimeout(() => statisticsDB.formatDashboard(), 0);
        setTimeout(() => transactionsTable.rows().invalidate().draw(), 0);
    })
}

async function setupDataTableModalHandlers(tablePromise, modalsPromise) {
    var table = await tablePromise;

    $('#search-form').on('submit', async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
            table.ajax.reload(null, true);
        }
    });

    var modals = await modalsPromise;
    var updateTransactionModal = modals.find(m => m._element.id == 'updateTransaction-modal');
    var deleteTransactionModal = modals.find(m => m._element.id == 'deleteTransaction-modal');

    initUpdateTransactionModal(updateTransactionModal, table);
    initDeleteTransactionModal(deleteTransactionModal, table);

    var idUpdate= document.getElementById('updateTransaction_id');
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

async function setupModalHandlers(modalsPromise, homeDBPromise, reevalDBPromise) {
    var modals = await modalsPromise;
    var homeDashboard = await homeDBPromise;    
    var addCategoryModal = modals.find(m => m._element.id == 'addCategory-modal');
    var updateCategoryModal = modals.find(m => m._element.id == 'updateCategory-modal');
    var deleteCategoryModal = modals.find(m => m._element.id == 'deleteCategory-modal');
    var addTransactionModal = modals.find(m => m._element.id == 'addTransaction-modal');

    initAddCategoryModal(addCategoryModal, homeDashboard);
    initUpdateCategoryModal(updateCategoryModal, homeDashboard);
    initAddTransactionModal(addTransactionModal, homeDashboard); 
    var reevalDashboard = await reevalDBPromise;
    initDeleteCategoryModal(deleteCategoryModal, homeDashboard, reevalDashboard);  

    document.getElementById('close-menu').onclick = function () {
        if (menu.classList.contains('active')) {
            var id = menu.dataset.categoryid;
            var borderBox = document.getElementById(`category_${id}`).querySelector('.border-animation');
            borderBox.classList.remove('border-rotate');
            menu.dataset.categoryid = 0;
            menu.classList.remove('active');
        }        
    }    
    document.getElementById('details-menu').onclick = function () {
        var id = menu.dataset.categoryid;
        window.location.href = _config__WEBPACK_IMPORTED_MODULE_0__.PAGE_ROUTES.CATEGORY(id);
    }
    homeDashboard.attachMenuHandlers();
}

function initAddCategoryModal(modal, homeDashboard) {
    var addCategoryModalType = document.getElementById('addCategory_type');
    var addCategoryModalFiscalPlanId = document.getElementById('addCategory_fiscalPlanId');
    var form = document.getElementById('addCategory-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();            
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let response = await (0,_api__WEBPACK_IMPORTED_MODULE_3__.postCategory)(new FormData(this));
            if (response.isSuccess) {
                homeDashboard.addCategory(response.data);
            }
            _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon');   
        }
    });

    $('.addCategory-icon').on('click keydown', function (event) {
        if (event.type === 'click' || event.type === 'keydown' && event.key === 'Enter') {
            var type = $(this).closest('.accordion')[0].dataset.type;
            addCategoryModalType.value = type;
            addCategoryModalFiscalPlanId.value = fiscalPlanId.value;
            modal.show();
        }
    });
}

function initUpdateCategoryModal(modal, homeDashboard) {
    var updateCategoryModalLabel = document.getElementById('updateCategory-label');
    var updateCategoryModalId = document.getElementById('updateCategory_id');
    var updateCategoryModalName = document.getElementById('updateCategory_name');
    var updateCategoryModalBudget = document.getElementById('updateCategory_budget');
    var updateCategoryModalType = document.getElementById('updateCategory_type');
    var updateCategoryModalFiscalPlanId = document.getElementById('updateCategory_fiscalPlanId');
    var form = document.getElementById('updateCategory-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let month = homeDashboard.getCurrentMonth();
            let formData = new FormData(this);
            let response = await (0,_api__WEBPACK_IMPORTED_MODULE_3__.putCategory)(formData, month);
            if (response.isSuccess) {
                homeDashboard.editCategory(formData, month);
            }
            _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });

    var editIcon = document.getElementById('edit-menu');
    editIcon.addEventListener('click', function () {
        let data = homeDashboard.getCategory(menu.dataset.categoryid);
        updateCategoryModalLabel.textContent = `Edit '${data.name}'`;
        updateCategoryModalId.value = data.id;
        updateCategoryModalName.value = data.name;
        updateCategoryModalBudget.value = data.budgetLimit?.budget ?? data.budget;
        updateCategoryModalType.value = data.categoryType;
        updateCategoryModalFiscalPlanId.value = fiscalPlanId.value;
        modal.show();
    });
}

function initDeleteCategoryModal(modal, homeDashboard, reevalDashboard) {    
    var deleteCategoryModalLabel = document.getElementById('deleteCategory-label');
    var deleteCategoryModalId = document.getElementById('deleteCategory_id');
    var deleteCategoryModalType = document.getElementById('deleteCategory_type');
    var form = document.getElementById('deleteCategory-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown) {
            modal.hide();
            let formData = new FormData(this);
            let id = parseInt(formData.get('Id'));
            let type = parseInt(formData.get('Type'));
            let token = formData.get('__RequestVerificationToken');
            let response = await (0,_api__WEBPACK_IMPORTED_MODULE_3__.deleteCategory)(id, type, token);
            if (response.isSuccess) {
                homeDashboard.removeCategory(id, type);
                reevalDashboard.removeCategory(id);
                menu.classList.remove('active');
                menu.dataset.categoryid = 0;                
            }
            _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });
    var deleteIcon = document.getElementById('delete-menu');
    deleteIcon.addEventListener('click', function () {
        var data = homeDashboard.getCategory(menu.dataset.categoryid);
        deleteCategoryModalLabel.textContent = `Delete '${data.name}'`;
        deleteCategoryModalType.value = data.categoryType;
        deleteCategoryModalId.value = menu.dataset.categoryid;
        modal.show();
    });
}

function initAddTransactionModal(modal, homeDashboard) {
    var addTransactionModalCategoryId = document.getElementById('addTransaction_categoryId');
    var form = document.getElementById('addTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let response = await (0,_api__WEBPACK_IMPORTED_MODULE_3__.postTransaction)(new FormData(this));
            if (response.isSuccess) {
                homeDashboard.addTransaction(response.data);
            }
            _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });

    var addIcon = document.getElementById('add-menu');
    addIcon.addEventListener('click', function () {
        addTransactionModalCategoryId.value = menu.dataset.categoryid;
        modal.show();
    });
}

function initUpdateTransactionModal(modal, table) {
    var form = document.getElementById('updateTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let formData = new FormData(this);
            let response = await (0,_api__WEBPACK_IMPORTED_MODULE_3__.putTransaction)(formData);            
            if (response.isSuccess) {
                let row = table.row((_, data) => data.id === parseInt(formData.get('Id')));
                if (row) {
                    let data = row.data();
                    data.amount = parseFloat(formData.get('Amount'));
                    data.title = formData.get('Title');
                    data.dateTime = formData.get('DateTime');
                    data.isHappy = formData.get('IsHappy') === 'true';
                    data.isNecessary = formData.get('IsNecessary') === 'true';
                    data.isEvaluated = formData.get('IsEvaluated') === 'true';
                    data.previousIsHappy = formData.get('PreviousIsHappy') === 'true';
                    data.PreviousIsNecessary = formData.get('PreviousIsNecessary') === 'true';
                    row.invalidate();
                }            
            }
            _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });
}

function initDeleteTransactionModal(modal, table) {
    var form = document.getElementById('deleteTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown) {
            modal.hide();
            let formData = new FormData(this);
            let id = parseInt(formData.get('Id'));
            let token = formData.get('__RequestVerificationToken');
            let response = await (0,_api__WEBPACK_IMPORTED_MODULE_3__.deleteTransaction)(id, token);
            if (response.isSuccess) {
                let row = table.row((_, data) => data.id === parseInt(formData.get('Id')));
                if (row) {
                    row.remove().draw();
                }
            }
            _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });  
}

function setupFlipContainer() {
    var faces = ['face_0', 'face_1', 'face_2', 'face_3'];
    var flipContainer = document.getElementById('flip-container-inner');
    var currentSideIndex = 0;
    var currentDeg = 0;

    $('#action-sidebar').on('click', '.sidebar-button-container', function () {
        this.blur();
        var index = parseInt(this.dataset.index);
        if (currentSideIndex === index) {
            return;
        }

        var currentFace = document.getElementById(faces[currentSideIndex]);
        var nextFace = document.getElementById(faces[index]);

        if (currentSideIndex == 0) {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        }

        var degreeDiff = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.shortestAngle)(currentSideIndex, index);
        currentDeg += degreeDiff;       

        flipContainer.style = `transform: rotateY(${currentDeg}deg)`;
        currentFace.classList.remove('visible-face');
        nextFace.classList.add('visible-face');
        nextFace.removeAttribute('inert');
        currentFace.setAttribute('inert', '');
        nextFace.setAttribute('aria-hidden', 'false');
        currentFace.setAttribute('aria-hidden', 'true');
        currentSideIndex = index;
    });

    flipContainer.addEventListener('transitionend', (event) => {
        if (event.propertyName == 'transform') {
            currentDeg = currentDeg % 360;
            flipContainer.style = `transform: rotateY(${currentDeg}deg); transition: transform 0s`;
        }
    });
}

function setupRefocusHandlers() {
    var lastFocus;
    $('.modal').on('show.bs.modal', function () {
        lastFocus = document.activeElement;
    });
    $('.modal').on('hidden.bs.modal', function () {
        if (lastFocus) {
            lastFocus.focus();
        }
    });

    var closeButton = menu.querySelector('#close-button-menu');

    menu.addEventListener('transitionend', function (event) {
        if (event.propertyName === 'visibility') {
            if (menu.classList.contains('active')) {
                lastFocus = document.activeElement;
                closeButton.focus();
            } 
        }
    });

    menu.addEventListener('transitionstart', function (event) {
        if (event.propertyName === 'visibility') {
            if (!menu.classList.contains('active')) {
                lastFocus.focus();
            }
        }
    });
}

async function getTransactionsTable() {
    try {
        const { default: DataTable } = await __webpack_require__.e(/*! import() | datatables */ "async-datatables").then(__webpack_require__.bind(__webpack_require__, /*! datatables.net-bs5 */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/datatables.net-bs5/js/dataTables.bootstrap5.mjs"));
        var lastAjaxData = {
            start: 0,     
            lastId: null,
            lastValue: null
        };
        var dataTable = new DataTable('#transactions-table', {
            processing: true,
            serverSide: true,
            deferLoading: 0,
            ajax: function (data, callback, settings) {
                var formData = new FormData(document.getElementById('search-form'));
                var table = new $.fn.dataTable.Api(settings);

                var searchString = formData.get('SearchString');
                var minDate = formData.get('MinDate');
                var maxDate = formData.get('MaxDate');
                var fiscalPlanId = formData.get('FiscalPlanId');
                var categoryId = formData.get('CategoryId');
                var minAmount = formData.get('MinAmount');
                var maxAmount = formData.get('MaxAmount');

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
                                
                var requestData = {
                    draw: data.draw,
                    start: data.start,
                    pageSize: data.length,
                    orderBy: orderBy,
                    orderDirection: orderDirection === 'asc' ? 0 : 1,
                    lastId: lastId,
                    lastValue: lastValue,
                    isPrevious: isPrevious,
                    FiscalPlanId: fiscalPlanId.length > 0 ? parseInt(fiscalPlanId) : null,
                    SearchString: searchString.length > 0 ? searchString : null,
                    CategoryId: categoryId.length > 0 ? parseInt(categoryId) : null,
                    MinDate: minDate.length > 0 ? minDate: null,
                    MaxDate: maxDate.length > 0 ? maxDate : null,
                    MinAmount: minAmount.length > 0 ? parseFloat(minAmount) : null,
                    MaxAmount: maxAmount.length > 0 ? parseFloat(maxAmount) : null
                };
                $.ajax({
                    url: _config__WEBPACK_IMPORTED_MODULE_0__.API_ROUTES.transactions.GET_SEARCH,
                    type: 'POST',
                    contentType: 'application/json',
                    headers: {
                        'RequestVerificationToken': formData.get('__RequestVerificationToken')
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
                { data: 'category', render: DataTable.render.text(), name: 'category.name' },
                {
                    data: null,
                    defaultContent:
                    `<div class="d-flex justify-content-center align-items-center flex-wrap gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="table-icon" data-icon="edit" tabindex="0">
                            <use href="#edit-icon"/>
                        </svg >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="table-icon" viewBox="0 0 16 16" data-icon="delete" tabindex="0">
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
        return dataTable;
    } catch (error) {
        _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);       
    }
}

async function getStatisticsDashboard(id, date) {
    try {
        const { default: StatisticsDashboard } = await Promise.all(/*! import() | statisticsDashboard */[__webpack_require__.e("async-chartJS~statisticsDashboard~homeDashboard~categoryDashboard"), __webpack_require__.e("async-statisticsDashboard")]).then(__webpack_require__.bind(__webpack_require__, /*! ./statisticsDashboard */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/statisticsDashboard.js"));
        await chartDefaultsTask;

        return new StatisticsDashboard(id, date);
    } catch (error) {
        _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);
    }    
}

async function getHomeDashboard(menu, id, date, data) {
    try {
        const { default: HomeDashboard } = await Promise.all(/*! import() | homeDashboard */[__webpack_require__.e("async-chartJS~statisticsDashboard~homeDashboard~categoryDashboard"), __webpack_require__.e("async-homeDashboard")]).then(__webpack_require__.bind(__webpack_require__, /*! ./homeDashboard */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/homeDashboard.js"));
        await chartDefaultsTask;

        return new HomeDashboard(menu, id, date, data);

    } catch (error) {
        _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);

    }
} 

async function getReevaluationDashboard(token) {
    try {
        const { default: ReevaluationDashboard } = await __webpack_require__.e(/*! import() | reevaluationDashboard */ "async-reevaluationDashboard").then(__webpack_require__.bind(__webpack_require__, /*! ./reevaluationDashboard */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/reevaluationDashboard.js"));

        return new ReevaluationDashboard(token);
    } catch (error) {
        _messageBox__WEBPACK_IMPORTED_MODULE_4__["default"].addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);        
    }    
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
/******/ __webpack_require__.O(0, ["styles-index~fiscalPlan~category","styles-fiscalPlan~category","vendors-index~fiscalPlan~category"], () => (__webpack_exec__("../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/fiscalPlan-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=fiscalPlan.js.map