//Create an object student with the keys name age and mark 
// The values of the keys are ABC 15 and [100 99 85 92 and 91] respectively
//Iterate the object and print the values

let student= {
    name:"ABC",
    age:15,
    marks: [100,99,85,92,91],
}

for(let key in student){
    console.log(key+" : "+student[key]);
}