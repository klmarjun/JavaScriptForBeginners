//Destructure non-object value
const arr = [1,2,3,4,5,0];
const {length,a}=arr;
console.log(length,a);

const val = undefined;
const {c,b} = val||{};
console.log(c,b);