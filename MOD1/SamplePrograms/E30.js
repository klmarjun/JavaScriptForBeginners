//Write a for loop to print triangle pattern of stars
for(let i=0;i<5;i++){
    var line = '';
    for(let j=0;j<i;j++){
        line = line + '*';
    }
    console.log(line);
}