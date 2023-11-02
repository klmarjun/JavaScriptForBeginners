var name='Arjun';
var age = 19;
var str = f`My name is ${name} and age is ${age}`;

function f(string,...params){
    console.log(string);
    console.log(params);
    return params.reduce((acc,ele,idx)=>{
        return acc+params+string[idx+1];
    },string[0])
}
var res = f([ 'My name is ', ' and age is ', '' ],[ 'Arjun', 19 ]);
console.log(res);
