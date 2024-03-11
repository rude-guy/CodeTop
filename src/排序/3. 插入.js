function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let num = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = num;
  }
}

const arr = [12, 1, 23, 5, 4, 6, 2, 1, 5, 9];
insertionSort(arr);
console.log(arr);
