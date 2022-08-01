import type { LinkNode } from './LinkedList'
import { implementation } from './LinkedList'

// iterative way
const printLinkedList = (head: LinkNode | null) => {
  let current = head
  while(current !== null) {
    console.log(current.val)

    current = current.next
  }
}

const printLinkedListRecursive = (head: LinkNode | null) => {
  if(head === null) return

  console.log(head.val)
  printLinkedListRecursive(head.next)
}

// printLinkedList(implementation)
printLinkedListRecursive(implementation)
