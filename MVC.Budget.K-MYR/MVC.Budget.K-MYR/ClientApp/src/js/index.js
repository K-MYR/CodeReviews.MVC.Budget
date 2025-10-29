import { PAGE_ROUTES } from './config';
import { importBootstrapModals } from './asyncComponents';
import { putFiscalPlan, deleteFiscalPlan, postFiscalPlan } from './api'
import messageBox from "./messageBox";
import { setupRefocusHandlers } from './utilities'

const cardsContainer = document.getElementById('cards-container');
formatDashboard();
window.addEventListener('countryChanged', () => {
    formatDashboard();
});

const modals = importBootstrapModals();
const tooltips = getTooltips();
const modalsArray = await modals;
const addModal = modalsArray.find(m => m._element.id == 'addFiscalPlan-modal');
const updateModal = modalsArray.find(m => m._element.id == 'updateFiscalPlan-modal');
const updateModalLabel = document.getElementById('updateFiscalPlan-label');
const updateModalId = document.getElementById('updateFiscalPlan_id');
const updateModalName = document.getElementById('updateFiscalPlan_name');
const deleteModal = modalsArray.find(m => m._element.id == 'deleteFiscalPlan-modal');
const deleteModalLabel = document.getElementById('deleteFiscalPlan-label');
const deleteModalId = document.getElementById('deleteFiscalPlan_id');
setupModalHandlers(modals);
setupRefocusHandlers();

function formatDashboard() {
    const cards = $('.fiscalPlan-card');
    for (let i = 0; i < cards.length; i++) {
        let id = cards[i].dataset.id;
        let incomeText = document.getElementById(`fiscalPlan_income_${id}`);
        incomeText.textContent = `${window.userNumberFormat.format(incomeText.dataset.total)} / ${window.userNumberFormat.format(incomeText.dataset.budget)}`;
        let expensesText = document.getElementById(`fiscalPlan_expenses_${id}`);
        expensesText.textContent = `${window.userNumberFormat.format(expensesText.dataset.total)} / ${window.userNumberFormat.format(expensesText.dataset.budget)}`;
    }
}

function addFiscalPlan(fiscalPlan, beforeElement) {   
    const card = document.createElement('div');
    card.className = 'fiscalPlan-card fading-in';
    card.id = `fiscalPlan-card_${fiscalPlan.id}`;
    card.setAttribute('data-id', fiscalPlan.id);
    card.setAttribute('data-name', fiscalPlan.name);
    card.tabIndex = 0;

    const headerContainer = document.createElement('div');
    headerContainer.className = 'd-flex justify-content-between gap-1';

    const editIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    editIcon.setAttribute('viewBox', '0 0 14 14');
    editIcon.setAttribute('height', '30');
    editIcon.setAttribute('width', '30');
    editIcon.setAttribute('class', 'fiscalPlan-icon');
    editIcon.setAttribute('fill', '#ffffff');
    editIcon.setAttribute('data-action', 'edit');
    editIcon.tabIndex = 0;
    const editUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    editUse.setAttribute('href', '#edit-icon');
    editIcon.appendChild(editUse);

    const heading = document.createElement('h1');
    heading.id = `fiscalPlan-header_${fiscalPlan.id}`;
    heading.class = 'fiscalPlan-heading';
    heading.textContent = fiscalPlan.name;

    const deleteIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    deleteIcon.setAttribute('viewBox', '0 0 14 14');
    deleteIcon.setAttribute('height', '30');
    deleteIcon.setAttribute('width', '30');
    deleteIcon.setAttribute('class', 'fiscalPlan-icon');
    deleteIcon.setAttribute('fill', '#ffffff');
    deleteIcon.setAttribute('data-action', 'delete');
    deleteIcon.tabIndex = 0;
    const deleteUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    deleteUse.setAttribute('href', '#trash-icon');
    deleteIcon.appendChild(deleteUse);

    headerContainer.appendChild(editIcon);
    headerContainer.appendChild(heading);
    headerContainer.appendChild(deleteIcon);

    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';

    const incomeSection = document.createElement('div');
    const incomeTitleContainer = document.createElement('div');
    incomeTitleContainer.className = 'd-flex justify-content-between';
    const incomeTitle = document.createElement('div');
    incomeTitle.textContent = 'Income';
    const incomeTotal = document.createElement('div');
    incomeTotal.className = 'text-end';
    incomeTotal.id = `fiscalPlan_income_${fiscalPlan.id}`;
    incomeTotal.textContent = `${window.userNumberFormat.format(0)} /  ${window.userNumberFormat.format(0)}`;

    incomeTitleContainer.appendChild(incomeTitle);
    incomeTitleContainer.appendChild(incomeTotal);
    incomeSection.appendChild(incomeTitleContainer);

    const incomeProgressDiv = document.createElement('div');
    incomeProgressDiv.className = 'progress';
    const incomeProgressBar = document.createElement('div');
    incomeProgressBar.className = 'progress-bar bg-success';
    incomeProgressBar.setAttribute('role', 'progressbar');
    incomeProgressBar.style.width = '100%'; 
    incomeProgressBar.setAttribute('aria-valuenow', '100');
    incomeProgressBar.setAttribute('aria-valuemin', '0');
    incomeProgressBar.setAttribute('aria-valuemax', '100');
    incomeProgressBar.setAttribute('aria-labelledby', `fiscalPlan_balance_${fiscalPlan.id}`);

    incomeProgressDiv.appendChild(incomeProgressBar);
    incomeSection.appendChild(incomeProgressDiv);

    const expensesSection = document.createElement('div');
    const expensesTitleContainer = document.createElement('div');
    expensesTitleContainer.className = 'd-flex justify-content-between';
    const expensesTitle = document.createElement('div');
    expensesTitle.textContent = 'Expenses';
    const expensesTotal = document.createElement('div');
    expensesTotal.id = `fiscalPlan_expenses_${fiscalPlan.id}`;
    expensesTotal.className = 'text-end';
    expensesTotal.textContent = `${window.userNumberFormat.format(0)} /  ${window.userNumberFormat.format(0)}`;
            
    expensesTitleContainer.appendChild(expensesTitle);
    expensesTitleContainer.appendChild(expensesTotal);
    expensesSection.appendChild(expensesTitleContainer);

    const expensesProgressDiv = document.createElement('div');
    expensesProgressDiv.className = 'progress';
    const expensesProgressBar = document.createElement('div');
    expensesProgressBar.className = 'progress-bar bg-danger';
    expensesProgressBar.setAttribute('role', 'progressbar');
    expensesProgressBar.style.width = '100%';
    expensesProgressBar.setAttribute('aria-valuenow', '100');
    expensesProgressBar.setAttribute('aria-valuemin', '0');
    expensesProgressBar.setAttribute('aria-valuemax', '100');
    expensesProgressBar.setAttribute('aria-labelledby', `fiscalPlan_balance_${fiscalPlan.id}`);

    expensesProgressDiv.appendChild(expensesProgressBar);
    expensesSection.appendChild(expensesProgressDiv);
    progressContainer.appendChild(incomeSection);
    progressContainer.appendChild(expensesSection);
    card.appendChild(headerContainer);
    card.appendChild(progressContainer);
    card.addEventListener('click', onFiscalPlanClick);
    card.addEventListener('keydown', onFiscalPlanClick);
    card.addEventListener('animationend', onFiscalPlanFadeOut);

    cardsContainer.insertBefore(card, beforeElement);
}

function updateFiscalPlan(formData) {
    const id = formData.get('Id');
    const name = formData.get('Name');
    const header = document.getElementById(`fiscalPlan-header_${id}`);
    header.textContent = name;
    const card = document.getElementById(`fiscalPlan-card_${id}`);
    card.dataset.name = name;
}

function removeFiscalPlan(id) {
    const element = document.getElementById(`fiscalPlan-card_${id}`);
    if (element) {
        element.classList.add('fading-out');
    }
}

async function setupModalHandlers() {   
    const addfiscalPlanCard = document.getElementById('addFiscalPlan-card');
    
    const addFiscalPlanForm = document.getElementById('addFiscalPlan-form');
    addFiscalPlanForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (addModal._isShown && $(this).valid()) {
            addModal.hide();
            const response = await postFiscalPlan(new FormData(this));
            if (response.isSuccess) {
                addFiscalPlan(response.data, addfiscalPlanCard);
            }
            messageBox.addMessage({ text: response.message, iconId: response.isSuccess ? '#check-icon' : '#cross-icon' });
            messageBox.show();
        }
    });
    addfiscalPlanCard.addEventListener('click', function () {
        addModal.show();
    });
    addfiscalPlanCard.addEventListener('keydown', function (event) {
        if (event.key == 'Enter') {
            addModal.show();
        }
    });

    const updateFiscalPlanForm = document.getElementById('updateFiscalPlan-form');
    updateFiscalPlanForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (updateModal._isShown && $(this).valid()) {
            updateModal.hide();
            let formData = new FormData(this);
            let response = await putFiscalPlan(formData);
            if (response.isSuccess) {
                updateFiscalPlan(formData);
            }            
            messageBox.addMessage({ text: response.message, iconId: response.isSuccess ? '#check-icon' : '#cross-icon' });
            messageBox.show();
        }
    });

    const deleteFiscalPlanForm = document.getElementById('deleteFiscalPlan-form');
    deleteFiscalPlanForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (deleteModal._isShown) {
            deleteModal.hide();
            const formData = new FormData(this);
            const id = formData.get('Id');
            const token = formData.get('__RequestVerificationToken');
            const response = await deleteFiscalPlan(id, token);
            if (response.isSuccess) {
                removeFiscalPlan(id);
            }
            messageBox.addMessage({ text: response.message, iconId: response.isSuccess ? '#check-icon' : '#cross-icon' });
            messageBox.show();
        }
    });

    cardsContainer.querySelectorAll('.fiscalPlan-card')
        .forEach(element => {
            element.addEventListener("click", handleFiscalPlanInteraction)
            element.addEventListener("keydown", handleFiscalPlanInteraction)
        });
}

function handleFiscalPlanInteraction(event) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
        onFiscalPlanClick(event);
    }
}

function onFiscalPlanClick(event) {
    const fiscalPlanCard = event.currentTarget;
    const id = parseInt(fiscalPlanCard.dataset.id);

    if (event.target.matches('.fiscalPlan-icon')) {        
        switch (event.target.dataset.action) {
            case 'delete':              
                deleteModalLabel.textContent = `Delete '${fiscalPlanCard.dataset.name}'?`;
                deleteModalId.value = id;
                deleteModal.show();
                break;
            case 'edit':              
                updateModalLabel.textContent = `Edit '${fiscalPlanCard.dataset.name}'`;
                updateModalId.value = id;
                updateModalName.value = fiscalPlanCard.dataset.name;
                updateModal.show();
                break;
        }
    }
    else {        
        window.location.href = PAGE_ROUTES.FISCAL_PLAN(id);
    }
}

function onFiscalPlanFadeOut(event) {
    if (event.animationName === 'fading-out') {
        const card = event.currentTarget;
        card.removeEventListener('animationend', onFiscalPlanFadeOut);
        card.removeEventListener('click', onFiscalPlanClick);
        card.removeEventListener('keydown', onFiscalPlanClick);
        card.remove();
    }
}

async function getTooltips() {
    const Tooltip = (await import(/* webpackChunkName: "bootstrap-tooltips" */'bootstrap/js/dist/tooltip')).default;
    const tooltipElements = document.querySelectorAll('.tooltipped');
    const tooltips = [...tooltipElements].map(element => new Tooltip(element, {
        container: 'body',
        delay: { show: 500, hide: 0 },
        placement: 'top',
        offset: [0, 10]       
    }));
    return tooltips;
}
