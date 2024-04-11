/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 */

var combine = function (n, k) {
  const ret = [];
  const backTrack = (i, track) => {
    if (k === track.length) {
      ret.push(track.slice());
      return;
    }
    for (let j = i; j <= n; j++) {
      track.push(j);
      backTrack(j + 1, track);
      track.pop();
    }
  };
  backTrack(1, []);
  return ret;
};

const ret = combine(4, 2);
console.log(ret);

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
