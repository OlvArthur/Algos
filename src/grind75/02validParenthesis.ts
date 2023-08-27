/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

  Input: s = "()"
  Output: true

Example 2:

    Input: s = "()[]{}"
    Output: true

Example 3:

Input: s = "(]"
Output: false
 

Constraints:

  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'.

*/


interface IBrackets {
  '(': string
  '{': string
  '[': string
}

// iterate through bracket
//    check if bracket is opening bracket
        // if it is, add corresponding closing bracket to stack
        // else check if stack is empty, if it is, return false
        // if stack is not empty, check closing bracket with last position in stack
          // if matching, pop it, else return false

          // return true if stack is empty, false if it is not



function isValid(word: string): boolean {
  if(word.trim() === '') return true
  
  const brackets: IBrackets = {
    '(': ')',
    '{': '}',
    '[':']'
  }


  const stack = []
  for(let char of word) {
    if(char in brackets) {
      stack.push(brackets[char as keyof IBrackets])
      continue
    }

    if(!stack.length) return false

    if(stack[stack.length - 1] === char) stack.pop()
  }

  return !stack.length
}

console.log(isValid(''))
console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('({[]})'))


// n => length of string
// time complexity O(n)
// space complexity O(n)
