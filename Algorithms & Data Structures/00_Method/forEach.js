const forEach = (predicate, thisArg) => {
  for(let i=0; i<array.length; i++){
    predicate(array[i], i, array);
  }
}
