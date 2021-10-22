let arr = [1,2,8,4,9];

const count = (stable, dist) => {
  let cnt=1;
  let ep=stable[0];
  for(let i=1; i<stable.length; i++){
    if(stable[i]-ep>=dist){
      cnt++;
      ep=stable[i];
    }
  }
  return cnt;
}

const decisionTree2 = (c, stable) => {
  let answer ;
  stable.sort((a,b)=> a-b);
  let lt = 1;
  let rt = stable[stable.length-1];

  while(lt<=rt){
    let mid = parseInt((lt+rt)/2);
    if(count(stable,mid)>=c){
      answer=mid;
      lt=mid+1;
    }else{
      rt=mid-1;
    }
  }

  return answer;
}