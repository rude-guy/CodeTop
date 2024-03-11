/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let n = nums.length;

  let ret = [];
  const track = [];
  function backTrack(track, i) {
    if (i > n) {
      return;
    }
    ret.push(track.slice());
    for (let j = i; j < n; j++) {
      track.push(nums[j]);
      backTrack(track, j + 1);
      track.pop();
    }
  }
  backTrack(track, 0);
  return ret;
};

const ret = subsets([1, 2, 3]);
console.log(ret);
// [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
