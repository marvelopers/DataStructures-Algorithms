let ps=[10,25,15,6,7];
let pt=[5,12,8,3,4];
const maximumScore=(m,ps,pt)=>{
  let answer=Number.MIN_SAFE_INTEGER;
  let n=ps.length;
  const DFS=(l,sum,time)=>{
    if(l===n){
      if(time>m)return;
      answer=Math.max(answer,sum)
    }else{
      DFS(l+1,sum+ps[l],time+pt[l]);
      DFS(l+1,sum,time);
    }
  }
  DFS(0,0,0);
  return answer;
}