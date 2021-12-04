const map = (predicate, thisArg) => {
  let newArr = [];
  for(let i=0; i<array.length; i++){
    newArr.push(predicate(array[i], i))
  }
  return newArr;
}
