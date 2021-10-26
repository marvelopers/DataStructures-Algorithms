let arr=[1,2,5];
const cutEdgeTech = (m,arr) => {
  let answer=Number.MAX_SAFE_INTEGER;
  let n=arr.length;

  const DFS=(l,sum)=>{
    if(sum>m)return;
    if(l>=answer)return;
    if(sum===m){
      answer=Math.min(answer, l);
    }else{
      for(let i=0; i<n; i++){
        DFS(l+1, sum+arr[i]);
      }
    }
  }
  DFS();

  return answer;
}