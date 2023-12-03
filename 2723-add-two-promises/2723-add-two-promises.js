/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  try {
    // Wait for both promises to resolve using Promise.all
    const [result1, result2] = await Promise.all([promise1, promise2]);

    // Calculate the sum
    const sum = result1 + result2;

    // Return a new promise that resolves with the sum
    return Promise.resolve(sum);
  } catch (error) {
    // If any of the promises reject, catch the error and return a rejected promise
    return Promise.reject(error);
  }
};
/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */