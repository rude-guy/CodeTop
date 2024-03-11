/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const memo = new Map();
  function dp(x, y) {
    if (x > m || y > n) {
      return 0;
    }
    if (x === m && y === n) {
      return 1;
    }
    const memoKey = `${x},${y}`;
    if (memo.has(memoKey)) {
      return memo.get(memoKey);
    }
    const ret = dp(x + 1, y) + dp(x, y + 1);
    memo.set(memoKey, ret);
    return ret;
  }
  return dp(1, 1);
};

// let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
// for (let i = 0; i < m; i++) {
//   dp[i][0] = 1;
// }
// for (let j = 0; j < n; j++) {
//   dp[0][j] = 1;
// }
// for (let i = 1; i < m; i++) {
//   for (let j = 1; j < n; j++) {
//     dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//   }
// }
// return dp[m - 1][n - 1];

const ret = uniquePaths(3, 3);

console.log(ret);

// x, y =>  1. x + 1, y, x, y + 1
// x, y => path

// [
//   [1, 1, 1],
//   [1, 0, 0],
//   [1, 0, 0],
// ];
