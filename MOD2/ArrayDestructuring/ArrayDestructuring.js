const processQuantities = (([minqty, maxqty], defaultqty=0) => {
    console.log(minqty);
    console.log(maxqty);
    console.log(defaultqty);
    return maxqty - minqty;
})
const qtyRange = [8,29];
const sol = processQuantities(qtyRange);
console.log(sol)

//OUTPUT
// 8
// 29
// 0
// 21