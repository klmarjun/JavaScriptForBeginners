//Create numbers array with values [2,0,12,14,-2]
//check whether all the elements are positive using various array helper methods

const numbers = [2, 0, 12, 14, -2];
const allPositive = numbers.every((number) => number > 0);
console.log(allPositive);

const allPositive1 = numbers.some((number) => number > 0);
console.log(allPositive1);

const allPositive2 = numbers.filter((number) => number > 0);
console.log(allPositive2);

const allPositive3 = numbers.find((number) => number > 0);
console.log(allPositive3);

const allPositive4 = numbers.reduce((accumulator, number) => {
    return accumulator && number > 0;
},true);

console.log(allPositive4);

