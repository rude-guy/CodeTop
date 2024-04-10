/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp_1 = 1;
  let dp_2 = 1;
  for (let i = 2; i <= n; i++) {
    const temp = dp_1 + dp_2;
    dp_1 = dp_2;
    dp_2 = temp;
  }
  return dp_2;
};

var climbStairs = function (n) {
  const memo = new Map();
  const dp = (i) => {
    if (i === 1 || i === 0) {
      return 1;
    }
    if (memo.has(i)) {
      return memo.get(i);
    }
    const ret = dp(i - 1) + dp(i - 2);
    memo.set(i, ret);
    return ret;
  };
  return dp(n);
};

// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶

// n = 3
// 1 + 1 + 1
// 1 + 2
// 2 + 1

// n = 4
// 1 + 1 + 1 + 1
// 1 + 2 + 1
// 1 + 1 + 2
// 2 + 1 + 1
// 2 + 2

// dp[0] = 1
// dp[1] = 1
// dp[2] = 2
// dp[3] = 3
// dp[4] = 5

// dp[i] = dp[i - 1] + dp[i - 2]
