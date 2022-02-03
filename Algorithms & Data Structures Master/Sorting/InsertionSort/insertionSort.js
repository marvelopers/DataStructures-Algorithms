const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const insertionSort = (arr) => {
  for (let i = 1; i < array.length; i++) {
    let currVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currVal;
  }

  return arr;
};
