let obj = {
    name:"Arjun",
    age:19,
    marks:[1,2,3,4,5]
}
//Making modifications
obj.city = 'Chennai';
obj.isStudent = true;
obj.marks[5] = 6;
obj['marks'][6] = 7;
//Printing the modified object
console.log(obj)
