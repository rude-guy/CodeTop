/**
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 */

// 买入 卖出 不操作

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp_1 = -Infinity,
    dp_0 = 0;

  for (const price of prices) {
    dp_0 = Math.max(dp_0, dp_1 + price);
    dp_1 = Math.max(-price, dp_1);
  }
  return dp_0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
