//Object property Assignment
var obj1 = {name:'Arjun',age:17};
var obj2 = {age:18};
//Traditional way
// var merged_obj = Object.assign({},obj1,obj2);
// console.log(merged_obj);
//Modern 
var merged_obj = {...obj1,...obj2};
console.log(merged_obj);