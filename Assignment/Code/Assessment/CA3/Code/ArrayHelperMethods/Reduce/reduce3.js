var students = [
    {name: "John", score: 10},
    {name: "Mary", score: 20},
    {name: "Peter", score: 30},
    {name: "Kate", score: 40},
    {name: "Paul", score: 50}
    ];
const ts = function (collector,i){
    return collector+i.score
}
const totalScore = students.reduce(ts,0)
console.log(totalScore)