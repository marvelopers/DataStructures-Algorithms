const collectOddValues = (arr) => {
  let result = [];

  // 🥳 helper recursion
  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) return result.push(helperInput[0]);
    helper(helperInput.slice(1));
  };
  helper(arr);
  return result;
};

// 🥳 pure recursion
const collectOddValues = (arr) => {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) return newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
};
