//spread operator with objects
//create the object called person with properties
//name abc and age 30
//upperson-<(taken from object person),age:31,city:chennai

const arr = [1,2,3]
const [first,b,c] = [...arr]
const person = {
    name: 'abc',
    age: 30
}
const upperson = {...person,age:31,city:'chennai'}
console.log(upperson)

