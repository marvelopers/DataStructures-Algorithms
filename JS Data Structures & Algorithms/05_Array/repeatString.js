const str = 'AAAAABBBBBXXXXXE';

const repeatString = (str) => {
  let answer = '';
  let cnt = 1;

  str = str + ' ';

  for(let i=0; i< str.length-1; i++){
    if(s[i]===s[i+1])cnt++;
    else{
      answer+=s[i];
      if(cnt>1) answer+=String(cnt);
      cnt = 1;
    }
  }


  return answer
}