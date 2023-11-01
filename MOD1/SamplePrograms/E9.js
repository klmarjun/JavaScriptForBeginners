// Create an object called ‘person’ with the following properties
// ‘name’ (string)
// ‘age’ (number)
// ‘gender’ (String)
// ‘isStudent’ (Boolean)
// Create a method called ‘greet’ for the ‘person’ object that logs a greeting message to the console, including the person’s name and age
// Access the ‘name’ property of the ‘person’ object and store it in a variable called ‘personName’
// Add a new property ‘city’ to the ‘person’ object and set its value to a city of your choice. Also, modify the ‘age’ property to increase it by 5
// Loop through the ‘person’ object and log each property and its value to the console
// Create another object called ‘address’ as a nested object within ‘person’  with the following properties,
// ‘street’ (string
// ‘postalCode’ (string)
// Access the ‘postalCode’ property inside the ‘address’ object and store it in a variable called ‘postC’

let person = {
    name:'Arjun',
    age:19,
    gender:'Male',
    isStudent:true,
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
};

var personName = person.name;

person.city = 'Chennai';
person.age += 5;

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}

person.address = {
    street: 'Mettu st.',
    postalCode: '600056'
}

var postC = person.address.postalCode;
