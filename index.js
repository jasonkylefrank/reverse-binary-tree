/**
 * This challenge is to "reverse" (or "invert") a binary tree.
 * That means that we want to swap the "left" and "right" child of each
 * node in the tree.
 * I got the idea for this challenge from this part of a YouTube video: https://youtu.be/vHKzIPwWQkg?t=1282
 * It shows a diagram of the "before" and "after" state of the tree for reference.
 * Note that my solution may look quite a bit different from the result in that
 * video because I stopped watching it once I saw the challenge (so I could just 
 * solve it myself).
 */



function swapChildren(node) {
  const prevLeft = node.left;
  node.left = node.right;
  node.right = prevLeft;
}

function reverseBinaryTree(head) {
  const node = head;
  swapChildren(node);

  if (node.left) {
    reverseBinaryTree(node.left);
  }
  if (node.right) {
    reverseBinaryTree(node.right);
  }
  return;
}


function insertIntoTree(node, value) {
  if (value <= node.value) {
    if (node.left) {
      insertIntoTree(node.left, value);
    } else {
      node.left = new Node(value);
    }
  } else {
    if (node.right) {
      insertIntoTree(node.right, value);
    } else {
      node.right = new Node(value);
    }
  }
}

class Node {
  constructor(value) {
    this.left;
    this.right;
    this.value = value;
  }
}

const head = new Node(5);
insertIntoTree(head, 3);
insertIntoTree(head, 4);
insertIntoTree(head, 1);
insertIntoTree(head, -1);
insertIntoTree(head, 1);
insertIntoTree(head, 7);
insertIntoTree(head, 6);
insertIntoTree(head, 9);

console.log(head);
console.log("About to reverse the tree.");
reverseBinaryTree(head);
console.log(head);