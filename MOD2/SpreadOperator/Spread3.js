//Cloning an array
var arr = [1,2,3,4];
var clone_arr = [...arr];
console.log(clone_arr);
clone_arr.push(5);
console.log(clone_arr);
console.log(arr);
//After cloning if any operations is made in the cloned array it wont affect the orginal array