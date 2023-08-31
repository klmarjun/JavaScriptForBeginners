var students = [
    {name: "John", score: 10},
    {name: "Mary", score: 20},
    {name: "Peter", score: 30},
    {name: "Kate", score: 40},
    {name: "Paul", score: 50}
    ];

const TotalScore = students.reduce(
    (collector,student) =>collector + student.score,0);
console.log(TotalScore);