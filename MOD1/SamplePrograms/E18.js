//Write a JavaScript to display Good Morning, Good Afternoon or Good Evening

var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

if(hours<12){
    console.log(`Good Morning, Time is ${hours}:${minutes}:${seconds}`);
}
else if(hours>=12 && hours<18){
    console.log(`Good Afternoon, Time is ${hours}:${minutes}:${seconds}`);
}
else{
    console.log(`Good Night, Time is ${hours}:${minutes}:${seconds}`);
}