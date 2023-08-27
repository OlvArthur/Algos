/* 
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
  Input: root = [4,2,7,1,3,6,9]
  Output: [4,7,2,9,6,3,1]


Example 2:
  Input: root = [2,1,3]
  Output: [2,3,1]


Example 3:
  Input: root = []
  Output: []

*/

/**
 * Definition for a binary tree node.
 */
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

//          4                                       4
//       /     \                                  /    \
//      2       7
//   /    \   /    \
// 1       3 6      9


// recursively iterate through tree to sub trees reverting it

function invertTree(root: TreeNode | null): TreeNode | null {
  if(!root) return null

  const temp = root.left
  root.left = root.right
  root.right = temp

  
  invertTree(root.right)
  invertTree(root.left)

  return root
}

