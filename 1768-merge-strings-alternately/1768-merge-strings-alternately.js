/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // Convert strings to arrays
    let arr1 = word1.split('');
    let arr2 = word2.split('');

    // Initialize result array
    let result = [];

    // Iterate through both arrays
    let i = 0;
    while (i < arr1.length || i < arr2.length) {
        // If there's a character left in word1, add it to result
        if (i < arr1.length) {
            result.push(arr1[i]);
        }
        // If there's a character left in word2, add it to result
        if (i < arr2.length) {
            result.push(arr2[i]);
        }
        i++;
    }

    // Join the result array into a string
    return result.join('');
};