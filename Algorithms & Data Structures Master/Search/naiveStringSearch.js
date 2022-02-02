// 🤔
// Time Complexity : O()
// Space Complexity : O()
const naiveStringSearch = (long, stort) => {
  let cnt = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < stort.length; j++) {
      if (stort[j] !== long[i + j]) break;
      if (j === stort.length - 1) count++;
    }
  }
  return cnt;
};
