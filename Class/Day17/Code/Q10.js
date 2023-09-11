//Nested object destructuring
const obj1 = {
    u:1,
    v:2,
    nestedObj:{
        w:3,
        w1:4,
    }
}
//const {u:u,v:v,nestedObj:nestedObj} = obj1
//console.log(u,v,nestedObj)
//error

//solution
const{
    u:u,
    v:v,
    nestedObj:{
        w:w,
        w1:w1
    } = obj1
}
console.log(u,v,w,w1)
