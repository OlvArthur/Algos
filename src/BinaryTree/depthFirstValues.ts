import BinaryTree,{ TreeNode } from "./BinaryTree"

const { implementation } = BinaryTree

/* Iterative version */
// const depthFirstValues = (root: TreeNode | null) => {
//   if (root === null) return []

//   const stack: TreeNode[] = [ root ]
//   const results = []
//   // only push and pop allowed for stack

//   while(stack.length > 0) {
//     const current = stack.pop()
    
//     results.push(current?.value)

//     current?.right && stack.push(current.right)
//     current?.left && stack.push(current.left)
//   }

//   return results
// }


/* Recursive version */
const depthFirstValues = (root: TreeNode | null): string[] => {
  if (root === null) return []

  const leftValues = depthFirstValues(root.left)
  const rightValues = depthFirstValues(root.right)

  return [ root.value, ...leftValues, ...rightValues  ]
}



console.log(depthFirstValues(implementation))
