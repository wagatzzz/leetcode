/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn){
    let filteredArr = [];
    for(i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
        filteredArr.push(arr[i]);
    }
    }
    
    return filteredArr;
}
