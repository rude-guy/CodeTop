/**
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < n; i++) {
    for (let j = 1; j < i + 1; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n - 1];
};

// dp[0] = 1
// dp[1] = 1
// dp[2] = dp[1 - 1] * dp[2 - 1] + dp[2 - 1] * dp[0] = 2
// dp[3] = dp[1 - 1] * dp[3 - 1] + dp[2 -1] * dp[3 - 2] + dp[3 - 1] * dp[3 - 3]
// j = 1  j < i + 1
// dp[i] += dp[j - 1] * dp[i - j]
