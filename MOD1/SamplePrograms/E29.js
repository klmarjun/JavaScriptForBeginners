//Write a ‘for’ loop that prints numbers from 1 to 20, replacing multiples of 3 with Java and multiples of 5 with Script
for(let i=1;i<=20;i++){
    if(i%3==0){
        console.log('Java');
    }
    else if(i%5==0){
        console.log('Script');
    }
    else{
        console.log(i);
    }
}
