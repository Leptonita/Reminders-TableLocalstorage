//const numberRows = 10;
// Get the URL search parameters
const urlSearchParams = new URLSearchParams(window.location.search);
const numberRows = urlSearchParams.get('num');

const newInput = (nameId, placeholderId, container, type) => {
    const inputItem = document.createElement("input");
    inputItem.type = type;
    inputItem.id = nameId;
    inputItem.placeholder = placeholderId;
    container.appendChild(inputItem);
}

//create table
function createTableInputs(numRows) {
    const table = document.createElement("table");

    const headerRow = table.insertRow();

    titleColN = document.createElement("th");
    titleColN.textContent = "Company name";
    headerRow.appendChild(titleColN);

    titleColE = document.createElement("th");
    titleColE.textContent = "Email";
    headerRow.appendChild(titleColE);

    titleColT = document.createElement("th");
    titleColT.textContent = "Telephone";
    headerRow.appendChild(titleColT);


    for (let i = 1; i <= numRows; i++) {
        const row = table.insertRow();

        const cellN = row.insertCell();
        newInput("nombreCoIp" + i, "... nombre " + i, cellN, "text");

        const cellE = row.insertCell();
        //cellE.setAttribute("id", `e${i}`);
        newInput("mailIp" + i, "... email " + i, cellE, "email");

        const cellT = row.insertCell();
        // cellT.setAttribute("id", `t${i}`);
        newInput("phoneIp" + i, "... phone " + i, cellT, "text");
    }
    document.body.appendChild(table);

}

createTableInputs(numberRows);



/* 
//create inputs
newInput("nombreCo", "... nombre", "#nombreTd", "text");
newInput("mail", "... e-mail", "#mailTd", "email");
newInput("phone", "... phone", "#telephoneTd", "text");
 */

//retrieve texts data from local storage
function getResultLS(nameElementId) {
    const resultStored = localStorage.getItem(nameElementId);
    document.getElementById(nameElementId).value = resultStored || "";
}

for (let i = 1; i <= numberRows; i++) {
    getResultLS("nombreCoIp" + i);
    getResultLS("mailIp" + i);
    getResultLS("phoneIp" + i);

}


//localstorage to save textual inputs
function saveResultLS(e, nameId) {
    const subject = e.target.value;
    const name = e.target.id;
    //console.log({ subject });
    localStorage.setItem(name, subject);
}

for (let i = 1; i <= numberRows; i++) {
    document.getElementById('nombreCoIp' + i).addEventListener('change', (e) => saveResultLS(e, this.id));
    document.getElementById('mailIp' + i).addEventListener('change', (e) => saveResultLS(e, this.id));
    document.getElementById('phoneIp' + i).addEventListener('change', (e) => saveResultLS(e, this.id));
}


/* 
//CHECKBOX
const checkbox = document.getElementById('checa');
// Load the checkbox state from local storage on page load
const savedValue = localStorage.getItem('checaChecked');
if (savedValue === 'true') {
    checkbox.checked = true;
}
// Add an event listener to the checkbox to save its state in local storage
checkbox.addEventListener('change', function () {
    localStorage.setItem('checaChecked', this.checked);
});
 */


