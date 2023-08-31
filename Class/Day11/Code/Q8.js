//find the first student whose score is greater than 25
var students = [
    {name: "John", score: 10},
    {name: "Mary", score: 20},
    {name: "Peter", score: 30},
    {name: "Kate", score: 40},
    {name: "Paul", score: 50}
    ];
const student = students.find(
    (student) => student.score > 25);
console.log(student);

