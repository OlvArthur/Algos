interface IBrackets {
  '(': string
  '{': string
  '[': string
}

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
