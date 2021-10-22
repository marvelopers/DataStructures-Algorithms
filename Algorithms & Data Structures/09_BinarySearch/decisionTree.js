let arr = [1,2,3,4,5,6,7,8,8]

const count = (arr, capacity) =>{
  let cnt=1, sum=0;

  for(let x of arr){
    if(sum+x>capacity){
      cnt++;
      sum=x;
    }
    else sum+=x;
  }
  return cnt;
}

const decisionTree = (m, arr) => {
  let answer ;

  let lt = Math.max(...arr);
  let rt = arr.reduce((a,b) => a+b,0);

  while(lt<rt){
    let mid = parseInt((lt+rt)/2);
    if(count(arr,mid)<=m) {
      answer=mid;
      rt= mid-1;
    }
    else lt = mid+1;
  }

  return answer;
}