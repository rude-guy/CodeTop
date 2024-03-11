/**
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 子数组是数组中元素的连续非空序列。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 连续区间和 使用前缀和数组
var subarraySum = function (nums, k) {
  const n = nums.length;
  const preSum = new Map();
  preSum.set(0, 1);
  let count = 0;
  let sum0_i = 0;
  for (let i = 0; i < n; i++) {
    sum0_i += nums[i];
    let sum0_j = sum0_i - k;
    if (preSum.has(sum0_j)) {
      count += preSum.get(sum0_j);
    }
    preSum.set(sum0_i, (preSum.get(sum0_i) || 0) + 1);
  }
  return count;
};

const ret = subarraySum([1, 2, 3], 3);
console.log(ret);

// 连续 => 范围

// nums = [1,2,3], k = 3
// 2

// x < y  y - x = k => y - k = x
