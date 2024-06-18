/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
    let hasBeenCalled = false;
    let result;

    return function() {
        if (!hasBeenCalled) {
            result = fn(...arguments); // Spread operator (...) to pass arguments
            hasBeenCalled = true;
            return result;
        } else {
            return undefined;
        }
    };
}


/**
 Function Definition: We define a function once that takes another function fn as an argument.

Initialization: Inside once, we declare two variables:

hasBeenCalled: This boolean flag keeps track of whether fn has been called before.
result: This variable stores the result of the first call to fn.
Returned Function: We return an inner function that:

Checks if fn has already been called (hasBeenCalled is false).
If fn has not been called (hasBeenCalled is false):
fn(...arguments) uses the spread operator ... to pass the arguments to the fn function.
Sets hasBeenCalled to true to indicate that fn has now been called.
Stores the result of fn in the result variable.
Returns the result.
If fn has already been called (hasBeenCalled is true):
It simply returns undefined.
 */
