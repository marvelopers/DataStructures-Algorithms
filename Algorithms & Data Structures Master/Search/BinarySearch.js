// 🥳
// Divide and Conquer
// Time Complexity : O(log n)
const BinarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== value && start <= end) {
    if (value < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === value ? mid : -1;
};
