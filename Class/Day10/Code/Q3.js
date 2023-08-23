//Create an array product and create 3 objects
//name : smartphone, price : 500
//name : Tablet , price : 300
//name : Headphones , price : 100
const product = [
    {name : "smartphone", price : 500},
    {name : "Tablet" , price : 300},
    {name : "Headphones" , price : 100}
]

const newPro = product.filter(function(p){
    return p.price<400 ;
})
console.log(newPro)
