let bar = '()(((()())(())()))(())'; 

const cutBar = (str) => {
  let answer = 0;
  let stack = [];

  for(let i ; i<str.length; i++) {
    if(str[i]==='(')stack.push(str[i]);
    else{
      stack.pop(); // 레이저 괄호를 뺍니다.
      if(s[i-1]==='(') answer+= stack.length;
      else answer+=1;
    }
  }

  return answer;
}
