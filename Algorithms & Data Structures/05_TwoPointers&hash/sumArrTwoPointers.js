const a=[1,3,5]
const b=[2,3,6,7,9]

const sumArr=(arr1, arr2)=>{
  let answer=[];
  let a = arr1.length;
  let b = arr2.length;

  let p1, p2 = 0;

  while(p1<a && p2<b){
    if(arr1[p1]<=arr2[p2])answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  while(p1<a) answer.push(arr1[p1++]);
  while(p2<a) answer.push(arr2[p2++]);

  return answer;
}