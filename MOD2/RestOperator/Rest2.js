//MULTIPLY using rest with default param
function multiply(multiplier,...nums){
    var res = nums.map((element)=>{
        return element*multiplier;
    })
    console.log(res);
}
multiply(5,10,15,20);