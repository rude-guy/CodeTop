function buildMaxHeap(arr) {
  const len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapify(arr, i) {
  const len = arr.length;
  // 左节点
  let left = 2 * i + 1;
  // 右节点
  let right = 2 * i + 2;
  let max = i;
  if (left < len && arr[left] > arr[max]) {
    max = left;
  }
  if (right < len && arr[right] > arr[max]) {
    max = right;
  }

  if (max !== i) {
    swap(arr, i, max);
    heapify(arr, max);
  }
}

//* 堆排序 */
function heapSort(arr) {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i);
    // 堆首（最大值）和堆尾互换；
    heapify(arr, 0);
  }
}

const arr = [5, 2, 7, 3, 6, 1, 4];
heapSort(arr);

//     5
//   2   7
// 3 6  1 4

// i = 1  //  [5, 6, 7, 3, 2, 1, 4];
// i = 0  //  [7, 6, 5, 3, 2, 1, 4];

//     7
//   6   5
// 3 2  1 4

// 堆首（最大值）和堆尾互换；
// i = 6  // [6, 4, 5, 3, 2, 1, 7];
// i = 5  // [5, 4, 1, 3, 2, 6, 7];
// i = 4  // [4, 2, 1, 3, 5, 6, 7];
// i = 3  // [3, 2, 1, 4, 5, 6, 7];
// i = 2  // [1, 2, 3, 4, 5, 6, 7];
// i = 1  // [2, 1, 3, 4, 4, 6, 7];
// i = 0  // [1, 2, 3, 4, 5, 6, 7];
