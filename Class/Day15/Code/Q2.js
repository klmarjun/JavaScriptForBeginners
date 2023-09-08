//infer the output
const obj1 = {a:1,b:2}
const obj2 = {a:3,b:4}
const obj3 = {...obj1,...obj2}
console.log(obj3)
const obj4 = {c:3,d:4}
const obj5 = {...obj1,...obj4}
console.log(obj5)