/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  
    if (strs.length === 0) return "";

    // Find the shortest string in the array
    let shortest = strs.reduce((acc, str) => acc.length < str.length ? acc : str);

    for (let i = 0; i < shortest.length; i++) {
        // Check if the character at index i is common among all strings
        for (let str of strs) {
            if (str.charAt(i) !== shortest.charAt(i)) {
                // If not, return the prefix up to index i
                return shortest.substring(0, i);
            }
        }
    }

    // If all strings have been checked and the loop completes,
    // the shortest string itself is the common prefix
    return shortest;
    
};