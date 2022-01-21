const validAnagram = (first, second) => {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let letter of first) {
    // lookup[letter] = (lookup[letter] || 0) + 1;
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let letter of second) {
    if (!lookup[letter]) return false;
    else {
      lookup[letter] -= 1;
    }
  }
  return true;
};
