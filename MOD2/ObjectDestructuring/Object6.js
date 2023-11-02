//Nested Object Destructuring
var obj = {
    a:1,
    b:2,
    nested_obj:{
        c:3,
        d:4
    }
}
var {a,b,nested_obj:{c,d}} = obj

console.log(a,b,c,d);