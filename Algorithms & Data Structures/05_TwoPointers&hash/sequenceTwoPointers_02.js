const a=[1,3,1,2,3]

const sequence=(m, arr)=>{
  let answer=0; lt=0; sum=0;

  for( let rt=0; rt<arr.length; rt++){
    sum+=arr[rt];
    while(sum>m){
      num-=arr[lt++]
    }
    answer+=(rt-lt+1)
  }
  return answer;
}