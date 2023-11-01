//Write a for loop to find prime numbers between 1 to 50
function prime(num){
    var flag=false;
    for(let j=2;j<num;j++){
        if(num%j==0){
            flag = true;
        }
    }
    if(flag == false){
        console.log(num);
    }
}
for(let i=1;i<51;i++){
    prime(i);
}