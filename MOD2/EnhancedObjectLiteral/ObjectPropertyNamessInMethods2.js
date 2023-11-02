const onlineStore = {
    products:[],
    addproduct(productName,productPrice){
        product = {name:productName,price:productPrice};
        this.products.push(product);
    },
    calculateSubtotal(){
        let subTotal = 0;
        for(let product of this.products){
            subTotal+=product.price;
        }
        return subTotal;
    },
    applyCouponCode(code){
        const couponCodes = {
            special10:10,
            special20:20
        }
        if(couponCodes.hasOwnProperty(code)){
            const discountpercentage=couponCodes[code];
            const subTotal=this.calculateSubtotal();
            const discountAmount = (discountpercentage/100)*subTotal;
            const discountedTotal = subTotal-discountAmount;
            return discountedTotal;
        }
        else{
            return 'invalid coupon code';
        }
    }
}
onlineStore.addproduct('Laptop',800);
onlineStore.addproduct('Headphones',100);
onlineStore.addproduct('SmartPhone',600);
const couponCode = 'special20';
const discountedTotal=onlineStore.applyCouponCode(couponCode);


console.log('subtotal before applying coupon: '+onlineStore.calculateSubtotal());
if(typeof discountedTotal=== 'number'){
    console.log('After discount: '+discountedTotal);
}