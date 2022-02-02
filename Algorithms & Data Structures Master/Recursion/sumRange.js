const sumRange = (num) => (num === 1 ? 1 : num + sumRange(num - 1));
