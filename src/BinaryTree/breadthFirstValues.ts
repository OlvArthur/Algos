import BinaryTree,{ TreeNode } from "./BinaryTree"

const { implementation } = BinaryTree

const breadthFirstValues = (root: TreeNode): string[] => {
  if(!root.value) return []
  const queue: TreeNode[] = [ root ]
  const results: string[] = []
  // allowed methods for queue: push and shift

  while(queue.length) {
    const current = queue.shift()
    current?.value && results.push(current.value)

    current?.left && queue.push(current.left)
    current?.right && queue.push(current.right)
  }

  return results
}



console.log(breadthFirstValues(implementation))
