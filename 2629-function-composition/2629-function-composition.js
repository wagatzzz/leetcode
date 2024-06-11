/**
 * @param {Function[]} functions
 * @return {Function}
 */

function compose(functions){
    if(functions.length === 0){
        return function(x){
            return x;
        }
    }
    return functions.reduceRight((acc, fn) =>{
        return function(x){
            return fn(acc(x));
        };
    });
}
/**The reduceRight method iterates over the array of functions from right to left, creating a new function that calls each function in turn, passing the result of the previous function call to the next. */

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */