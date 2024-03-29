
const subset = (n) => {
  let answer;
  let ch = Array.from({length:n+1},()=>0);
  const DFS=(v)=>{
    if(v===n+1) {
      let temp='';
      for(let i=1; i<=n; i++){
        if(ch[i]===1) temp+=i+"";
      }
      if(temp.length>0){
        answer.push(temp.trim());
      }
    }else{
      ch[v]=1;
      DFS(v+1);
      ch[v]=0;
      DFS(v+1);
    }
  }
  return answer;
}
