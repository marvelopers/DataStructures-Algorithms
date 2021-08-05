
const arr = [1,2,3,4,5];
const weight = 9;

const findSum = (arr, weight) =>{
  for(const i=0; i< arr.length; i++){
    for(const j=0; j< arr.length; j++){
      if(arr[i]+arr[j] === weight){
        return [i , j];
      }
    }
  }
  return -1;
}