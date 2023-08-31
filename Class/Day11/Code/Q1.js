//Create an array of objects
//Each object will have a name and a value
//Create a function that will take the array as an argument
//callback function will be called for each object in the array
//callback function will print the name and value of each object
//call the function

var students = [
    {name: "John", score: 10},
    {name: "Mary", score: 20},
    {name: "Peter", score: 30},
    {name: "Kate", score: 40},
    {name: "Paul", score: 50}
    ];
function TotalScore(total, student) {
    return total + student.score;
}
const ts = students.reduce(TotalScore, 0);
console.log(ts);  
