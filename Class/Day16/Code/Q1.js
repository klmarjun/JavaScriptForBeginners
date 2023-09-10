const onlinestore = {
    products : [],
    addproduct(productName,productPrice){
        const product = {name:productName, price : productPrice};
        this.products.push(product);

    },
    calculateSubtotal(){
        let subtotal = 0;
        for (const product of this.products){
            subtotal = subtotal + product.price;

        }
        return subtotal
    },
    applyCoupon(code){
        const couponcodes={
            SALE10: 10,
            SPECIAL20 : 20,
            HALFPRICE: 50,
        };
        if (couponcodes.hasOwnProperty(code))
        {
            const discountPercentage = couponcodes[code];               `   `
            console.log(code);
            console.log(couponcodes[code]);
            const totalamount = this.calculateSubtotal();
            const discountAmount = (discountPercentage / 100)*totalamount;
            const amount_to_pay = totalamount - discountAmount;
            return amount_to_pay;


        }else {
            return "Invalid Counpon code";
        }
    },
};
onlinestore.addproduct("Laptop", 500);
onlinestore.addproduct("printer",200);
onlinestore.addproduct("Scanner",250);
onlinestore.addproduct("Mouse,keyboard",500);
console.log(onlinestore.products);

const couponcodes = "HALFPRICE";
const total = onlinestore.calculateSubtotal();
const result = onlinestore.applyCoupon(couponcodes);
console.log("Total amount",total);
if(typeof result === "number")
{
    console.log("Discount Amount = ", result)
}
else
{
    console.log("Total amount without discount",total)
}