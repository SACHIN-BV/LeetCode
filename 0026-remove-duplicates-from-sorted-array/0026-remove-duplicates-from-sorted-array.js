/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
      // Initialize write pointer (j) to 0
  let j = 0;

  // Iterate through the array
  for (let i = 1; i < nums.length; i++) {
    // Check if current element is unique (different from previous)
    if (nums[i] !== nums[j]) {
      // If unique, move it to the next position pointed to by j
      j++;
      nums[j] = nums[i];
    }
  }

  // Return the number of unique elements (j + 1)
  return j + 1;
    
};