const arr = [1,2,3,4,7,9,12]
const Earr = arr.filter(function(n){
    return n%2 == 0;
})
console.log(Earr)