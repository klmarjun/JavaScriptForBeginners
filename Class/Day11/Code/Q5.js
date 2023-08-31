
var students = [
    {name: "John", score: 100},
    {name: "Mary", score: 200},
    {name: "Peter", score: 310},
    {name: "Kate", score: 480},
    {name: "Paul", score: 890}
    ];
    const result = students.every(
        (student) => student.score > 90);
    console.log(result);
