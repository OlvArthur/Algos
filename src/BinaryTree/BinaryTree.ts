export class TreeNode {
  value: string
  left: TreeNode | null
  right: TreeNode | null

  constructor(val: string) {
    this.value = val
    this.left = null
    this.right = null
  }
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


            //             a
            //           /   \
            //         b       c
            //       /   \    /  \
            //     d      e  f    g
            //   /   \   /  
            // h      i j   


export default {
  implementation: a
}
