import BinaryTree, { TreeNode } from './BinaryTree'

const { implementation } = BinaryTree

// const treeIncludes = (root, target) => {
//   // todo
//   if(root === null) return false
  
//   if(root.val === target) return true
  
//   const targetInLeft = treeIncludes(root.left, target)
//   const targetInRight = treeIncludes(root.right, target)
  
//   return targetInLeft || targetInRight
// };

const treeIncludes = (root: TreeNode | null, target: number | string) => {
  if(root === null) return false
  
  if(root.value === target) return true
  const stack = [ root ]
  while(stack.length) {
    const current = stack.pop()
    
    if(current?.value === target) return true
    
    current?.left && stack.push(current.left)
    current?.right && stack.push(current.right)
  }
  
  return false
}


console.log(treeIncludes(implementation, 'k'))
