/**
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
 * 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  // 是否存在环?
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // 环的起点？
  let pre1 = 0;
  let pre2 = slow;
  while (pre1 !== pre2) {
    pre1 = nums[pre1];
    pre2 = nums[pre2];
  }
  return pre1;
};

findDuplicate([3, 1, 3, 4, 2]);

// [1,3,4,2,2]  2
// 1 => 1
// 0 => 1
// 1 = > 2
// 3 =>

// 0 => 1 => 3 => 2 => 4 => 2 => 4

//  1 => 0 => 2 => 1
