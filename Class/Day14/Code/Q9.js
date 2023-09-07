//Create an array called myArray with values [10,20,30]
//clone myArray into myArray2 using spread operator

let myArray = [10, 20, 30];
let myArray2 = [...myArray];
console.log(myArray2);
myArray2.push(40);
console.log(myArray2);
console.log(myArray);//remains same