import { ListNode } from './03mergeTwoSortedLists'

const nodeA = new ListNode(3)
const nodeB = new ListNode(2)
const nodeC = new ListNode(0)
const nodeD = new ListNode(-4)

nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD
nodeD.next = nodeB


function hasCycle(head: ListNode | null): boolean {
  if(!head) return false
  
  const seen: Map<number, boolean> = new Map<number, boolean>()

  let curr: ListNode | null  = head
  while(curr) {
    const hasNumber = seen.get(curr.val)
    if(hasNumber) return true

    seen.set(curr.val, true)
    curr = curr.next
  }

  return false
};

console.log(hasCycle(nodeA))
