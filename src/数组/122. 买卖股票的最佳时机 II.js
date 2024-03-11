/**
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  const dp = new Array(n).fill(-1).map(() => []);
  dp[0] = [0, -prices[0]];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  console.log(dp);
  return dp[n - 1][0];
};

const ret = maxProfit([7, 1, 5, 3, 6, 4]); // 7  (5 - 1 = 4) + (6 - 3  = 3)
console.log(ret);
