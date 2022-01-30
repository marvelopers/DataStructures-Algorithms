// 🤔
// Time Complexity : O(n^2)
const maxSubarraySum = (arr, num) => {
  if (num > arr.length) return null;
  const max = 0;
  for (let i = 0; i < arr.length - num; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp = arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

// 🥳
// Time Complexity : O(n)
const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum += tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};
