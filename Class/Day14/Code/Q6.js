//create object called person with property name age and city 
//abc , 30 , chennai
//create  anew object called info with properties age and city
//and extract the value of name; property in variable called name


var person = {
    name: "abc",
    age: 30,
    city: "chennai"
}
let { name,...info}=person;
console.log(name);
console.log(info);



