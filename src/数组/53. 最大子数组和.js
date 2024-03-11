/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let n = nums.length;
  const dp = [nums[0]];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...dp);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [4,-1,2,1]
