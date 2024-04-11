/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ret = [];
  let len = nums.length;
  function backTrack(track) {
    if (track.size === len) {
      ret.push([...track]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (track.has(nums[i])) {
        continue;
      }
      track.add(nums[i]);
      backTrack(track);
      track.delete(nums[i]);
    }
  }
  backTrack(new Set());
  return ret;
};

permute([1, 2, 3]);

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
