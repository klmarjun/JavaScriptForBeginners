//SUM
function sum(...nums){
    var res = nums.reduce((acc,element)=>
    acc+element,0
)
console.log(res);
}
sum(1,2,3);
sum(10,20,30,40)