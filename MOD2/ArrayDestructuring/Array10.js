//Nested array destructuring
const arr = [1,2,3,[4,5],6,7];
const [a,b,,[c,d,e],...nums]=arr;
console.log(a,b,c,d,e,nums);