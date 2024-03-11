/**
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [binarySearchLeft(nums, target), binarySearchRight(nums, target)];
};

function binarySearchRight(nums, target) {
  let left = 0;
  right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return nums[right] === target ? right : -1;
}

function binarySearchLeft(nums, target) {
  let left = 0;
  right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left] === target ? left : -1;
}

const nums = [5, 7, 7, 8, 8, 10],
  target = 7;

const ret = binarySearchRight(nums, target);
console.log(ret);
// [3,4]
