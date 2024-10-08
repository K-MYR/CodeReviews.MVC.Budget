"use strict";
(self["webpackChunkthebudgeteer"] = self["webpackChunkthebudgeteer"] || []).push([["index"],{

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index-entry.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index-entry.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-validation */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation-unobtrusive */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js");
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_bootstrap_imports_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/bootstrap-imports.scss */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/bootstrap-imports.scss");
/* harmony import */ var country_select_js_build_css_countrySelect_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! country-select-js/build/css/countrySelect.min.css */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/country-select-js/build/css/countrySelect.min.css");
/* harmony import */ var _scss_site_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/site.scss */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/site.scss");
/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./site.js */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/site.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.js */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index.js");
﻿










/***/ }),

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/config.js");
/* harmony import */ var _asyncComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asyncComponents */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/asyncComponents.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/api.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery/dist/jquery.js");
﻿



formatDashboard();

const modals = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_1__.importBootstrapModals)();
setupModalHandlers();

window.addEventListener('countryChanged', () => {
    formatDashboard();
});

function formatDashboard() {
    var cards = $('.fiscalPlan-card');
    for (let i = 0; i < cards.length; i++) {
        let id = cards[i].dataset.id;
        let incomeText = document.getElementById(`fiscalPlan_${id}_income`);
        incomeText.textContent = `${window.userNumberFormat.format(incomeText.dataset.total)} / ${window.userNumberFormat.format(incomeText.dataset.budget)}`;
        let expensesText = document.getElementById(`fiscalPlan_${id}_expenses`);
        expensesText.textContent = `${window.userNumberFormat.format(expensesText.dataset.total)} / ${window.userNumberFormat.format(expensesText.dataset.budget)}`;
    }
}

function updateFiscalPlan(formData) {
    var id = formData.get('Id');
    var name = formData.get('Name');
    var header = document.getElementById(`fiscalPlan-header_${id}`);
    header.textContent = name;
}

function removeFiscalPlan(id) {
    var element = document.getElementById(`fiscalPlan-card_${id}`);
    if (element) {
        $(element).off();
        element.remove();
    }
}

async function setupModalHandlers() {
    var modalsArray = await modals;
    var addModal = modalsArray.find(m => m._element.id == 'addFiscalPlan-modal');
    var updateModal = modalsArray.find(m => m._element.id == 'updateFiscalPlan-modal');
    var updateModalLabel = document.getElementById('updateFiscalPlan-label');
    var updateModalId = document.getElementById('updateFiscalPlan_id');
    var updateModalName = document.getElementById('updateFiscalPlan_name');
    var deleteModal = modalsArray.find(m => m._element.id == 'deleteFiscalPlan-modal');
    var deleteModalLabel = document.getElementById('deleteFiscalPlan-label');
    var deleteModalId = document.getElementById('deleteFiscalPlan_id');

    document.getElementById('addFiscalPlan-card').addEventListener('click', function () {
        addModal.show();
    });
    document.getElementById('addFiscalPlan-form').addEventListener('submit', async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
            addModal.hide();
            await (0,_api__WEBPACK_IMPORTED_MODULE_2__.postFiscalPlan)(new FormData(this));
        }
    });

    document.getElementById('updateFiscalPlan-form').addEventListener('submit', async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
            updateModal.hide();
            let formData = new FormData(this);
            let isUpdated = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.putFiscalPlan)(formData);
            if (isUpdated) {
                updateFiscalPlan(formData);
            }
        }
    });

    document.getElementById('deleteFiscalPlan-form').addEventListener('submit', async function (event) {
        event.preventDefault();
        deleteModal.hide();
        var formData = new FormData(this);
        var id = formData.get('Id');
        var token = formData.get('__RequestVerificationToken');
        var isDeleted = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.deleteFiscalPlan)(id, token);
        if (isDeleted) {
            removeFiscalPlan(id);
        }
    });

    $('.fiscalPlan-card').on('click', function (event) {
        if (event.target.matches('.fiscalPlan-icon')) {
            switch (event.target.dataset.action) {
                case 'delete':
                    deleteModalLabel.textContent = `Delete '${this.dataset.name}'?`;
                    deleteModalId.value = this.dataset.id;
                    deleteModal.show();
                    break;
                case 'edit':
                    updateModalLabel.textContent = `Edit '${this.dataset.name}'`;
                    updateModalId.value = this.dataset.id;
                    updateModalName.value = this.dataset.name;
                    updateModal.show();
                    break;
            }
        }
        else {
            window.location.href = _config__WEBPACK_IMPORTED_MODULE_0__.PAGE_ROUTES.FISCAL_PLAN(this.dataset.id);
        }
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["styles-index~fiscalPlan~category","vendors-index~fiscalPlan~category"], () => (__webpack_exec__("../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map