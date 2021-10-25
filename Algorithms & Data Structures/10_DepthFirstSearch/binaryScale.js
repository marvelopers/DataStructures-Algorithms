const binaryScale = (n) => {
  let answer='';
  const DFS = () => {
    if(n===0)return ;
    else {
      DFS(parseInt(n/2));
      answer+=String(n%2);
    }
  }
  DFS(n);
  return answer;
}
