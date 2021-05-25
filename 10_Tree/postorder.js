import BTS from './binarySearchTree';

function postOrder(node) {
  if (!(node === null)) {
    preOrder(node.left);
    preOrder(node.right);
    putstr(node.show + '');
  }
}