export class LinkNode {
  val: any
  next: LinkNode | null
  
  constructor(val: any, next?: LinkNode | null){
    this.val = val
    this.next = next ?? null
  }
}

const a = new LinkNode('A')
const b = new LinkNode('B')
const c = new LinkNode('C')
const d = new LinkNode('D')

a.next = b
b.next = c
c.next = d

export const implementation = a


