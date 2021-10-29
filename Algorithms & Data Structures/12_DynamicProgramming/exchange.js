// 냅색 알고리즘 
let arr=[1,2,5];
const exchange=(m,arr)=>{
  let answer=0;
  let dy=Array.from({length: m+1},()=>1000);

  for(let i=0; i<arr.length; i++){
    for(let j=arr[i]; j<=m; j++){
      dy[j]=Math.min(dy[i],dy[j-arr[i]]+1);
    }
  }

  answer=dy[m];
  
  return answer;
}