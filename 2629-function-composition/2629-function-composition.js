/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return function(x) {
    // Check if the array of functions is empty
    if (functions.length === 0) {
      return x; // Identity function f(x) = x
    }

    // Use reduceRight to apply functions from right to left
    return functions.reduceRight(function(result, fn) {
      return fn(result);
    }, x);
  };
};



/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */