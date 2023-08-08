/*create an obj called store with the properties name of type string , loc of tyep string is open the type is 
boolean and property dept the type is array the values fo the propeties are megamart 123 main street chennai
and it takes the value true and an array consisting of groceries and clothing respectively create an object method
called getstore info which returns megamart is located at 123 main st chennai which is currently open*/
// Create an object called manager with the properties name age and contact.
// The values of the properties are john 35 and john.megamart.com
// 1. Add this object as property to store
// 2. Print the name of the store
// 3. Print whether the store is open or not
// 4. Print the departments in the store
// 5. Print the name of the  manager 
let store= {
    name : "Megamart",
    location : "123 Main Street, Chennai",
    isOpen : true,
    departments : ['Groceries','Electronics','Clothing'],
    getStoreInfo: function () {
        return `${this.name} is located at ${this.location} and it is currently ${this.isOpen ? "Open" : "Closed" }`;
},
}
console.log(store);
let manager= {
    name: "John",
    age: 35,
    contact: "john.megamart.com",
}

//1
store.manager = manager;
console.log(store);

//2
console.log(store.name);

//3
console.log(store.isOpen);

//4
console.log(store.departments);

//5
console.log(store.manager.name);
