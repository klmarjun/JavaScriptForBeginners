//Define a base constructor function called Vehicle that takes in the name of the vehicle and the number of wheels.
function Vehicle(name, wheels){
    this.name = name;
    this.wheels = wheels;
}
//Define a base prototype function called move that outputs the name of the vehicle and the number of wheels it has.
Vehicle.prototype.move = function(){
    console.log(`Name: ${this.name} Wheels: ${this.wheels}`);
}
//Define a constructor function called Bike that inherits from the Vehicle constructor function. Bike should also take in the name of the bike and the number of wheels.
function Bike(name, wheels){
    Vehicle.call(this, name, wheels);
}
//Define a prototype function called start that outputs "Starting the Engine".\
Bike.prototype.start = function(){

    console.log("Starting the Engine");
}
const vehicle = new Vehicle("Vehicle");
