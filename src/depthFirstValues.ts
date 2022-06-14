class TreeNode {
  value: string
  left: TreeNode | null
  right: TreeNode | null

  constructor(val: string) {
    this.value = val
    this.left = null
    this.right = null
  }
}

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


const a = new TreeNode('a')
const b = new TreeNode('b')
const c = new TreeNode('c')
const d = new TreeNode('d')
const e = new TreeNode('e')
const f = new TreeNode('f')
const g = new TreeNode('g')
const h = new TreeNode('h')
const i = new TreeNode('i')
const j = new TreeNode('j')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
d.left = h
d.right = i
e.left = j


console.log(depthFirstValues(a))
