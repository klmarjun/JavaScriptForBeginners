//create  anew array which consists only the name
const people = [
    {name:"John",age:30},
    {name:"AAA",age:25},
    {name:"BBB",age:35}
]
const newP = people.map(function (p)
{
    return p.name;
});
console.log(newP)