import NumericBinayTree, { TreeNode } from "./NumericBinayTree"

const { implementation } = NumericBinayTree

const maxPathSum = (root: TreeNode | null): number  => {
  // base case 0
  if(!root) return -Infinity
  // base case 1
  if(!root.left && !root.right) return root.value

  const leftChildValue = maxPathSum(root.left)
  const rightChildValue = maxPathSum(root.right)

  return root.value + Math.max(leftChildValue, rightChildValue)
}


console.log(maxPathSum(implementation))
