// BFS: 레벨 탐색이자, 최단거리 탐색
const BFS=()=>{
  let answer='';
  let queue=[];
  queue.push(1);

  while(queue.length){
    let v=queue.shift();
    answer+=v+' ';
    for(let nv of [v*2, v*2+1]){
      if(nv>7) continue;
      queue.push(nv);
    }
  }

  return answer;
}