import { implementation } from './LinkedList'
import type { LinkNode } from './LinkedList'


// const reverseList = (head: LinkNode | null, prev: LinkNode | null = null): LinkNode | null => {
//   if(head === null) return null

//   const next = head.next
//   head.next = prev
//   return reverseList(next, head)
// }


const reverseList = (head: LinkNode | null): LinkNode | null => {
  if(head === null) return null

  let prev = null
  let current: LinkNode | null = head
  let next = null

  while(current !== null) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}
