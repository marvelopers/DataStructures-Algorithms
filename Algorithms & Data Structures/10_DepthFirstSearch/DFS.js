const DFS = (n) => {
  let answer;
  const _DFS=(n)=>{
    if(n>7)return 
    else{
      console.log(n);//전위순회
      _DFS(n*2);
      //중위순회 console.log(n);
      _DFS(n*2+1);
      //후위순회 console.log(n);
    }
  }
  _DFS(n);
  return answer;
}
