// Create an object called cart with the items as key and price as value
// Apple 120
// Banana 50
// Orange 100
// Kiwi 150
// Dragon Fruit 200


// Create a function called bill() which takes the cart object as an argument and returns the total amount to be paid by the customer.

let cart = {
    Apple: 120,
    Banana: 50,
    Orange: 100,
    Kiwi: 150,
    DragonFruit: 200

}
for(let i in cart){
    console.log(i," : ",cart[i])
}

function bill(cart){
    let total=0;
    for(let i in cart){
        total+=cart[i]
    }
    return total
}
console.log("Total amount to be paid by the customer is: ",bill(cart))




