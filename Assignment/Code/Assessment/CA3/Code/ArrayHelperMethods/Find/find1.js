var students = [
    {name: "John", score: 10},
    {name: "Mary", score: 20},
    {name: "Peter", score: 30},
    {name: "Kate", score: 40},
    {name: "Paul", score: 50}
    ];
// function highMarks(i){
//     return i.score>=30
// }
// const res = students.find(highMarks)
// console.log(res)


// const res = students.find((i)=>i.score>=30)
// console.log(res.name)

const res = function(i){
    return i.score===30
}
const display = students.find(res)
console.log(display.name)
