/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
    if (x < 2) return x; // Handle cases for 0 and 1 immediately.

    let left = 1, right = Math.floor(x / 2);
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === x) return mid; // Found the exact square root.
        else if (square < x) left = mid + 1; // Adjust search to the right.
        else right = mid - 1; // Adjust search to the left.
    }

    return right; // Right will be the largest integer less than the square root of x.
}