//Default values and new variable names
const obj = {
    name:'Arjun',
    age:19
}
const {name:newName,age:newAge,city:newCity='Chennai'}=obj;
console.log(newName,newAge,newCity);