let arr = [[1,4],[2,3],[3,5],[4,6],[5,7]];

const assignment = (arr) => {
  let answer = 0;
  let et = 0;

  arr.sort((a,b)=>{
    if(a[1]===b[1]) return a[0]-b[0];
    else return a[1]-b[1];
  })

  for(let x of arr){
    if(x[0]>=et){
      answer++;
      et=x[1];
    }
  }

  return answer;
}