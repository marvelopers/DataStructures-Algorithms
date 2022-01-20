// 진법 변환 알고리즘

function mulBase(num, base) {
  const s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0) {
    const converted = "";
    while (s.length() > 0) {
      converted += s.pop();
    }
    return converted;
  }
}

const num = 32;
const base = 2;

const newNum = mulBase(num, base);


// 회문 : 내 이름은 이효리, 거꾸로해도 이효리

function isPalindrome(word) {
  const s = new Stack();
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }
  const rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word === rword) {
    return true;
  } else {
    return false;
  }
}

// 재귀 : 팩토리얼 구현

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function stackFactorial(n) {
  const s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  const product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

