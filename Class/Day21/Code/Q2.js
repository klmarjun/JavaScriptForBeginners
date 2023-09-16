class vehicle{
    constructor(make, model, year,maxSpeed, weight){
        this.make = make;
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.weight = weight;
    }
    start(){
        console.log(`Starting the ${this.year} ${this.make} ${this.model}`);
    }
    stop(){
        console.log(`Stopping the ${this.year} ${this.make} ${this.model}`);
    }
    accelerate(){
        console.log(`Accelerating the ${this.year} ${this.make} ${this.model}`);
    }
    brake(){
        console.log(`Braking the ${this.year} ${this.make} ${this.model}`);
    }
    getSpecs(){
        console.log(`Make: ${this.make} Model: ${this.model} Year: ${this.year} Max Speed: ${this.maxSpeed} Weight: ${this.weight}`);
    }
    displayInfo(){
        console.log(`Make: ${this.make} Model: ${this.model} Year: ${this.year}`);
        console.log(`Max Speed: ${this.maxSpeed} mph`);
        console.log(`Weight: ${this.weight} lbs`);
    }
}

class Car extends vehicle{
    constructor(make, model, year, maxSpeed, weight, isDriving){
        super(make, model, year, maxSpeed, weight);
        this.isDriving = isDriving;
    }
    drive(){
        this.isDriving = true;
        console.log(`Driving the ${this.year} ${this.make} ${this.model}`);
    }
    stop(){
        this.isDriving = false;
        console.log(`Stopping the ${this.year} ${this.make} ${this.model}`);
    }
    displayInfo(){
        super.displayInfo();
        console.log(`Is Driving: ${this.isDriving}`);
        
    }
}   
const car1 = new Car("Ford", "Mustang", 2019, 200, 3600, false);
car1.start();
car1.drive();
car1.accelerate();
car1.brake();
car1.stop();
car1.getSpecs();
car1.displayInfo();
const car2 = new Car("Chevrolet", "Corvette", 2019, 200, 3600, false);
car2.start();
car2.drive();
car2.accelerate();
car2.brake();
car2.stop();
car2.getSpecs();
car2.displayInfo();

