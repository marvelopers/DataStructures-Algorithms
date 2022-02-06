const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

// 🥳 Time Complexity : O(n log n)
// 🙂 Time Complexity : O(n log n)
// 😭 Time Complexity : O(n^2)
// Space Complexity : O(log n)

const quickSort = (arr, left = 0, right = arr.length + 1) => {
  let pivotIdx = pivot(arr, left, right);
  if (left < right) {
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};
