// 🤔
const nFactorial = (num) => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};

// 🥳 Recursion
const factorial = (num) => (num === 1 ? 1 : num * factorial(num - 1));
