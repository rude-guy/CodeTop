/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const n = intervals.length;
  if (n === 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const ret = [intervals[0]];
  for (let i = 1; i < n; i++) {
    const [start1, end1] = ret[ret.length - 1];
    const [start2, end2] = intervals[i];
    if (end1 < start2) {
      // 无法合并
      ret.push(intervals[i]);
    } else {
      if (end1 >= end2) {
        ret[ret.length - 1] = [start1, end1];
      } else {
        ret[ret.length - 1] = [start1, end2];
      }
    }
  }
  return ret;
};

const ret = merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]); // [[1,6],[8,10],[15,18]]

console.log(ret);

// merge  => end1 > start1

// start1 or start 2
// start1 <= start2  => start1

// end1 or end2
// end1 > end2 end1
// end1 <= end2 end2
