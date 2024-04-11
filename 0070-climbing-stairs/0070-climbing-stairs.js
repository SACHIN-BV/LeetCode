/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1; // Base case: only one way to climb one step.

    // Initialize dp array where dp[i] will hold the number of ways to reach step i.
    let dp = new Array(n + 1);
    dp[1] = 1; // One way to reach the first step.
    dp[2] = 2; // Two ways to reach the second step (1+1 or 2).

    // Fill the dp array using the relationship dp[i] = dp[i-1] + dp[i-2].
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n]; // Return the number of ways to reach the nth step.
    
};