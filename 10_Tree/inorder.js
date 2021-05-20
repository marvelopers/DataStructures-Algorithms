import BTS from './binarySearchTree';

function inOrder(node) {
  if (!(node === null)) {
    inOrder(node.left);
    putStr(node.show() + '');
    inOrder(node.right);
  }
}

var nums = new BTS();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);