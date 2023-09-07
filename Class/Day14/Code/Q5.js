const numbers = [1,2,3,4,5,6,7,8,9,10];
const [first,second,third,...rest] = numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(...rest);
