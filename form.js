const checkbox = document.getElementById('checa');
const company = document.getElementById('company');
const mail = document.getElementById('mail');
const contactName = document.getElementById('contactName');

// Load the checkbox state from local storage on page load
const savedValue = localStorage.getItem('checaChecked');
if (savedValue === 'true') {
    checkbox.checked = true;
}

// Add an event listener to the checkbox to save its state in local storage
checkbox.addEventListener('change', function () {
    localStorage.setItem('checaChecked', this.checked);
});

//retrieve texts data from local storage
function getResult(nameElementId) {
    const resultStored = localStorage.getItem(nameElementId.id);
    nameElementId.value = resultStored;
}
getResult(company);
getResult(mail);
getResult(contactName);

//localstorage to save textual inputs
function saveResult(e, nameId) {
    const subject = e.target.value;
    const name = e.target.id;
    console.log({ subject });
    localStorage.setItem(name, subject);
}

company.addEventListener('change', (e) => saveResult(e, this.id));
mail.addEventListener('change', (e) => saveResult(e, this.id));
contactName.addEventListener('change', (e) => saveResult(e, this.id));