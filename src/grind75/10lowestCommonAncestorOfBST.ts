/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Constraints:

  The number of nodes in the tree is in the range [2, 10⁵].
  -10⁹ <= Node.val <= 10⁹
  All Node.val are unique.
  p != q
  p and q will exist in the BST.

*/


// start LCA as null, and descend into subTrees checking if p and q exist
// if p and q exist, set LCA as the val and bubble up the value


// * Definition for a binary tree node.


import { TreeNode } from './06invertBinaryTree'

function walk(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
  // base case
  // 1. node null
  // 2. all nodes found

  if(root.left && q.val < root.val && p.val < root.val) {
    return walk(root.left, p, q)
  }

  if(root.right && q.val > root.val && p.val > root.val) {
    return walk(root.right, p, q)
  }

  return root
}

function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | null {

  const lca = walk(root, p, q)

  return lca
}
