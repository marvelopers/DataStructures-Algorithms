let arr=[3,6,9];
const permutation =(m,arr) => {
  let answer=[];
  let n= arr.length;
  let ch=Array.from({length:n}, ()=>0);
  let temp=Array.from({length:m}, ()=>0);

  const DFS=(l)=>{
    if(l===m){
      answer.push(temp.slice());
    }else{
      for(let i=0; i<n; i++){
        if(ch[i]===0){
          ch[i]=1;
          temp[l]=arr[i];
          DFS(l+1);
          ch[i]=0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}