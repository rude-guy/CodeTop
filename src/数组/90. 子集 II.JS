/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const n = nums.length;
  const retSet = new Set();
  const track = [];
  nums.sort((a, b) => a - b);
  function backTrack(track, i) {
    retSet.add(track.slice());
    for (let j = i; j < n; j++) {
      if (j > i && nums[j] === nums[j - 1]) continue;
      track.push(nums[j]);
      backTrack(track, j + 1);
      track.pop();
    }
  }
  backTrack(track, 0);
  return [...retSet];
};

const ret = subsetsWithDup([1, 2, 2]); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(ret);
