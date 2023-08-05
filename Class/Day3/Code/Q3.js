//create an object person with the keys name age and marks as an object and subject as an array and gender.
//The values are 'ABC' 18 {'m1':90,'m2':70,'m3':80} ['s1','s2','s3'] male
let person= {
    name : "ABC",
    age: 18,
    marks: {
        'm1':90,'m2':70,'m3':80
    },
    subject: ['s1','s2','s3'],
    gender: 'male'
}
console.log(person);

delete person.age;
console.log(person);

delete person['gender'];
console.log(person);

delete person.marks.m2;
console.log(person);

delete person.subject[0];
console.log(person);

console.log(person.address)
//produces undefined since it is not defined