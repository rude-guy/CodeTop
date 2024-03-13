/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
 * 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const stacks = [];
  stacks[0] = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let isPushed = false;
    for (let j = 0; j < stacks.length; j++) {
      // 单调递减栈
      const stack = stacks[j];
      if (stack[stack.length - 1] <= nums[i]) {
        stack.push(nums[i]);
        isPushed = true;
        break;
      }
    }
    if (!isPushed) {
      stacks.push([nums[i]]);
    }
  }
  return stacks.length;
};
// 单调递减栈
// [[10, 9, 2], [5, 3], [7], [101, 18]];

var lengthOfLIS = function (nums) {
  const piles = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = piles.length;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (piles[mid] === nums[i]) {
        left = mid;
        break;
      } else if (piles[mid] > nums[i]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    piles[left] = nums[i];
  }
  return piles.length;
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);

// 二分查找
// [2, 3, 7, 18]
