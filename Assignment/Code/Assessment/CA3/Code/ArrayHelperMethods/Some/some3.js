var students = [
    {name: "John", score: 10},
    {name: "Mary", score: 20},
    {name: "Peter", score: 30},
    {name: "Kate", score: 40},
    {name: "Paul", score: 50}
    ];
const ts = function(i){
    return i.score>=40
}
const res = students.some(ts)
console.log(res)