// Javascript Dynamic Programming
const climbStairs = function (n) {
  const result = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
}

let climbStairs = function (n) {
  let arr = [];
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

//FIbbo javascript solution
const climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let curNum = 2;
  let prevNum = 1;

  for (let i = 3; i <= n; i++) {
    curNum = curNum + prevNum;
    prevNum = curNum - prevNum;
  }

  return curNum;
};