import BinaryTree, { TreeNode } from "./NumericBinayTree";

const { implementation } = BinaryTree

// const treeSum = (root) => {
//   if(root === null) return 0
  
//   let sum = 0
//   const queue = [ root ]
//   while(queue.length) {
//     const current = queue.shift()
    
//     sum += current.val
    
//     current.left && queue.push(current.left)
//     current.right && queue.push(current.right)
//   }
  
//   return sum
// };

const treeSum = (root: TreeNode | null): number => {
  if(root === null) return 0
  
  return treeSum(root.left) + treeSum(root.right) + Number(root.value)
}

console.log(treeSum(implementation))
