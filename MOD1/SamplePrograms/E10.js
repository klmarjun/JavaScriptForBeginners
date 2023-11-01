// //Create an object called store with the properties,

// ‘name’ (string)
// ‘location’ (String)
// ‘isOpen’ (Boolean)
// ‘departments’ ( array)
// The values for the properties are: “MegaMart”, “123 Main Street, Chennai”, true and array of Groceries, Electronics, Clothing respectively.

// Create and object method called getStoreInfo which returns “MegaMart is located at 123 Main Street, City. It is currently open.

// Create an object called ‘manager’ with the properties
// ‘name’
// ‘age’
// ‘contact’
// The values of the properties are: John, 35, and john.megamart.com
// Add this object as property to store
// Print the name of the strore
// Print whether the store is open or not
// Print the departments in the store
// Print the name of the manager

let store = {
    name:'Megamart',
    location:'123 Main Street, Chennai',
    isOpen:true ,
    departments:['Groceries', 'Electronics', 'Clothing'],
    getStoreInfo : function(){
        console.log(`${this.name} is located at ${this.location}. It is currently ${isOpen?true:false}`);
    }
};

let manager = {
    name:'John',
    age:35,
    contact:'john.megamart.com'
}

store.Manager = manager;

console.log(`${store.name}`);

console.log(`${store.getStoreInfo()}`);

console.log(`${store.departments}`);

console.log(`${store.manager.name}`);