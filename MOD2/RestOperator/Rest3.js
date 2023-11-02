function sum(...nums){
    var req_nums = 3;
    if(nums.length!==3){
        throw new Error(`Exactly ${req_nums} parameter is required.`);
    }
    var result = nums.reduce((acc,ele)=>acc+ele,0);
    return result;
}
try{
    //var result = sum(1,2,3)
    var result = sum(1,2);
    console.log(result);
}
catch(error){
    console.error('error: ',error.message);
}