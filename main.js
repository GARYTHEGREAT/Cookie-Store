let storeArray = [];
let elBody = document.getElementById('my-body');
let elStoreTitle = document.getElementById('store-title');
//console.log(elStoreTitle);


let StoreOne= {
    location: 'Motuo County, China',
    name: 'Asian Delights Cookies',
    employees: 20,
    hours: '8am-9pm',
    type: 'Sesame Cookies',
    inventory: 100,
    maxNumberCustomersPerHour: 80,
    minNumberCustomersPerHour: 20,
    avgCookiesPerCustomers: 12,
 
};
console.log(StoreOne);
console.log(StoreOne.type);

let StoreTwo={
    location: "Tristan da Cunha",
    name: '1700 Miles Cookies',
    employees: 2,
    hours: '3pm-7pm',
    type: 'Neapolitan Cookies',
    inventory: 10,
    maxNumberCustomersPerHour: 60,
    minNumberCustomersPerHour: 20,
    avgCookiesPerCustomers: 2,
};
console.log(StoreTwo.type);
console.log(StoreTwo);

let StoreThree={
    location: "Alert, Nunavut, Canada",
    name: "24 Sunshine Cookies",
    employees: 1,
    hours: "2pm-3pm",
    type: "Snow Cap Cookies",
    inventory: 2,
    maxNumberCustomersPerHour: 40,
    minNumberCustomersPerHour: 10,
    avgCookiesPerCustomers: 4,

} 
console.log(StoreThree.type);
console.log(StoreThree);

//pushing both of our store objects into the storeArray
storeArray.push(StoreOne, StoreTwo, StoreThree);



let store = function(location, name, employees, hours, type, inventory,maxCustomers, minCustomers,AvgCookiesCustomer){
    this.locaton = location;
    this.name = name;
    this. employees= employees; 
    this.hours = hours;
    this.type = type;
    this.inventory = inventory;
    this.maxNumberCustomersPerHour = maxCustomers;
    this.minNumberCustomersPerHour = minCustomers;
    this.avgCookiesPerCustomers = AvgCookiesCustomer;
};


//instiate new instances of our store constructor
let StoreFour = new store( "Bethesda, MD", "Pat's Cookies", 10, '6am-8pm', "Coconut Cookies", 1000, 75, 12, 5);
let StoreFive = new store("Washington, DC", "Patty's Cookies",15, '7am-8pm', "Banana Cookies", 1500, 200, 45, 3 );
let StoreSix = new store ("Silver Spring, MD", "Patties Cookies", 20, "8am-8pm","Lemon Cookies", 2000, 350, 80, 8);
storeArray.push(StoreFour, StoreFive,StoreSix);

console.log(store)


function displayStoreTitles() {
    for(let i = 0; i < storeArray.length; i++) {
        let elStoreTitle = document.createElement('h1');
        elStoreTitle.setAttribute('class', 'store-title');
        elBody.appendChild(elStoreTitle);
        elStoreTitle.innerHTML = storeArray[i].name;
    }
}

displayStoreTitles();


