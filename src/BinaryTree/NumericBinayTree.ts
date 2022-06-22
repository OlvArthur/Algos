export class TreeNode {
  value: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val: number) {
    this.value = val
    this.left = null
    this.right = null
  }
}


const a = new TreeNode(3)
const b = new TreeNode(5)
const c = new TreeNode(9)
const d = new TreeNode(3)
const e = new TreeNode(6)
const f = new TreeNode(5)
const g = new TreeNode(7)
const h = new TreeNode(1)
const i = new TreeNode(4)
const j = new TreeNode(2)

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
