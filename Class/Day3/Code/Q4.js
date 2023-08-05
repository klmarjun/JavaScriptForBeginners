//Create an object called person with the keys name age and greet
//The values are "ABC" 25 method greet should display Hi, Welcome ABC
let person = {
    name:"ABC",
    age: 25,
    greet: function(){
        console.log('Hi, Welcome '+this.name);
    }
}
person.greet();