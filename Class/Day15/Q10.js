const onlineStore = {
    products:[],
    addProduct(productName,productPrice){
        this.products.push({productName,productPrice})
    },
    calculateSubTotal(){
        let sum = 0
        for(const product of this.products){
            sum += product.price
        }
        return sum
    },
    applyCoupon(code){
        const couponCodes = {
            sale:10,
            special:20,
            halfprice:50,
        }
        if (couponCodes.hasOwnProperty(code)){
            console.log(code)
            console.log(couponCodes[code])
            const discount = couponCodes[code]
            const subTotal = this.calculateSubTotal()
            const  = subTotal * discount / 100
        }
    }

    
}
onlineStore.addProduct("Laptop",1000)
onlineStore.addProduct("Mobile",500)
console.log(onlineStore.products)