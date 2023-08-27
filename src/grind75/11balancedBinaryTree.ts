import { createBalancedTree, createUnbalancedTree, TreeNode } from "../BinaryTree/BinaryTree";


/*
Given a binary tree, determine if it is 
height-balanced
.

Example 1:
                        3
                    /      \
                  9        20
                          /   \
                        15     7

  Input: root = [3,9,20,null,null,15,7]
  Output: true


Example 2:
  

  Input: root = [1,2,2,3,3,null,null,4,4]
  Output: false

*/



const balancedTree = createBalancedTree()
const unbalancedTree = createUnbalancedTree()

function isBalanced(root: TreeNode | null): boolean {
  if(root === null) return true

  
  const leftTreeHeight = getHeight(root.left)
  const rightTreeHeight = getHeight(root.right)
  if(Math.abs(leftTreeHeight - rightTreeHeight) > 1) return false

  return isBalanced(root.left) && isBalanced(root.right)
}

function getHeight(root: TreeNode | null): number {
  if(root === null) return -1

  const leftTreeHeight = getHeight(root.left)
  const rightTreeHeight = getHeight(root.right)

  return Math.max(leftTreeHeight, rightTreeHeight) + 1
}


console.log(isBalanced(balancedTree))
console.log(isBalanced(unbalancedTree))
