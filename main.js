let storeArray = [];
let elBody = document.getElementById('my-body');
let elStoreTitle = document.getElementById('store-title');
//console.log(elStoreTitle);
//find table by id
let elTable = document.getElementById('store-table');


let StoreOne= {
    location: 'Motuo County, China',
    name: 'Asian Delights Cookies',
    employees: 20,
    openTime: 8,
    closeTime: 21,
    type: 'Sesame Cookies',
    inventory: 100,
    maxNumberCustomersPerHour: 80,
    minNumberCustomersPerHour: 20,
    avgCookiesPerCustomer: 12,
 
};
console.log(StoreOne);
console.log(StoreOne.type);

let StoreTwo={
    location: "Tristan da Cunha",
    name: '1700 Miles Cookies',
    employees: 2,
    openTime: 3,
    closeTime: 7,
    type: 'Neapolitan Cookies',
    inventory: 10,
    maxNumberCustomersPerHour: 60,
    minNumberCustomersPerHour: 20,
    avgCookiesPerCustomer: 2,
};
console.log(StoreTwo.type);
console.log(StoreTwo);

let StoreThree={
    location: "Alert, Nunavut, Canada",
    name: "24 Sunshine Cookies",
    employees: 1,
    openTime: 2,
    closeTime: 8,
    type: "Snow Cap Cookies",
    inventory: 2,
    maxNumberCustomersPerHour: 40,
    minNumberCustomersPerHour: 10,
    avgCookiesPerCustomer: 4,

} 
console.log(StoreThree.type);
console.log(StoreThree);
//pushing both of our store objects into the storeArray
storeArray.push(StoreOne, StoreTwo, StoreThree);



let StoreInfo = function(location, name, employees, openTime, closeTime, type, inventory, maxCustomers, minCustomers, avgCookiesPerCustomer){
    this.locaton = location;
    this.name = name; 
    this.employees= employees; 
    this.openTime = openTime;
    this.inventory = inventory;
    this.maxNumberCustomersPerHour = maxCustomers;
    this.minNumberCustomersPerHour = minCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
};
    this.totalCookiesPerHour = function() {
    // Math.floor(Math.random() * (100 - 30)) + 30
    return (Math.floor(Math.random() * (this.maxNumberCustomersPerHour - this.minNumberCustomersPerHour)) + this.minNumberCustomersPerHour) * this.avgCookiesPerCustomer; 
};
console.log(totalCookiesPerHour) 
//instiate new instances of our store constructor
let StoreFour = new StoreInfo( "Bethesda, MD", "Pat's Cookies", 10, 6, 20, "Coconut Cookies", 1000, 75, 12, 5);
let StoreFive = new StoreInfo("Washington, DC", "Patty's Cookies", 15, 7, 20, "Banana Cookies", 1500, 200, 45, 3 );
let StoreSix = new StoreInfo ("Silver Spring, MD", "Patties Cookies", 20, 8, 20,"Lemon Cookies", 2000, 350, 80, 8);
storeArray.push(StoreFour, StoreFive, StoreSix);

console.log(StoreInfo)


function displayStoreTitles() {
    for(let i = 0; i < storeArray.length; i++) {
        let elStoreTitle = document.createElement('h1');
        elStoreTitle.setAttribute('class', 'store-title');
        elBody.appendChild(elStoreTitle);
        elStoreTitle.innerHTML = storeArray[i].name;
        
    }
}

displayStoreTitles();
//write a for loop that calls our totalSpellsPerHour method for however many hours the wizards ard training
// for(let i = Hogwarts.startTime; i < Hogwarts.endTime; i++) {
//     let result = Hogwarts.totalSpellsPerHour();
//     console.log(result);
// }

function displayTotalCookies(store) {
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    for(let i = store.openTime; i < store.closeTime; i ++) {
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = store.totalCookiesPerHour();
        console.log(store)
    }
};

function populateTable() {
    for(let i = 0; i < storeArray.length; i++) {
        displayTotalCookies(storeArray[i]);
    }
}

populateTable();

// displayTotalSpells(Hogwarts);
// displayTotalSpells(Magica);
//use prototype to calculate the total number of spells cast per school

//create a table that will display these numbers by hour and total