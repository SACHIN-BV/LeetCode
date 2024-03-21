/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
      // Handle empty needle case
  if (needle === "") {
    return 0;
  }

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // Check if current substring matches the needle
    let match = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }

    // Return index if match is found
    if (match) {
      return i;
    }
  }

  // Return -1 if no match is found
  return -1;
    
};