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


export function createBalancedTree() {
  const three = new TreeNode('3') 
  const nine = new TreeNode('9')
  const twenty = new TreeNode('20') 
  const fithteen = new TreeNode('15') 
  const seven = new TreeNode('7')
  
  three.left = nine
  three.right = twenty
  twenty.left = fithteen
  twenty.right = seven

  return three
}

export function createUnbalancedTree() {
  const one = new TreeNode('1')
  const two = new TreeNode('2')
  const secondTwo = new TreeNode('2')
  const three = new TreeNode('3')
  const secondThree = new TreeNode('3')
  const four = new TreeNode('4')
  const secondFour = new TreeNode('4')

  one.left = two
  one.right = secondTwo
  two.left = three
  two.right = secondThree
  three.left = four
  three.right = secondFour

  return one
}
