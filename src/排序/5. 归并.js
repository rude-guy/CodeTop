function mergeSort(arr) {
  const n = arr.length;
  if (n === 1) return arr;
  const mid = Math.floor(n / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, n)));
}

function merge(arr1, arr2) {
  const ret = [];
  const n1 = arr1.length;
  const n2 = arr2.length;
  let i = 0;
  let j = 0;
  while (true) {
    if (i === n1 && j === n2) {
      break;
    }
    if ((i === n1 && j < n2) || arr1[i] >= arr2[j]) {
      ret.push(arr2[j++]);
    } else if ((j === n2 && i < n1) || arr1[i] < arr2[j]) {
      ret.push(arr1[i++]);
    }
  }
  return ret;
}

const arr = [12, 1, 23, 5, 4, 6, 2, 1, 5, 9];
const ret = mergeSort(arr);
console.log(ret);
