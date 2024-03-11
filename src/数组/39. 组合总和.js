/**
 * 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
 * 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
 * candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。
 * 对于给定的输入，保证和为 target 的不同组合数少于 150 个
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ret = [];
  const track = [];
  const n = candidates.length;
  function backTrack(track, i, target) {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      ret.push(track.slice());
      return;
    }
    for (let j = i; j < n; j++) {
      track.push(candidates[j]);
      /** 选择范围变化 */
      // j 表示重复当前项，比如 i = 0, j = 1; => [3, 6, 7]
      // j + 1 表示不能重复当前项，i = 0, j = 1; => [6, 7]
      backTrack(track, j, target - candidates[j]);
      track.pop();
    }
  }
  backTrack(track, 0, target);
  return ret;
};
const ret = combinationSum([2, 3, 6, 7], 7);
console.log(ret);

// [2,3,6,7] 7
// [[2,2,3],[7]]
