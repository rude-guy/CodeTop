/**
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix[0].length;
  const n = matrix.length;
  const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
  let ret = 0;
  for (let i = 0; i < m; i++) {
    dp[0][i] = +matrix[0][i];
    ret = dp[0][i] === 1 ? 1 : ret;
  }
  for (let j = 0; j < n; j++) {
    dp[j][0] = +matrix[j][0];
    ret = dp[j][0] === 1 ? 1 : ret;
  }

  const startStep = (i, j, step) => {
    let index = 1;
    while (index <= step) {
      if (dp[j - index][i] === 0 || dp[j][i - index] === 0) {
        return index;
      }
      index++;
    }
    return index;
  };

  for (let j = 1; j < n; j++) {
    for (let i = 1; i < m; i++) {
      if (matrix[j][i] === '0') {
        dp[j][i] = 0;
        continue;
      }
      const step = dp[j - 1][i - 1];
      if (step === 0) {
        dp[j][i] = 1;
      } else {
        const maxStep = startStep(i, j, step);
        dp[j][i] = maxStep;
      }
      ret = Math.max(ret, dp[j][i]);
    }
  }
  return ret * ret;
};

// 动态规划
var maximalSquare = function (matrix) {
  const m = matrix[0].length;
  const n = matrix.length;
  const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
  let ret = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        ret = Math.max(ret, dp[i][j]);
      }
    }
  }
  return ret * ret;
};

// const matrix = [
//   ['0', '0', '0', '1'],
//   ['1', '1', '0', '1'],
//   ['1', '1', '1', '1'],
//   ['0', '1', '1', '1'],
//   ['0', '1', '1', '1'],
// ]; // 9

// [
//   [0, 0, 0, 1],
//   [1, 1, 0, 1],
//   [1, 2, 1, 1],
//   [0, 1, 2, 2],
//   [0, 1, 2, 3],
// ];

const matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]; // 4

// [
//   [1, 0, 1, 0, 0],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 2, 2],
//   [1, 0, 0, 1, 0],
// ];

const ret = maximalSquare(matrix);

console.log(ret);

// 动态规划
// const matrix = [
//   ['1', '0', '1', '0', '0'],
//   ['1', '0', '1', '1', '1'],
//   ['1', '1', '1', '1', '1'],
//   ['1', '0', '0', '1', '0'],
// ]; // 4

// const dp = [
//   [1, 1, 1, 1, 1]
//   [1, 1, 1, 1, 1]
//   [1, 1, 1, 2, 2]
//   [1, 1, 1, 2, 2]
// ];

// dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
