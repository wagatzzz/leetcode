/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */


function map(arr, fn){
    const transformedArr = [];
    for (let i = 0; i < arr.length; i++) {
        transformedArr[i] = fn(arr[i], i);
    }
    return transformedArr;
    
}


/**
// Example usage: Square each element of the array
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = map(numbers, function(num) {
  return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
 */