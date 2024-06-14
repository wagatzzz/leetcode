/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0; // Initialize a variable to store the value of the previous character
    
    // Iterate through the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        let currentValue = romanToIntMap[s[i]];
        
        // Check if we need to subtract or add
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        
        // Update prevValue for the next iteration
        prevValue = currentValue;
    }
    
    return total;
}

/** Given Roman numeral: "VIX"

Initialization:

Initialize total to 0.
Initialize prevValue to 0.
Reverse Iteration:

Start from the last character of the string "VIX".
Iterate backwards through the string.
First Iteration (last character):

Character: 'X'
currentValue = romanToIntMap['X'] = 10
prevValue is initially 0, so we add currentValue to total.
total = 0 + 10 = 10
Update prevValue to currentValue for the next iteration.
Second Iteration (second last character):

Character: 'I'
currentValue = romanToIntMap['I'] = 1
Now, prevValue is 10 from the previous iteration.
Since currentValue (1) is less than prevValue (10), we subtract currentValue from total.
total = 10 - 1 = 9
Update prevValue to currentValue for the next iteration.
Third Iteration (first character):

Character: 'V'
currentValue = romanToIntMap['V'] = 5
prevValue is now 1 from the previous iteration.
Since currentValue (5) is greater than prevValue (1), we add currentValue to total.
total = 9 + 5 = 14
Update prevValue to currentValue for the next iteration.
End of Iteration:

There are no more characters left to process.
total now contains the integer value corresponding to the Roman numeral "VIX", which is 14.*/