let arr=[];
const DFS=(n,arr)=>{
  let answer=0;
  let graph=Array.from(Array(n+1), ()=>Array());
  let ch=Array.from({length:n+1}, ()=>0);

  for(let [a,b] of arr){
    graph[a].push(b); //인접 리스트;
  }

  const DFS=(n)=>{
    if(v===n) answer++;
    else{
      for(let i=0; i<=graph[v].length; i++){
        if(ch[graph[v][i]]===0){
          ch[graph[v][i]]=1;
          DFS(graph[v][i]);
          ch[graph[v][i]]=0;
        }
      }
    }
  }

  ch[1]=1;
  DFS(1);

  return answer;
}