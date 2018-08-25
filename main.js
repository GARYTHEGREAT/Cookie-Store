let storeArray = [];
let elBody = document.getElementById('my-body');
let elStoreTitle = document.getElementById('store-title');
//console.log(elStoreTitle);
//find table by id
let elTable = document.getElementById('store-table');
let elForm = document.getElementById('store-form');
let tblrows = document.getElementsByTagName('tr');
let today = new Date();

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
    this.maxCustomersPerHour = maxCustomers,
    this.minCustomersPerHour = minCustomers,
    this.avgCookiesPerCustomer = avgCookiesPerCustomer,
    this.totalCookiesPerDay = 0;
    this.cookiesPerHourArray = []

    this.totalCookiesPerHour = function() {
        return (Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour) * this.avgCookiesPerCustomer; 
   
   
        
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
        elTableHeader.innerHTML =  i + ':00 Hours' 
    };
    let elTotalHeader = document.createElement('th');
    elRow.appendChild(elTotalHeader);
    elTotalHeader.innerHTML = 'Total';

    

    
    };
    
   



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
        
        store.cookiesPerHourArray.push(result)
    }
    let elTotalTableData = document.createElement('th');
    elRow.appendChild(elTotalTableData);
    elTotalTableData.innerHTML = store.totalCookiesPerDay;
    console.log(store.name, store.totalCookiesPerDay);
}
// difine a function that will display our footer with the total cookiesfor every store per hour
function displayFooter(){

// create footer row
let elFooterRow = document.createElement('tr');
//append our footer row to our table
elTable.appendChild(elFooterRow); 
//create a table head element to contain our footer title
let elFooterTitle = document.createElement('th');
//append our th to our footer row
elFooterRow.appendChild(elFooterTitle);
elFooterTitle.setAttribute('class', 'footer');

//display text in our footer title element
elFooterTitle.innerHTML = 'Total';
//declare a variable that will store our total cookies per day
let total = 0;
//loop through the amount of hours that the stores are open
for(let i=0; i < 13; i++) {
//declare a variable that will have the value and track
let totalCookiesPerHour = 0;
for(let j=0; j < storeArray.length; j++) {
totalCookiesPerHour += storeArray[j].cookiesPerHourArray[i];
console.log('inner for loop', storeArray[j].name, j);
}
console.log('outer for loop', i);
//create new th to contain our cookies per hour for all stores
let elTotalCookiesPerHourFooter = document.createElement('th');
elTotalCookiesPerHourFooter.setAttribute('class', 'footer');
//append our th to our footer
elFooterRow.appendChild(elTotalCookiesPerHourFooter);
//set the inner html to the value of totalCookiesPerHour
elTotalCookiesPerHourFooter.innerHTML = totalCookiesPerHour;
//add totalCookiesPerHourto the value of our total variable
total += totalCookiesPerHour;
}
console.log(total)
//create a new th that will contain our total cookies for everystore for all day
let elTotalCookiesPerDayFooter = document.createElement('th');
elTotalCookiesPerDayFooter.setAttribute('class','footer');
//append our new th to our footer row
elFooterRow.appendChild(elTotalCookiesPerDayFooter);
//assign the inner html of our total footer headerto the value of our total variable
elTotalCookiesPerDayFooter.innerHTML = total;


}  





    let storeName = elForm.storeName;
    let storeLocation = elForm.locationName;
    let storeEmployees =elForm.employeesNumber;
    let storeType = elForm.storeType;
    let storeInventory = elForm.inventoryNumber
    let storeMaxCustomers = elForm.maxCustomersPerHour
    let storeMinCustomers = elForm.minCustomersPerHour
    let storeAvgCookiesPerCustomers = elForm.avgCookiesPerCustomersPerHour


//define function called createNewSchool to let user create a new school with form
function createNewStore(event) {
    event.preventDefault();
//remove our old footer before creating and appendng a new one
console.log(elTable.childNodes);
elTable.removeChild(elTable.childNodes[elTable.childNodes.length -1]);



    let newStore = new StoreInfo(storeLocation.value, storeName.value, parseInt(storeEmployees.value), 7, 20, storeType.value, parseInt(storeInventory.value), parseInt(storeMaxCustomers.value), parseInt(storeMinCustomers.value), parseInt(storeAvgCookiesPerCustomers.value) );
  //  console.log(newStore);
  //add our new school to the store array
  storeArray.push(newStore);
  //invoke our displayTotalCookies function passing in our new store instance
  displayTotalCookies(newStore);

  tblrows = document.getElementsByTagName('tr');

  for(i=0;i<tblrows.length; i++){
     if(i%2==0) tblrows[i].style.backgroundColor = 'white';
     else tblrows[i].style.backgroundColor = 'pink';
  } 



  //re run our display footer function after a new store is added
  displayFooter();

}
   // displayTotalCookies(newStore);

    


elForm.addEventListener('submit', createNewStore);

console.log(elForm.storeName);


function populateTable() {
    displayTableHeader();
    for(let i = 0; i < storeArray.length; i++) {
        displayTotalCookies(storeArray[i]);
    }
}

//define a function that will populate our initial table
function populateTable() {
    //invoke our displayTableHeader function that will populate our table header
    displayTableHeader();
    //loop through our storeArray that contains all of the instances of our constructor that we have already instantiated
    for(let i = 0; i < storeArray.length; i++) {
        //call our displayTotalCookies function passing in the object at index of i in our wizardSchoolArray
        displayTotalCookies(storeArray[i]);
        
    }

displayFooter();
}



populateTable();
 tblrows = document.getElementsByTagName('tr');

 for(i=0;i<tblrows.length; i++){
    if(i%2==0) tblrows[i].style.backgroundColor = 'white';
    else tblrows[i].style.backgroundColor = 'pink';
 } 

//define a function that allows us add a prototype property on to our object constructor instances
function addCookies(array) {
    //use prototype to create a spells property on all of the instances of our object constructor 
    WizardSchool.prototype.cookies = array;
}

//define a function that will add a method to our constructor to combine all our spells into a single string
function combineCookies() {
    //use prototype to add a new property called stringOfSpells on to all of the instances of our constructor and assign it the value of empty string
    WizardSchool.prototype.stringOfSpells = '';
    //use prototype to add a method called combineSpells to all of the instances of our object constructor
    WizardSchool.prototype.combineCookies = function() {
        //write a for loop that will loop through our spells property array and concatenate each value together assigning it to the property of stringOfSpells
        for(let i = 0; i < this.cookies.length; i++) {
            this.stringOfCookies += this.cookies[i] + ', ';
        }
    };
}

// displayTotalSpells(Hogwarts);
// displayTotalSpells(Magica);
//use prototype to calculate the total number of spells cast per school

 

//create a table that will display these numbers by hour and total
