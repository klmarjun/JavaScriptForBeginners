//Rest in Object destructuring
var obj = {
    name:'Arjun',
    age:19,
    city:'Chennai',
    state:'TN'
}
var {name,age,...location}=obj;
console.log(name,age,location);