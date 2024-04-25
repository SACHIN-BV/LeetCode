/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Initialize pointers for the start and the end of the string
    let left = 0;
    let right = cleaned.length - 1;

    // Compare characters from the start and the end of the string
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
    
};