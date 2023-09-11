const myarray = [1,2,[3,4]]
const[a9,b9,[c9,d9,e9]] = myarray9
console.log(a9,b9,c9,d9,e9)
const ProcessQuantities = ([minQty,maxQty,defaultQty=0])=>{
    console.log(minQty);
    console.log(maxQty);
    console.log(defaultQty);
    return maxQty - minQty;

}
const qty = [8,29]
const sol = ProcessQuantities(qty)
console.log(sol);
