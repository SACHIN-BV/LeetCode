/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let index1 = m - 1;  // Last element of the initial portion of nums1
    let index2 = n - 1;  // Last element of nums2
    let mergeIndex = m + n - 1;  // End of nums1 array where the merged elements go

    // Traverse backwards and merge nums2 into nums1
    while (index2 >= 0) {
        if (index1 >= 0 && nums1[index1] > nums2[index2]) {
            nums1[mergeIndex--] = nums1[index1--]; // Take element from nums1
        } else {
            nums1[mergeIndex--] = nums2[index2--]; // Take element from nums2
        }
    }

    return nums1; // Optionally return nums1 for convenience
    
};