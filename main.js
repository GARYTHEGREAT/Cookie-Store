let storeArray = [];
let elBody = document.getElementById('my-body');
let elStoreTitle = document.getElementById('store-title');
//console.log(elStoreTitle);
//find table by id
let elTable = document.getElementById('store-table');
let elForm = document.getElementById('store-form');

// let StoreOne= {
//     location: 'Motuo County, China',
//     name: 'Asian Delights Cookies',
//     employees: 20,
//     openTime: 8,
//     closeTime: 21,
//     type: 'Sesame Cookies',
//     inventory: 100,
//     maxNumberCustomersPerHour: 80,
//     minNumberCustomersPerHour: 20,
//     avgCookiesPerCustomer: 12,
 
// };
// console.log(StoreOne);
// console.log(StoreOne.type);

// let StoreTwo={
//     location: "Tristan da Cunha",
//     name: '1700 Miles Cookies',
//     employees: 2,
//     openTime: 3,
//     closeTime: 7,
//     type: 'Neapolitan Cookies',
//     inventory: 10,
//     maxNumberCustomersPerHour: 60,
//     minNumberCustomersPerHour: 20,
//     avgCookiesPerCustomer: 2,
// };
// console.log(StoreTwo.type);
// console.log(StoreTwo);

// let StoreThree={
//     location: "Alert, Nunavut, Canada",
//     name: "24 Sunshine Cookies",
//     employees: 1,
//     openTime: 2,
//     closeTime: 8,
//     type: "Snow Cap Cookies",
//     inventory: 2,
//     maxNumberCustomersPerHour: 40,
//     minNumberCustomersPerHour: 10,
//     avgCookiesPerCustomer: 4,

// } 
// console.log(StoreThree.type);
// console.log(StoreThree);
//pushing both of our store objects into the storeArray

//storeArray.push(StoreOne, StoreTwo, StoreThree);



let StoreInfo = function(location, name, employees, openTime, closeTime, type, inventory, maxCustomers, minCustomers, avgCookiesPerCustomer){
    this.locaton = location,
    this.name = name,
    this. employees= employees,
    this.openTime = openTime,
    this.closeTime = closeTime,
    this.type = type,
    this.inventory = inventory,
    this.maxNumberCustomersPerHour = maxCustomers,
    this.minNumberCustomersPerHour = minCustomers,
    this.avgCookiesPerCustomer = avgCookiesPerCustomer,
    this.totalCookiesPerDay = 0

    this.totalCookiesPerHour = function() {
        return (Math.floor(Math.random() * (this.maxNumberCustomersPerHour - this.minNumberCustomersPerHour)) + this.minNumberCustomersPerHour) * this.avgCookiesPerCustomer; 
    }
};

//instiate new instances of our store constructor
let StoreOne = new StoreInfo( "Bethesda, MD", "Pat's Cookies", 10, 7, 20, "Coconut Cookies", 1000, 100, 10, 5);
let StoreTwo = new StoreInfo("Washington, DC", "Patty's Cookies", 11, 7, 20, "Banana Cookies", 1100, 110, 11, 6 );
let StoreThree = new StoreInfo ("Silver Spring, MD", "Pattie's Cookies", 12, 7, 20,"Lemon Cookies", 1200, 120, 12, 7);
let StoreFour = new StoreInfo( "Bowie, MD", "Patrica's Cookies", 13, 7, 20, "Chocolate Cookies", 1300, 130, 13, 8);
let StoreFive = new StoreInfo("Lanham, MD", "Patrick's Cookies", 14, 7, 20, "Ginger Cookies", 1400, 140, 14, 9);
let StoreSix = new StoreInfo ("Laurel, MD", "Patrice's Cookies", 15, 7, 20,"Almond Cookies", 1500, 150, 15 , 10);

storeArray.push(StoreOne, StoreTwo, StoreThree, StoreFour, StoreFive, StoreSix);

 
console.log(StoreFive);

console.log(storeArray)



// function displayStoreTitles() {
//     for(let i = 0; i < storeArray.length; i++) {
//         let elStoreTitle = document.createElement('h1');
//         elStoreTitle.setAttribute('class', 'store-title');
//         elBody.appendChild(elStoreTitle);

//         elStoreTitle.innerHTML = storeArray[i].name;
//         }

// }

// displayStoreTitles();
// //write a for loop that calls our totalCookiesPerHour method for however many hours the wizards ard training
// // for(let i = Hogwarts.startTime; i < Hogwarts.endTime; i++) {
// //     let result = Hogwarts.totalSpellsPerHour();
// //     console.log(result);
// // }
// // displayTotalCookies(StoreFive);

// function displayTotalCookies(theStore) {
//     let elRow = document.createElement('tr');
//     elTable.appendChild(elRow);
//     for(let i = theStore.openTime; i < theStore.closeTime; i ++) {
//         let elTableData = document.createElement('td');
//         elRow.appendChild(elTableData);

//         elTableData.innerHTML = theStore.totalCookiesPerHour();
//     };
// };



// function populateTable() {
//     for(let i = 0; i < storeArray.length; i++) {
//         displayTotalCookies(storeArray[i]);
//     }
// };

// populateTable();

// // displayTotalSpells(Hogwarts);
// // displayTotalSpells(Magica);
// //use prototype to calculate the total number of spells cast per school


//create a table that will dis//write a for loop that calls our totalSpellsPerHour method for however many hours the wizards ard training
// for(let i = Hogwarts.startTime; i < Hogwarts.endTime; i++) {
//     let result = Hogwarts.totalSpellsPerHour();
//     console.log(result);
// }

function displayTableHeader() {
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    let elNameHeader= document.createElement('th'); 
    elRow.appendChild(elNameHeader);
    elNameHeader.innerHTML = 'Name of Store'; 
    for(let i = 7; i < 20; i++) {
        let elTableHeader = document.createElement('th');
        elRow.appendChild(elTableHeader);
        elTableHeader.innerHTML = i + ':00 Hours';
    }
    let elTotalHeader = document.createElement('th');
    elRow.appendChild(elTotalHeader);
    elTotalHeader.innerHTML = 'Total';
}

function displayTotalCookies(store) {
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    let elRowHeader = document.createElement('th');
    elRow.appendChild(elRowHeader);
    elRowHeader.innerHTML = store.name;
    for(let i = store.openTime; i < store.closeTime; i ++) {
        let result = store.totalCookiesPerHour();
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = result;
        store.totalCookiesPerDay += result;
    }
    let elTotalTableData = document.createElement('th');
    elRow.appendChild(elTotalTableData);
    elTotalTableData.innerHTML = store.totalCookiesPerDay;
    console.log(store.name, store.totalCookiesPerDay);
}

    let storeName = elForm.storeName;

//define function called createNewSchool to let user create a new school with form.
function createNewStore(event) {
    event.preventDefault();
    let newStore = new StoreInfo(location, storeName.value, 500, 7, 20, 4, 10, 50, 10, 100, 58, );
    console.log(newStore);
    displayTotalCookies(newStore);
}

elForm.addEventListener('submit', createNewStore);

console.log(elForm.storeName);


function populateTable() {
    displayTableHeader();
    for(let i = 0; i < storeArray.length; i++) {
        displayTotalCookies(storeArray[i]);
    }
}




populateTable();

// displayTotalSpells(Hogwarts);
// displayTotalSpells(Magica);
//use prototype to calculate the total number of spells cast per school

 

//create a table that will display these numbers by hour and total