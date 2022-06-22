import NumericBinarytree ,{ TreeNode } from "./NumericBinayTree"

const { implementation } = NumericBinarytree
// const treeMinValue = (root) => {
//   const queue = [ root ]
//   let smallestValue = Infinity
//   while(queue.length) {
//     const current = queue.shift()
    
//     if(current.val < smallestValue) smallestValue = current.val
    
//     current.left && queue.push(current.left)
//     current.right && queue.push(current.right)
//   }
  
//   return smallestValue
// };

const treeMinValue = (root: TreeNode | null) => {
  let smallestValue = Infinity
  
  if(root === null) return smallestValue
  
  const leftValue = treeMinValue(root.left)
  const rightValue = treeMinValue(root.right)
  smallestValue = Math.min(leftValue, rightValue, root.value)
  
  return smallestValue
}

console.log(treeMinValue(implementation))
