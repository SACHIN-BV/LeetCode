/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
        // Split the string into words, then filter out any empty strings caused by extra spaces.
    const words = s.trim().split(' ').filter(word => word !== '');
    // The last word is the last element in the array.
    const lastWord = words[words.length - 1];
    // Return the length of the last word.
    return lastWord.length;
    
};