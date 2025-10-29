import { API_ROUTES, PAGE_ROUTES } from './config';
import { shortestAngle } from './utilities';
import { importChartDefaults, importBootstrapModals, importBootstrapCollapses } from './asyncComponents';
import { postTransaction, putTransaction, deleteTransaction, postCategory, putCategory, deleteCategory } from './api';
import messageBox from "./messageBox";

const smallScreenSize = 576;
const currentDate = new Date();
const fiscalPlanId = document.getElementById('fiscalPlan_Id');
const menu = document.getElementById('menu-container');
const antiforgeryToken = document.getElementById('antiforgeryToken');
const chartDefaultsTask = importChartDefaults();
const homeDashboardPromise = getHomeDashboard(menu, fiscalPlanId.value, currentDate, JSON.parse(fiscalPlanId.dataset.object));
const statisticsDashboardPromise = getStatisticsDashboard(fiscalPlanId.value, currentDate);
const reevaluationDashboardPromise = getReevaluationDashboard(antiforgeryToken.value);
const modalsPromise = importBootstrapModals()
    .catch(() => {
        messageBox.addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);
    });
const collapsesPromise = importBootstrapCollapses()
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
        messageBox.addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);
    });
const transactionsTablePromise = getTransactionsTable();    
const tooltipsPromise = getTooltips();

setupFlipContainer();
setupModalHandlers(modalsPromise, homeDashboardPromise, reevaluationDashboardPromise);
setupDataTableModalHandlers(transactionsTablePromise, modalsPromise);
setupRerenderHandlers(homeDashboardPromise, statisticsDashboardPromise, reevaluationDashboardPromise, transactionsTablePromise);
setupRefocusHandlers();

async function setupRerenderHandlers(homeDBPromise, statisticsDBPromise, reevaluationDBPromise, tablePromise) {
    const [homeDB, statisticsDB, reevaluationDB, transactionsTable] = await Promise.all(
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
    const table = await tablePromise;

    $('#search-form').on('submit', async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
            table.ajax.reload(null, true);
        }
    });

    const modals = await modalsPromise;
    const updateTransactionModal = modals.find(m => m._element.id == 'updateTransaction-modal');
    const deleteTransactionModal = modals.find(m => m._element.id == 'deleteTransaction-modal');

    initUpdateTransactionModal(updateTransactionModal, table);
    initDeleteTransactionModal(deleteTransactionModal, table);

    const idUpdate= document.getElementById('updateTransaction_id');
    const labelUpdate = document.getElementById('updateTransaction-label');
    const title = document.getElementById('updateTransaction_title');
    const dateTime = document.getElementById('updateTransaction_datetime');
    const amount = document.getElementById('updateTransaction_amount');
    const isHappy = document.getElementById('updateTransaction_isHappyTrue');
    const isUnhappy = document.getElementById('updateTransaction_isHappyFalse');
    const isNecessary = document.getElementById('updateTransaction_isNecessaryTrue');
    const isUnnecessary = document.getElementById('updateTransaction_isNecessaryFalse');

    const labelDelete = document.getElementById('deleteTransaction-label');
    const idDelete = document.getElementById('deleteTransaction_id');     

    table.on('click keydown', 'svg', function (event) {
        if (event.type === 'click' || event.type === 'keydown' && event.key === 'Enter') {
            const row = table.row(event.target.closest('tr'));
            const data = row.data();
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

    const tableContainer = document.getElementById('table-container');
    tableContainer.style = '';
    table.columns.adjust();
}

async function setupModalHandlers(modalsPromise, homeDBPromise, reevalDBPromise) {
    const modals = await modalsPromise;
    const homeDashboard = await homeDBPromise;    
    const addCategoryModal = modals.find(m => m._element.id == 'addCategory-modal');
    const updateCategoryModal = modals.find(m => m._element.id == 'updateCategory-modal');
    const deleteCategoryModal = modals.find(m => m._element.id == 'deleteCategory-modal');
    const addTransactionModal = modals.find(m => m._element.id == 'addTransaction-modal');

    initAddCategoryModal(addCategoryModal, homeDashboard);
    initUpdateCategoryModal(updateCategoryModal, homeDashboard);
    initAddTransactionModal(addTransactionModal, homeDashboard); 
    const reevalDashboard = await reevalDBPromise;
    initDeleteCategoryModal(deleteCategoryModal, homeDashboard, reevalDashboard);  

    document.getElementById('close-menu').onclick = closeMenu;  
    document.getElementById('details-menu').onclick = function () {
        const id = menu.dataset.categoryid;
        window.location.href = PAGE_ROUTES.CATEGORY(id);
    }
    homeDashboard.attachMenuHandlers();
}

function initAddCategoryModal(modal, homeDashboard) {
    const addCategoryModalType = document.getElementById('addCategory_type');
    const addCategoryModalFiscalPlanId = document.getElementById('addCategory_fiscalPlanId');
    const form = document.getElementById('addCategory-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();            
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let response = await postCategory(new FormData(this));
            if (response.isSuccess) {
                homeDashboard.addCategory(response.data);
            }
            messageBox.addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon');   
        }
    });

    $('.addCategory-icon').on('click keydown', function (event) {
        if (event.type === 'click' || event.type === 'keydown' && event.key === 'Enter') {
            const type = $(this).closest('.accordion')[0].dataset.type;
            addCategoryModalType.value = type;
            addCategoryModalFiscalPlanId.value = fiscalPlanId.value;
            modal.show();
        }
    });
}

function initUpdateCategoryModal(modal, homeDashboard) {
    const updateCategoryModalLabel = document.getElementById('updateCategory-label');
    const updateCategoryModalId = document.getElementById('updateCategory_id');
    const updateCategoryModalName = document.getElementById('updateCategory_name');
    const updateCategoryModalBudget = document.getElementById('updateCategory_budget');
    const updateCategoryModalType = document.getElementById('updateCategory_type');
    const updateCategoryModalFiscalPlanId = document.getElementById('updateCategory_fiscalPlanId');
    const form = document.getElementById('updateCategory-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let month = homeDashboard.getCurrentMonth();
            let formData = new FormData(this);
            let response = await putCategory(formData, month);
            if (response.isSuccess) {
                homeDashboard.editCategory(formData, month);
            }
            messageBox.addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });

    const editIcon = document.getElementById('edit-menu');
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
    const deleteCategoryModalLabel = document.getElementById('deleteCategory-label');
    const deleteCategoryModalId = document.getElementById('deleteCategory_id');
    const deleteCategoryModalType = document.getElementById('deleteCategory_type');
    const form = document.getElementById('deleteCategory-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown) {
            modal.hide();
            let formData = new FormData(this);
            let id = parseInt(formData.get('Id'));
            let type = parseInt(formData.get('Type'));
            let token = formData.get('__RequestVerificationToken');
            let response = await deleteCategory(id, type, token);
            if (response.isSuccess) {
                homeDashboard.removeCategory(id, type);
                reevalDashboard.removeCategory(id);
                menu.classList.remove('active');
                menu.dataset.categoryid = 0;                
            }
            messageBox.addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });
    const deleteIcon = document.getElementById('delete-menu');
    deleteIcon.addEventListener('click', function () {
        const data = homeDashboard.getCategory(menu.dataset.categoryid);
        deleteCategoryModalLabel.textContent = `Delete '${data.name}'`;
        deleteCategoryModalType.value = data.categoryType;
        deleteCategoryModalId.value = menu.dataset.categoryid;
        modal.show();
    });
}

function initAddTransactionModal(modal, homeDashboard) {
    const addTransactionModalCategoryId = document.getElementById('addTransaction_categoryId');
    const form = document.getElementById('addTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let response = await postTransaction(new FormData(this));
            if (response.isSuccess) {
                homeDashboard.addTransaction(response.data);
            }
            messageBox.addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });

    const addIcon = document.getElementById('add-menu');
    addIcon.addEventListener('click', function () {
        addTransactionModalCategoryId.value = menu.dataset.categoryid;
        modal.show();
    });
}

function initUpdateTransactionModal(modal, table) {
    const form = document.getElementById('updateTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let formData = new FormData(this);
            let response = await putTransaction(formData);            
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
            messageBox.addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });
}

function initDeleteTransactionModal(modal, table) {
    const form = document.getElementById('deleteTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown) {
            modal.hide();
            let formData = new FormData(this);
            let id = parseInt(formData.get('Id'));
            let token = formData.get('__RequestVerificationToken');
            let response = await deleteTransaction(id, token);
            if (response.isSuccess) {
                let row = table.row((_, data) => data.id === parseInt(formData.get('Id')));
                if (row) {
                    row.remove().draw();
                }
            }
            messageBox.addAndShow(response.message, response.isSuccess ? '#check-icon' : '#cross-icon'); 
        }
    });  
}

function closeMenu() {
    if (menu.classList.contains('active')) {
        const id = menu.dataset.categoryid;
        const borderBox = document.getElementById(`category_${id}`).querySelector('.border-animation');
        borderBox.classList.remove('border-rotate');
        menu.dataset.categoryid = 0;
        menu.classList.remove('active');
    }
}

function setupFlipContainer() {
    const faces = ['face_0', 'face_1', 'face_2', 'face_3'];
    const flipContainer = document.getElementById('flip-container-inner');
    let currentSideIndex = 0;
    let currentDeg = 0;

    $('#action-sidebar').on('click', '.sidebar-button-container', function () {
        this.blur();
        const index = parseInt(this.dataset.index);
        if (currentSideIndex === index) {
            return;
        }

        const currentFace = document.getElementById(faces[currentSideIndex]);
        const nextFace = document.getElementById(faces[index]);

        if (currentSideIndex == 0) {
            closeMenu();
        }

        const degreeDiff = shortestAngle(currentSideIndex, index);
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
    let lastFocus;
    $('.modal').on('show.bs.modal', function () {
        lastFocus = document.activeElement;
    });
    $('.modal').on('hidden.bs.modal', function () {
        if (lastFocus) {
            lastFocus.focus();
        }
    });

    const closeButton = menu.querySelector('#close-button-menu');

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
        const { default: DataTable } = await import(/* webpackChunkName: "datatables" */'datatables.net-bs5');
        let lastAjaxData = {
            start: 0,     
            lastId: null,
            lastValue: null
        };
        const dataTable = new DataTable('#transactions-table', {
            processing: true,
            serverSide: true,
            deferLoading: 0,
            ajax: function (data, callback, settings) {
                const formData = new FormData(document.getElementById('search-form'));
                const table = new $.fn.dataTable.Api(settings);

                const searchString = formData.get('SearchString');
                const minDate = formData.get('MinDate');
                const maxDate = formData.get('MaxDate');
                const fiscalPlanId = formData.get('FiscalPlanId');
                const categoryId = formData.get('CategoryId');
                const minAmount = formData.get('MinAmount');
                const maxAmount = formData.get('MaxAmount');

                let isPrevious = false;
                let lastId = null;
                let lastValue = null;                
                let orderBy = null;
                let orderDirection = null;

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
                                
                const requestData = {
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
                    url: API_ROUTES.transactions.GET_SEARCH,
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
                        messageBox.addAndShow('Failed to fetch data.Please try again.', '#cross-icon');
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
        messageBox.addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);       
    }
}

async function getStatisticsDashboard(id, date) {
    try {
        const { default: StatisticsDashboard } = await import(/* webpackChunkName: "statisticsDashboard" */'./statisticsDashboard');
        await chartDefaultsTask;

        return new StatisticsDashboard(id, date);
    } catch (error) {
        messageBox.addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);
    }    
}

async function getHomeDashboard(menu, id, date, data) {
    try {
        const { default: HomeDashboard } = await import(/* webpackChunkName: "homeDashboard"*/ './homeDashboard');
        await chartDefaultsTask;

        return new HomeDashboard(menu, id, date, data);

    } catch (error) {
        messageBox.addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);

    }
} 

async function getReevaluationDashboard(token) {
    try {
        const { default: ReevaluationDashboard } = await import(/* webpackChunkName: "reevaluationDashboard" */'./reevaluationDashboard');

        return new ReevaluationDashboard(token);
    } catch (error) {
        messageBox.addAndShow('A critical error occurred. Please reload the page', '#cross-icon', false);        
    }    
} 

async function getTooltips() {
    const Tooltip = (await import(/* webpackChunkName: "bootstrap-tooltips" */'bootstrap/js/dist/tooltip')).default;
    const tooltipElements = document.querySelectorAll('.tooltipped');
    const tooltips = [...tooltipElements].map(element => new Tooltip(element, {
        container: 'body',
        delay: { show: 500, hide: 0 },
        offset: [0, 10],
        placement: (instance, _) => {
            const query = window.matchMedia(`(min-width: ${smallScreenSize}px)`);
            return instance._element.classList.contains('sidebar-button-container')
                && query.matches ? 'right' : 'top';
        },
    }));
    return tooltips;
}
