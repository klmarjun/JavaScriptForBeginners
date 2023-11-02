// // Define a base constructor function
// function Vehicle(name) {
//     this.name = name;
// }

// // Add a method to the prototype of the base constructor
// Vehicle.prototype.vehType = function () {
//     console.log(`Hello, This is a ${this.name}!`);
// };

// // Create an instance of Vehicle
// const vehicle = new Vehicle('Bus');
// vehicle.vehType(); // Output: Hello, This is a Bus!

// // Define a derived constructor function
// function Car(name, brand) {
//     // Call the base constructor using 'call' to set 'this'
//     Vehicle.call(this, name); // Pass the 'name' parameter to the Vehicle constructor
//     this.brand = brand;
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.fuel = function () {
//     console.log('Petrol');
// };

// const car = new Car('Car','BMW');
// car.vehType();
// car.fuel();
function Vehicle(name){
    this.name = name;
}
Vehicle.prototype.Vehtype = function(){
    console.log(`this is a ${this.name}`);
}
var obj = new Vehicle('Bus')
obj.Vehtype();


function Car(name,brand){
    Vehicle.call(this,name);
    this.brand=brand
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.fuel = function(){
    console.log('Petrol');
}
var obj1 = new Car('Car','Audi');
obj1.Vehtype();
obj1.fuel();















