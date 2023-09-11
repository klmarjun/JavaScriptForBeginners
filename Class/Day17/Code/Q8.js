 //Destructuring non existing properties
 const myObject = {
     a:10,
     b:true,
}
const{a,b,c=100} = myObject
console.log(a,b,c)
