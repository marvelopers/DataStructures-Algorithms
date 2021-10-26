let arr=[81,58,42,33,61]
const maximum=(c, arr)=>{
  let answer=Number.MIN_SAFE_INTEGER;
  let n=arr.length
  const DFS=(l, sum)=>{
    if(sum>c)return;
    if(l===n){
      answer=Math.max(answer, sum);
    }else{
      DFS(l+1, sum+arr[l]);
      DFS(l+1, sum);
    }
  }
  DFS(0,0);
  return answer;
}