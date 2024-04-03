/**
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  buildMaxHeap(nums);
  let len = nums.length;
  let originLen = nums.length;
  for (let i = originLen - 1; i >= originLen + 1 - k; i--) {
    swap(nums, 0, i);
    len--;
    maxHeap(nums, 0, len);
  }
  return nums[0];
};

function buildMaxHeap(arr) {
  let len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    maxHeap(arr, i, len);
  }
}

function maxHeap(arr, i, len) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let max = i;
  if (left < len && arr[left] > arr[max]) {
    max = left;
  }
  if (right < len && arr[right] > arr[max]) {
    max = right;
  }

  if (max !== i) {
    swap(arr, i, max);
    maxHeap(arr, max, len);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const nums = [3, 2, 1, 5, 6, 4],
  k = 2;
const ret = findKthLargest(nums, k);
console.log(ret);

//     3
//   2   3
//  1 2  4 5
// 5 6

//    6
//  5   5
// 3 2 4 2
//2 1
