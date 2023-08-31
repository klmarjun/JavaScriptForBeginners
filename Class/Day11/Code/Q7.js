//create an array arr which includes the elemnts as 3,4,2,5,9
//find the first even number from the array using find helper method and find all the even numbers using filter helper method

const arr = [3, 4, 2, 5, 9];
const firstEven = arr.find((number) => number % 2 === 0);
console.log(firstEven);

const allEven = arr.filter((number) => number % 2 === 0);
console.log(allEven);

