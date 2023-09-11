//use the concept of rest operator in object destructuring
const myObject = {
    a:true,
    b:10,
    c:[],
    d:"abc",
    e:20,
}
{a,b,...rest}= myObject
console.log(a);
console.log(b);
cosnole.log(rest)
