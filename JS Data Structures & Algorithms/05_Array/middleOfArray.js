const middleOfArray = (arr) => arr.length % 2 === 1 ? arr[Math.floor(arr.length/2)] : (arr[arr.length/2] + arr[arr.length/2-1])/2

const medianOfTwoSortedArray = (arr1, arr2, pos) => {

  if(pos <= 0 ){return -1}
  if(pos === 1){return (arr1[0] + arr2[0])/2}
  if(pos === 2){return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1]))/2 }

  let median1 = middleOfArray(arr1);
  let median2 = middleOfArray(arr2);

  if(median1 === median2) { return median1};

  const evenOffset = pos % 2 === 0 ? 1 : 0;
  const offsetMinus = Math.floor(pos / 2) - evenOffset;
  const offsetPlus = pos - Math.floor(pos / 2) - evenOffset;

  if(median1 < median2) { 
    return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.slice(0, -offsetMinus), offsetPlus)
  } else {
    return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.slice(0, -offsetMinus), offsetPlus)
  }
}