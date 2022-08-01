import { LinkNode, implementation } from './LinkedList'

const store = (head: LinkNode | null, values: any[] = []) => {

  if(head === null) return

  values.push(head.val)
  store(head.next, values)

  return values
}

console.log(store(implementation))
