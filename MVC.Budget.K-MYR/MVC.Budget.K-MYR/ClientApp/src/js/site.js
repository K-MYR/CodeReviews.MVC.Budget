import { getCountrySelect } from "./asyncComponents";
import { getCountryCookie } from "./api";
import messageBox from "./messageBox";

const countryChangedEvent = new CustomEvent('countryChanged');
const countrySelectPromise = initializeCountrySelect();
document.getElementById("country-form").onsubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
} 

async function initializeCountrySelect() {
    const countrySelect = await getCountrySelect("#country");  
    countrySelect.countrySelect("selectCountry", window.userLocale.region.toLowerCase());
    const form = document.getElementById("country-form");
    form.style = "";
    countrySelect.on('change', async function () {
        let iso2Code = countrySelect.countrySelect("getSelectedCountryData").iso2;
        let token = form.querySelector('input[name="__RequestVerificationToken"]').value

        let response = await getCountryCookie(iso2Code, token);

        if (response.isSuccess) {
            window.userLocale = new Intl.Locale(response.data.locale);
            window.userNumberFormat = new Intl.NumberFormat(response.data.locale, { style: 'currency', currency: response.data.currency });
            window.dispatchEvent(countryChangedEvent);
        }        
        messageBox.addMessage({ text: response.message, iconId: response.isSuccess ? '#check-icon' : '#cross-icon' });
        messageBox.show();
    });
}
