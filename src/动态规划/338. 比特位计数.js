/**
 * 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = i % 2 === 1 ? dp[i >> 1] + 1 : dp[i >> 1];
  }
  return dp;
};

const ret = countBits(5);
console.log(ret);
// 输入：n = 5
// 输出：[0,1,1,2,1,2]

// dp[i] = i % 2 === 1 ? dp[i >> 1] + 1 : dp[i >> 1];
