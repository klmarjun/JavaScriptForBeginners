var obj = [
    {EID:121,Ename:'ABC',Esalary:10000},
    {EID:182,Ename:'DEF',Esalary:undefined},
    {EID:345,Ename:'GHK',Esalary:40000},
]

var PropcessEmployee = ((obj)=>{
    return obj.map(({EID,Ename:empname,Esalary:empsalary=500})=>
    ( {EID,empname,empsalary:empsalary+5000})
)})
const res = PropcessEmployee(obj);
console.log(res);