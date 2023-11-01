//Write a JavaScript that reads 10 numbers from user and store it in array. Display the count of negative numbers, positive numbers and zero from the list.
const prompt = require('prompt-sync')()
var pos_count = 0;
var neg_count = 0;
var zero_count = 0;
var array = new Array();
for(let i=0;i<10;i++){
    var num = parseInt(prompt(`Enter number ${i}: `));
    array[i] = num;
}
for(let i =0;i<10;i++){
    if (array[i]>0){
        pos_count++;
    }
    else if(array[i]===0){
        zero_count++;
    }
    else{
        neg_count++;
    }
}
console.log(`Positive Count: ${pos_count}`);
console.log(`Negative Count: ${neg_count}`);
console.log(`Zero Count: ${zero_count}`);
