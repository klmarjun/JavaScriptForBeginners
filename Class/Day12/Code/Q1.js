const person = {
    name: "Harry",
    age:15,
    gender:"Male",
    isStudent : true,
    greet : function(){
        return "Hello"+this.name
    }
}
console.log(person.greet())
delete person.name
person.personName = "Harry"
person.age = person.age+5
console.log(person)

for (let key in person){
    console.log(key + ":" +person[key])
}