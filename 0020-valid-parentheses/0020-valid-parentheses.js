/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
       const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            // If the character is an opening bracket, push it onto the stack
            stack.push(char);
        } else {
            // If the character is a closing bracket
            const topElement = stack.pop();
            // Check if there's a matching opening bracket for the current closing bracket
            if (mapping[char] !== topElement) {
                return false;
            }
        }
    }

    // If the stack is empty after processing the entire string, it means all opening brackets were properly closed
    return stack.length === 0;
};