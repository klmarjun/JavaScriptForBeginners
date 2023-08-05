//Create an object called person with the keys name and age with the value "ABC" and 28.
//Add property adrees with the value 123 main road
//Add property gender with the value female
//Add property hobby with the value ['gardening','cycling']
//Add value reading in the list
//Add property city using variable prop_namewith the value Trichy

let person = {
    name : "ABC",
    age : 28,
}
let prop_name="Trichy"
person.address = "123 main road" ;
person.gender = 'Female';
person.hobby = ['gardening','cycling'];
person.hobby[2]= 'reading'
person.city = prop_name;
console.log(person);