/**
 * 给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：
 * 子数组大小 至少为 2 ，且子数组元素总和为 k 的倍数。
 * 如果存在，返回 true ；否则，返回 false 。
 * 如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。0 始终视为 k 的一个倍数。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const n = nums.length;
  const preSum = new Map();
  preSum.set(0, 1);
  let sum_i = 0;
  let sum_pre = 0;
  for (let i = 0; i < n; i++) {
    sum_i += nums[i];
    let sum_j = sum_i % k;
    if (preSum.has(sum_j) && (sum_j !== sum_pre || preSum.get(sum_j) > 1)) {
      return true;
    }
    sum_pre = sum_j;
    preSum.set(sum_j, (preSum.get(sum_j) || 0) + 1);
  }
  return false;
};

const ret = checkSubarraySum([23, 2, 4, 6, 6], 7);
console.log(ret);

// 输入：nums = [23,2,6,4,7], k = 6
// 输出：true
// 解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。
// 42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。

// (sum_j - sum_i) % k === 0;
// (sum_i % k) - (sum_j % k) === 0;
