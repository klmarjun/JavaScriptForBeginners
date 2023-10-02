function sum(...nums){
    req_len = 3
    if(nums.length!==req_len){
        throw new Error('Give exactly 3 paramters')
    }
    const res = nums.reduce((accumulator,i)=>accumulator+=i,0)
    return res
}

try{
    const res = sum(1,2,3)
    console.log(res)
}

catch(error){
    console.error('Error: ',error.message)
}