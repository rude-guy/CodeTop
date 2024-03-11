/**
 * 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 贪心算法 跳跃区间寻找最大区间即可
var canJump = function (nums) {
  let n = nums.length;
  let farthest = 0;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] + i > farthest) {
      farthest = nums[i] + i;
    }
    if (farthest >= n - 1) {
      return true;
    }
    if (farthest <= i) {
      return false;
    }
  }
  return true;
};

const ret = canJump([2, 3, 1, 1, 4]);
console.log(ret);
// [2,3,1,1,4]  true
// [3,2,1,0,4] false

// 0 => 0 + 2
// 1 => 1 + 3  // true

// 0 => 0 + 3
// 1 => 1 + 2
// 2 => 2 + 1
// 3 => 0 + 3 == i // false

// var canJump = function (nums) {
//   const n = nums.length;
//   const memo = new Set();
//   function dp(i) {
//     if (i >= n - 1) {
//       throw new Error('find');
//     }
//     const num = nums[i];
//     for (let j = 1; j <= num; j++) {
//       if (memo.has(`${i + j}`)) {
//         continue;
//       }
//       dp(i + j);
//       memo.add(`${i + j}`);
//     }
//     return false;
//   }
//   try {
//     dp(0);
//   } catch {
//     return true;
//   }
//   return false;
// };
