let arr = [[14,18],[12,15],[15,20],[20,30],[5,14]];

const assignment2 = (arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeline = [];
  let cnt = 0;

  for(let x of arr){
    timeline.push([x[0],'s']);
    timeline.push([x[1],'e']);
  }

  timeline.sort((a,b)=>{
    if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
    else return a[0]-b[0];
  });

  for(let x of timeline){
    if(x[1]==='s') cnt++;
    else cnt--;
    answer=Math.max(answer, cnt);
  }

  return answer;
}