const arr = [1,2,3,4,5,6,7]

function solution (arr) {
  // let answer;
  // let min = Number.MAX_SAFE_INTEGER;

  // for(let i=0; i<arr.length; i++){
  //   if(arr[i]<min) min=arr[i];
  // }

  // answer=min;

  // let answer = Math.min.apply(null, arr);
  let answer = Math.min(...arr);

  return answer;
}