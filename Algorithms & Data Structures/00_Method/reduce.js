const reduce = (predicate, value) => {
  let result = value;

  for(let i=0; i<array.length; i++){
    result = predicate(result, array[i]);
  }
  return result;
}