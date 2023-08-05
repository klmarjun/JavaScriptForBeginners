//Declare an object called student with keys name age mark and adress and values are ABC 15 [100,99,85,92,91], {city:"chennai",state:"TN"}
let student = {
    name:"ABC",
    age: 15,
    mark:[100,99,85,92,91],
    address:{
        city:"Chennai",
        state:"TamilNadu"
    }

}
//Display the object
console.log(student);
//Display the firt mark of the student
console.log(student.mark[0]);
/////////console.log(student['mark'][0])
//Change the first mark to 78
student.mark[0]=78;
/////////student['mark'][0]=78;
console.log(student.mark[0])
//Change the city as Trichy
student.address.city= "Trichy";
/////////student['address']['city']="Trichy"
////////console.log(student['address']['city])
console.log(student.address.city)
