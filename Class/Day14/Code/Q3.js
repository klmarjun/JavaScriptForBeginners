function sum_req_arg(...numbers)
{
    let required = 3;
    if(required === numbers.length)
    {
        const result = numbers.reduce((total,num)=> total +num,0);
        return result;
    }
    throw new Error (`Expected ${required} arugument length but got ${numbers.length}`);

}
try{
    console.log(sum_req_arg(2,3));
}
catch(error)
{
    console.error("Error", error.message)
}