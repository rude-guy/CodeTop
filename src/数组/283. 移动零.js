/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pos = -1;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (pos === -1) {
        pos = i;
      }
      continue;
    }
    if (pos !== -1) {
      nums[pos++] = nums[i];
      nums[i] = 0;
    }
  }
};

moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]

// i = 1; pos = 0 => [1, 0, 0, 3, 12] post = 1
// i = 2; post = 1 => [1, 0, 0, 3, 12]
// i = 3 post = 1 => [1, 3, 0, 0, 12] post = 2
// i = 4 post = 2 => [1,, 3, 12, 0, 0]
