function quickSort(arr, l = 0, r = arr.length - 1) {
  if (l < r) {
    const base = arr[l];
    let left = l;
    let right = r;

    while (left < right) {
      while (left < right && arr[right] >= base) {
        right--;
      }
      arr[left] = arr[right];
      while (left < right && arr[left] <= base) {
        left++;
      }
      arr[right] = arr[left];
    }
    arr[left] = base;
    quickSort(arr, l, left - 1);
    quickSort(arr, left + 1, right);
  }
}

const arr = [12, 1, 23, 5, 4, 6, 2, 1, 5, 9];
quickSort(arr);
console.log(arr);
