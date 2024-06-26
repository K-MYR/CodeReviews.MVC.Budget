"use strict";
(self["webpackChunkthebudgeteer"] = self["webpackChunkthebudgeteer"] || []).push([["index"],{

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/asyncComponents.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/asyncComponents.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCountrySelect: () => (/* binding */ getCountrySelect),
/* harmony export */   getDatePicker: () => (/* binding */ getDatePicker),
/* harmony export */   importBootstrapCollapses: () => (/* binding */ importBootstrapCollapses),
/* harmony export */   importBootstrapModals: () => (/* binding */ importBootstrapModals),
/* harmony export */   importChartDefaults: () => (/* binding */ importChartDefaults)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery/dist/jquery.js");
﻿async function getCountrySelect(id) {
    try {
        const { default: _ } = await __webpack_require__.e(/*! import() | countrySelect */ "async-countrySelect").then(__webpack_require__.t.bind(__webpack_require__, /*! country-select-js */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/country-select-js/build/js/countrySelect.js", 23));
        return $(id).countrySelect({
            defaultCountry: window.userLocale.region.toLowerCase(),
            preferredCountries: ["at", "us"],
            responsiveDropdown: true
        });
    } catch (error) {
        console.error('Error loading Country Select:', error);
        throw error;
    }
}

async function importChartDefaults() {
    try {
        const { Chart, LinearScale, Legend, Tooltip, Colors } = await __webpack_require__.e(/*! import() | chartJS */ "async-chartJS~statisticsDashboard~homeDashboard").then(__webpack_require__.bind(__webpack_require__, /*! chart.js */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/chart.js/dist/chart.js"));

        Chart.register(
            LinearScale, Legend, Tooltip, Colors,
            {
                id: "emptypiechart",
                beforeInit: function (chart) {
                    chart.data.datasets[0].backgroundColor.push('#d2dee2');
                    chart.data.datasets[0].data.push(Number.MIN_VALUE);
                }
            }
        );

        Chart.defaults.color = '#ffffff';
        Chart.defaults.scales.linear.min = 0;
        Chart.defaults.plugins.legend.labels.filter = (item) => item.text !== undefined;
        Chart.defaults.plugins.tooltip.filter = (item) => item.label !== ""; 
    } catch (error) {
        console.error('Error loading Chart.js defaults:', error);
        throw error; 
    }
}

async function importBootstrapCollapses() {
    try {
        const { Collapse } = await __webpack_require__.e(/*! import() | bootstrap-collapses */ "async-bootstrap-modals").then(__webpack_require__.bind(__webpack_require__, /*! bootstrap */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap/dist/js/bootstrap.esm.js"));
        let collapseElements = document.querySelectorAll('.collapse')
        let collapses = [...collapseElements].map(collapseElement => new Collapse(collapseElement, { toggle: false }))

        return collapses;
    } catch (error) {
        console.error('Error loading Bootstrap modals:', error);
        throw error;
    }
}

async function importBootstrapModals() {
    try {
        const { Modal } = await __webpack_require__.e(/*! import() | bootstrap-modals */ "async-bootstrap-modals").then(__webpack_require__.bind(__webpack_require__, /*! bootstrap */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap/dist/js/bootstrap.esm.js"));
        let modalElements = document.querySelectorAll('.modal')
        let modals = [...modalElements].map(modalElement => new Modal(modalElement, { toggle: false }))

        return modals;
    } catch (error) {
        console.error('Error loading Bootstrap modals:', error);
        throw error; 
    }
}

async function getDatePicker(id, mode) {
    try {
        const { default: _ } = await __webpack_require__.e(/*! import() | datepicker */ "async-datepicker").then(__webpack_require__.t.bind(__webpack_require__, /*! bootstrap-datepicker */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js", 23));

        switch (mode) {
            case "month":
                return $(id).datepicker({
                    format: 'MM yyyy',
                    startView: 'months',
                    minViewMode: 'months',
                    autoclose: true
                })
            default:
                return $(id).datepicker({
                    format: 'yyyy',
                    minViewMode: 'years',
                    autoclose: true
                });
        }
    } catch (error) {
        console.error('Error loading Datepicker:', error);
        throw error; 
    }    
}

/***/ }),

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index-entry.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index-entry.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-validation-unobtrusive */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js");
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var country_select_js_build_css_countrySelect_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! country-select-js/build/css/countrySelect.min.css */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/country-select-js/build/css/countrySelect.min.css");
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-icons/font/bootstrap-icons.css");
/* harmony import */ var _scss_site_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/site.scss */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/site.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index.js");
﻿





/***/ }),

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asyncComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asyncComponents */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/asyncComponents.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery/dist/jquery.js");
﻿


const fiscalPlanApi = "https://localhost:7246/api/FiscalPlan";

const chartDefaultsTask = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_0__.importChartDefaults)();
const modals = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_0__.importBootstrapModals)().then((modalsArray) => {
    let modal = modalsArray.find(m => m._element.id == "addFiscalPlan-modal");
    document.getElementById("addFiscalPlan-card").addEventListener('click', function () {
        modal.show();
    });
    document.getElementById("addFiscalPlan-form").addEventListener('submit', async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
            modal.hide();
            await addFiscalPlan(new FormData(this));
        }
    })
 });
const countrySelect = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_0__.getCountrySelect)("#country");


document.getElementById("country-form").addEventListener('submit', function (event) {
    event.preventDefault();
});

$('.fiscalPlan-card').on('click', function (event) {
    window.location.href = `https://localhost:7246/FiscalPlan/${this.dataset.id}`;
});

async function addFiscalPlan(data) {
    try {
        var response = await fetch(`${fiscalPlanApi}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "RequestVerificationToken": data.get('__RequestVerificationToken')
            },
            body: JSON.stringify({
                Name: data.get("Name"),
            })
        });

        if (response.ok) {
            return true;
        } else {
            console.error(`HTTP Post Error: ${response.status}`);
            return false;
        }

    } catch (error) {
        console.error(error);
        return false;
    }
}


/***/ }),

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/site.scss":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/site.scss ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["styles-index~fiscalPlan","vendors-index~fiscalPlan"], () => (__webpack_exec__("../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map