//Write a function to find maximum and minimum number in an array
arr = [1,5,3,7,9,2,-2];
sorted_arr = arr.sort();
sorted_arr_len = sorted_arr.length;
console.log(`Minimum number is ${sorted_arr[0]}`);
console.log(`Maximum number is ${sorted_arr[sorted_arr_len-1]}`);