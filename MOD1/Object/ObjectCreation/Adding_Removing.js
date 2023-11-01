//ADDING
let obj1 = {
    name:'Arjun',
    age:19
}
obj1.isStudent = true;
obj1['hobby'] = ['Coding','Playing','Eating'];
obj1.city = 'Chennai'; 
obj1['hobby'] [1] = 'Sleeping'
console.log(obj1)

//REMOVING
let obj2 = {
    name:'Arjun',
    age:19,
    city:'Chennai',
    hobby:['Coding','Playing','Eating'],
    isStudent:true
}
delete obj2.isStudent;
delete obj2.hobby[1];
delete obj2['hobby'][2];
delete obj2.age;
console.log(obj2);