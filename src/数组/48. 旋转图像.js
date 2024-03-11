/**
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length - 1;
  const len = matrix.length;
  let temp = 0;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = 0; j < Math.floor((len + 1) / 2); j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[n - j][i];
      matrix[n - j][i] = matrix[n - i][n - j];
      matrix[n - i][n - j] = matrix[j][n - i];
      matrix[j][n - i] = temp;
    }
  }
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// n = 2;
// arr[0][0] = arr[2][0]
// arr[0][1] = arr[1][0]
// arr[0][2] => arr[0][0]

// arr[1][0] = arr[0][1]
// arr[1][1] = arr[1][1]
// arr[1][2] => arr[2][1]

// arr[i][j] = arr[n - j][i] = arr[n - i][n - j] = arr[j][n - i] = temp

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

// [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];

// [
//   [15, 13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7, 10, 11],
// ];
