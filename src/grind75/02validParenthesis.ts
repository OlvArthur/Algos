const isValid = (word: string): boolean => {
  const stack = word.split('')

  const brackets = {
    ')':'(' ,
    '}': '{',
    ']':'['
  }


  while(stack.length > 0) {
    const firstBracket = stack.shift()
    const secondBracket = stack.shift()

    if(brackets[secondBracket as keyof typeof brackets] !== firstBracket) {
      return false
    }
  }

  return true
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
