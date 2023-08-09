var today = new Date()
let hour = today.getHours()
let minutes = today.getMinutes()
let sec = today.getSeconds()
if (hour<12)
{
    console.log('GOOD MORNING. Time is :'+hour+':'+minutes+':'+sec)
}
else if(hour>12&&hour<16)
{
    console.log('GOOD NOON. Time is :'+hour+':'+minutes+':'+sec)
}
else
{
    console.log('GOOD EVENING. Time is :'+hour+':'+minutes+':'+sec)
}