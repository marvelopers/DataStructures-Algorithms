const step=(n)=>{
  let answer;
  let dy=Array.from({length:n+1},()=>0);
  dy[1]=1;
  dy[2]=2;
  for(let i=0; i<=n; i++){
    dy[i]=dy[i-3]+dy[i-2]+dy[i-1];
  }
  answer=dy[n];  
  return answer;
}