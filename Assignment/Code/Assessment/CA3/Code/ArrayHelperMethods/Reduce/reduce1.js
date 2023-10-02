var students = [
    {name: "John", score: 10},
    {name: "Mary", score: 20},
    {name: "Peter", score: 30},
    {name: "Kate", score: 40},
    {name: "Paul", score: 50}
    ];
function TotalScore(collector,i){
    return collector+i.score
}
const total_score = students.reduce(TotalScore,0)
console.log(total_score)