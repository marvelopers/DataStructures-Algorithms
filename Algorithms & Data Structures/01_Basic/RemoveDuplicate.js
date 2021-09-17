const str='ksekkset';

function solution(str){  
  let answer="";
  for(let i=0; i<str.length; i++){
      if(str.indexOf(str[i])===i) answer+=s[i];
  }
  return answer;
}

function solution(s){  
  let answer;
  //console.log(s.indexOf("student"));
  answer=s.filter((v, i)=>{
      //console.log(v, i);
      if(s.indexOf(v)===i) return v;
  });

  
  return answer;
}
let str=["good", "time", "good", "time", "student"];