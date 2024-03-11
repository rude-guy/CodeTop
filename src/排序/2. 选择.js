function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const arr = [12, 1, 23, 5, 4, 6, 2, 1, 5, 9];
selectionSort(arr);
console.log(arr);
