const arraySlice = (arr, beginIndex, endIndex)=>{
  if(!beginIndex && !endIndex) {return arr};

  let partArr = [];

  if(!endIndex) endIndex = arr.length;
  
  for(const i = beginIndex; i< endIndex ; i++) {
    partArr.push(arr[i])
  }

  return partArr;
} 

arraySlice([1,2,3,4,5], 1,2);
