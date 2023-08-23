//Create an array called student wit three object
//The properties of the objects are listed as:
//name:ABC,age:18;m1:24;m2:29
//name:DEF,age:24;m1:21;m2:30
//name:GHI,age:17;m1:14;m2:27
const student = [
    {name:"ABC",age:18,m1:24,m2:29},
    {name:"DEF",age:24,m1:21,m2:30},
    {name:"GHI",age:17,m1:14,m2:27}
]
let count = 0;
student.forEach((stud,index)=>{
    if(stud.m1>20 && stud.m2>24){
        console.log("Stduent Id: ",index);
        console.log("Name: ",stud.name);
        console.log("Age: ",stud.age);
        console.log("Mark 1: ",stud.m1);
        console.log("Mark 2: ",stud.m2);
        let avg = (stud.m1+stud.m2)/2;
        console.log("Average: ",avg);
        count++;
    }
}

)
console.log('No. of pass = ',count)