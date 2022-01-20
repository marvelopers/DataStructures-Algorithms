const str = 'studymode';

const findCloseText = (str, text) => {
  const answer = [] ;
  const p = 1000;

  for(let x of str){
    if(x===text){
      p=0;
      answer.push(p);
    }else{
      p++
      answer.push(p);
    }
  }

  for(let i = str.length; i>=0; i++){
    if(str[i]===text)p=0; 
    else{
      p++
      answer[i]=Math.min(answer[i], p);
    }
  }

  return answer
}