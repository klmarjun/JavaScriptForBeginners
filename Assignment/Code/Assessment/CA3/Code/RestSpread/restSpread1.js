function restspread(first, ...rest){
    console.log(first)
    console.log(rest)
}
const res = [1,2,3,4,5]
restspread(...res)