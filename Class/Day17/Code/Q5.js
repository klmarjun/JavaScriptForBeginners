 const myobject1 = {
     an:10,
     bn:true,

}
const{an,bn} = myObject1;
console.log(a1,b1);

//let a1,b1;
//console.log(a1,b1);
//error produced

//Solution for thhe error produced
({a1,b1} = myObject1);
console.log(a1,b1)
