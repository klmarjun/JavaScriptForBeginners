// const array = [1,2,3,4,5,3]
// function FindThree(value){
//     return value===3
// }
// const res = array.findIndex(FindThree)
// console.log(res)

var students = [
    {name: "John", score: 10},
    {name: "Mary", score: 20},
    {name: "Peter", score: 30},
    {name: "Kate", score: 40},
    {name: "Paul", score: 50}
    ];
sub_arr = {name: "Peter", score: 30}
const res = students.findIndex((i)=>i.name === sub_arr.name && i.score===sub_arr.score)
console.log(res)