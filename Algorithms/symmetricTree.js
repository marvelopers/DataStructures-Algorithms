// 성능 95% 메모리 100%

var isSymmetric = function (root) {
  if (root === null) return true;
  return symmetryChecker(root.left, root.right);
}

function symmetryChecker(left, right) {
  if (left == null && right == null) return true;
  if (left == null || right == null) return false;
  if (left.val !== right.val) return false;

  return symmetryChecker(left.left, right.right) &&
    symmetryChecker(left.right, right.left);
}

/////////////////////////////////////////////////////
// The idea is to check whether the tree's left and right subtrees are mirroring each other, we can use preorder traversal:

var isSymmetric = function (root) {
  if (!root) { return true; }

  function isMirror(left, right) {
    if (!left && !right) { return true; }
    if (!left || !right || left.val !== right.val) { return true; }
  }

  return isMirror(root.left, root.right);
}

// DFS

function isMirror(l, r) {
  var leftStack = [l], rightStack = [r];

  while (leftStack.length > 0 || rightStack.length > 0) {
    var left = leftStack.pop(0), right = rightStack.pop();

    if (!left && !left) continue;
    if (!left || !right || left.val !== right.val) return false;

    leftStack.push(left.left); leftStack.push(left.right);
    rightStack.push(right.right); rightStack.push(right.left);

  }

  return true;
}


// BFS

function isMirror(l, r) {
  var leftQueue = [l], rightQueue = [r];

  while (leftQueue.length > 0 || rightQueue.length > 0) {
    var leftQueue = q1.shift(), rightQueue = q2.shift();

    if (!left && !left) continue;
    if (!left || !right || left.val !== right.val) return false;

    leftQueue.push(left.left); leftQueue.push(left.right);
    rightQueue.push(right.right); rightQueue.push(right.left);

  }

  return true;
}
