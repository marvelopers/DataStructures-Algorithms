// 🤔
// Time Complexity : O(n)
const search = (arr, value) => {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

// 🥳
// Time Complexity : O(log(n))
// Binary Search
const search = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let curr = arr[middle];

    if (arr[middle] < value) {
      min = middle + 1;
    } else if (arr[middle] > value) {
      min = middle - 1;
    } else {
      middle;
    }
  }
  return -1;
};
