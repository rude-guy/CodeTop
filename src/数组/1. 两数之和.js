/**
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const rest = target - num;
    if (typeof map[rest] === 'number') {
      return [map[rest], i];
    }
    map[num] = i;
  }
  return [];
};

twoSum([3, 2, 4], 6);
