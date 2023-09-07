//spread parameter in function
function sum(a, b, c, d) {
    return a + b + c + d;
}
const number1 = [1, 2, 3, 4];
const number2 = [5, 6, 7, 8,9,10];//5,6,7,8
const number3 = [5,6]
console.log(sum(...number1));
console.log(sum(...number2));
console.log(sum(...number3));
