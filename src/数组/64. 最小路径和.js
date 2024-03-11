/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const memo = new Map();

  function dp(i, j) {
    if (i >= m || j >= n) {
      return Infinity;
    }
    if (i === m - 1 && j === n - 1) {
      return grid[i][j];
    }
    const memoKey = `${i},${j}`;
    if (memo.has(memoKey)) {
      return memo.get(memoKey);
    }
    const ret = Math.min(dp(i + 1, j) + grid[i][j], dp(i, j + 1) + grid[i][j]);
    memo.set(memoKey, ret);
    return ret;
  }
  return dp(0, 0);
};

const ret = minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);

console.log(ret);

// [
//   [1, 4, 5],
//   [2, -1, -1],
//   [6, -1, -1],
// ];

// 7
// 因为路径 1→3→1→1→1 的总和最小。
