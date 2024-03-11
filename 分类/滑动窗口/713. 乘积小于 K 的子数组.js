/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  const n = nums.length;
  let ret = 0;
  let total = 1;
  let l = 0;
  for (let r = 0; r < n; r++) {
    // 向右扩张
    total *= nums[r];

    // 收缩
    while (l <= r && total >= k) {
      total /= nums[l++];
    }

    // 根据数组的长度相关 3 2 1， 小于 7的组合加油 3 2 32 321 21 1
    ret += r - l + 1;
  }

  return ret;
};

// const nums = [10, 5, 2, 6],
//   k = 110;
const nums = [3, 2, 1],
  k = 7;

console.log(numSubarrayProductLessThanK(nums, k));
