/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "./03mergeTwoSortedLists";

function reverse(previousNode: ListNode | null, head: ListNode | null): ListNode | null {
  if(!head) return null

  if(!head.next){
    head.next = previousNode
    return head
  } 

  const nextNode = head.next
  head.next = previousNode
  const newHead = reverse(head, nextNode)

  return newHead
}

function reverseList(head: ListNode | null): ListNode | null {
  const newHead = reverse(null, head)

  return newHead
};
