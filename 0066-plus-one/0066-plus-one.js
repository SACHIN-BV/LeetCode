/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++; // Increment the current digit by 1 if it's less than 9.
            return digits; // Return the updated array.
        }
        digits[i] = 0; // Set the current digit to 0 and move to the next digit to the left.
        }
        digits.unshift(1); // If all digits are 9, this adds a 1 at the beginning of the array.
    return digits;

};