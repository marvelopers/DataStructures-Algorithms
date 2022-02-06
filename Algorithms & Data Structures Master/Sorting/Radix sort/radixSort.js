const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const digitCount = (num) =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

// n : length of array
// k : number of digits(average)

// 🥳 Time Complexity : O(nk)
// 🙂 Time Complexity : O(nk)
// 😭 Time Complexity : O(nk)
// Space Complexity : O(n+k)

const radixSort = (arr) => {
  let maxDigits = mostDigits(arr);

  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};
