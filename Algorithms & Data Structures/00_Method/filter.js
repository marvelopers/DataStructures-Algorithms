const filter = (predicate, thisArg) => {
  let newArr = [];
  for(let i=0; i<array.length; i++){
    if(predicate(array[i], i)) newArr.push(array[i])
  }
  return newArr;
}
