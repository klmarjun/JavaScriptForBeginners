//Write the equivalent code for the following using for loop

// var count=new Array();
// i=0;
// do
// {
// 	if(i%2 == 0)
// 		count[i]=1;
// 	else
// 		count[i]= i *10;
// 	i=i+1;
// }while(i<=5)
// console.log(count);

var arr = new Array();
let i = 0;
for(let i=0;i<=5;i++){
    if(i%2==0){
        arr[i] = 1;
    }
    else{
        arr[i] = i*10;
    }
}
console.log(arr)