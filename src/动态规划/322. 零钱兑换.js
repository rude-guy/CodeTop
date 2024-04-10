/**
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 * 你可以认为每种硬币的数量是无限的。
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const memo = new Map();
  function dp(n) {
    if (n < 0) {
      return Infinity;
    }
    if (n === 0) {
      return 0;
    }
    if (memo.has(n)) {
      return memo.get(n);
    }
    let ret = Infinity;
    for (const coin of coins) {
      ret = Math.min(dp(n - coin) + 1, ret);
    }
    memo.set(n, ret);
    return ret;
  }
  const ret = dp(amount);
  return ret === Infinity ? -1 : ret;
};

var coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b);
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin < 0) {
        break;
      } else {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
const ret = coinChange([1, 2147483647], 2);
console.log(ret);

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：11 = 5 + 5 + 1

// 5 2 1
// i => amount
// dp[0] = 0
// dp[1] = 1
// dp[2] = 1
// dp[3] = 2
// dp[4] = 2
// dp[5] = 1
// Math.min(dp[5 - 5] + 1, dp[5 - 2] + 1,  dp[5 - 1] + 1)
// dp[i] = dp[amount - coin] + 1;
