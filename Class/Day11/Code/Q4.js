//Atleast one student in the class is having the score greater than 90 using some helper method
// consider this array of objects

var students = [
    {name: "John", score: 51},
    {name: "Mary", score: 72},
    {name: "Peter", score: 93},
    {name: "Kate", score: 45},
    {name: "Paul", score: 90}
    ];

 const TotalScore = students.some(
        (student) => student.score > 90);
    console.log(TotalScore);