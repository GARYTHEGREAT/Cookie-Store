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

};
console.log(StoreTwo.type);
console.log(StoreTwo);

let StoreThree={
    location: "Alert, Nunavut, Canada",
    name: "24 Sunshine Cookies",
    employees: 1,
    hours: "2pm-3pm",
    inventory: 2,

} 
console.log(StoreThree.type);
console.log(StoreThree);

//pushing both of our store objects into the storeArray
storeArray.push(StoreOne, StoreTwo, StoreThree);



let store = function(location, name, employees, hours, inventory){
    this.locaton = location;
    this.name= name;
    this. employees=employees; 
    this.hours =hours;
    this.inventory = inventory;
};


//instiate new instances of our store constructor
let StoreFour = new store( "Bethesda, MD", "PAT'S Cookies", 10, '6am-8pm', 100);
let StoreFive = new store("Washington, DC", "Patty's Cookies",15, '7am-8pm', 150);
let StoreSix = new store ("Silver Spring, MD", "Patties Cookies", 20, "8am-8pm", 200 )
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

