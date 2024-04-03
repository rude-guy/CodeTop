/**
 * 有一堆石头，每块石头的重量都是正整数。
 * 每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 * 如果 x == y，那么两块石头都会被完全粉碎；
 * 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxHeap(stones);
  while (true) {
    const len = maxHeap.getLength();
    if (len <= 1) {
      return maxHeap.remove() || 0;
    }
    const diff = maxHeap.remove() - maxHeap.remove();
    if (diff) {
      maxHeap.insert(diff);
    }
  }
};

class MaxHeap {
  constructor(arr) {
    this.arr = arr;
    this.length = arr.length;
    this.buildMaxHeap();
  }

  buildMaxHeap() {
    for (let i = Math.floor(this.length / 2); i >= 0; i--) {
      this.shiftDown(i, this.length);
    }
  }

  shiftDown(i, len) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let max = i;
    if (left < len && this.arr[left] > this.arr[max]) {
      max = left;
    }
    if (right < len && this.arr[right] > this.arr[max]) {
      max = right;
    }
    if (max !== i) {
      this.swap(i, max);
      this.shiftDown(max, len);
    }
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  shiftUp(i) {
    const parentIdx = this.parent(i);
    if (parentIdx === i) {
      return;
    }
    if (this.arr[parentIdx] < this.arr[i]) {
      this.swap(parentIdx, i);
      this.shiftUp(parentIdx);
    }
  }

  remove() {
    this.swap(0, this.length - 1);
    const num = this.arr.pop();
    this.length = this.arr.length;
    this.shiftDown(0, this.length);
    return num;
  }

  insert(num) {
    this.length = this.arr.push(num);
    this.shiftUp(this.length - 1);
  }

  getLength() {
    return this.length;
  }

  swap(i, j) {
    const temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }
}

const ret = lastStoneWeight([2, 7, 4, 1, 8, 1]);
console.log(ret);

// 输入：[2,7,4,1,8,1]
// 输出：1
// 解释：
// 先选出 7 和 8，得到 1，所以数组转换为 [2,4,1,1,1]，
// 再选出 2 和 4，得到 2，所以数组转换为 [2,1,1,1]，
// 接着是 2 和 1，得到 1，所以数组转换为 [1,1,1]，
// 最后选出 1 和 1，得到 0，最终数组转换为 [1]，这就是最后剩下那块石头的重量。
