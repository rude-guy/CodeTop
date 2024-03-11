/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]]
 * 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
 * 请你返回所有和为 0 且不重复的三元组。
 */

const towSum = (nums, start, target) => {
  const ret = [];
  let left = start;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    let ol = nums[left];
    let hi = nums[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else if (sum === target) {
      ret.push([ol, hi]);
      while (left < right && nums[left] === ol) left++;
      while (left < right && nums[right] === hi) right--;
    }
  }
  return ret;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ret = [];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    const target = nums[i];
    const turn = towSum(nums, i + 1, 0 - target);
    for (const item of turn) {
      ret.push([target, item[0], item[1]]);
    }
    while (i < n - 1 && target === nums[i + 1]) i++;
  }
  return ret;
};

const ret = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(ret);

// [
//   [-1, -1, 2],
//   [-1, 0, 1],
// ];
