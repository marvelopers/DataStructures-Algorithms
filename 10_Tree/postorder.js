import BTS from './binarySearchTree';

function preOrder(node) {
  if (!(node === null)) {
    putstr(node.show + '');
    preOrder(node.left);
    preOrder(node.right);
  }
}