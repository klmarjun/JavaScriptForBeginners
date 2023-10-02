function sum(a,b,c){
    return a+b+c
}
const values = [1,3,5]
const res = sum(...values)
console.log(res)