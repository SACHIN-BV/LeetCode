/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    // Loop through both strings from the end towards the beginning
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (i >= 0) {
            sum += a[i] - '0'; // Convert character to number
            i--;
        }
        if (j >= 0) {
            sum += b[j] - '0'; // Convert character to number
            j--;
        }
        carry = Math.floor(sum / 2); // Calculate the carry
        result = (sum % 2) + result; // Append the remainder to the result string
    }

    return result;
}