/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const total = m + n;
  if (total % 2 === 0) {
    const k = Math.floor(total / 2);
    return (getKthElement(nums1, nums2, k) + getKthElement(nums1, nums2, k + 1)) / 2;
  } else {
    const k = Math.floor(total / 2);
    return getKthElement(nums1, nums2, k + 1);
  }
};

// 寻找第k个数
function getKthElement(nums1, nums2, k) {
  const len1 = nums1.length,
    len2 = nums2.length;

  let index1 = 0;
  let index2 = 0;
  while (true) {
    /** base case */
    // A数组为0
    if (index1 === len1) {
      return nums2[index2 + k - 1];
    }
    // B数组为0
    if (index2 === len2) {
      return nums1[index1 + k - 1];
    }
    // k === 1
    if (k === 1) {
      return Math.min(nums1[index1], nums2[index2]);
    }
    /** 正常情况 */
    const half = (k / 2) >> 0;
    const newIndex1 = Math.min(half + index1, len1) - 1;
    const newIndex2 = Math.min(half + index2, len2) - 1;
    if (nums1[newIndex1] <= nums2[newIndex2]) {
      // A[2] => len = 3  所以需要 + 1
      k -= newIndex1 - index1 + 1;
      // 指向下一个位
      index1 = newIndex1 + 1;
    } else {
      k -= newIndex2 - index2 + 1;
      index2 = newIndex2 + 1;
    }
  }
}

const ret = findMedianSortedArrays([2], []);
console.log(ret);

// 输入：nums1 = [1, 2, 4, 5, 6, 7], nums2 = [8, 9, 10, 11, 12, 13]
// 输出：
// 解释：合并数组 = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] ，中位数 (7 + 8) / 2 = 7.5

// A: 1 3 4 9
// B: 1 2 3 4 5 6 7 8 9
// (k / 2 - 1) + (k / 2 -1) <= k - 2
// k / 2 + k / 2 <= k

// k + 1 表示要删除的位数数组从0开始
// k = (4 + 9) / 2 + 1 = 6;

// A[k / 2 - 1] = A[2] = 4
// B[2] = 3
// A[2] > B[2]
// A:  1 3 4 9
// B: [1 2 3] 4 5 6 7 8 9
// k = k - k / 2 = 4

// A[k / 2 - 1] = A[1] = 3
// B[1] = 4
// A[1] < b[1]
// A: [1 3] 4 9
// B: [1 2 3] 4 5 6 7 8 9
// k = k - k / 2 = 2

// A[k / 2 - 1] = A[1] = 4
// B[1] = 4
// A[1] = B[1]
// A: [1 3 4] 9
// B: [1 2 3] 4 5 6 7 8 9
// k = k - k / 2 = 1

// A[k / 2 - 1] = A[0] = 9
// B[0] = 4
// A[0] > B[0]
// A: [1 3 4] 9
// B: [1 2 3 4] 5 6 7 8 9
// k === 1 ? 4 为中位数

// base case

// 如果A[k / 2 - 1] 或 B[k / 2 - 1]越界 k - 越界数组长度
// 如果A或者B数组长度为0，那么另一个数组第K个为中位数
// 如果 k = 1, 那么数组首位为比较大小
