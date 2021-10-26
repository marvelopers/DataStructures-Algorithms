let arr
const doublePermutation = (n,c) =>{
  let answer=[];
  let temp = Array.from({length:c},()=>0);
  const DFS =(l) =>{
    if(l===c){
      answer.push(temp.slice());
    }else{
      for(let i=0; i<=n; i++){
        temp[l]=i;
        DFS(l+1);
      }
    }
  }
  DFS(0);
  return answer;
}