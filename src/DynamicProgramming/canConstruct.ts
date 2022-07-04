const canConstruct = (targetWord: string, wordBank: string[]): Boolean => {
  if(targetWord === '') return true

  for(let word of wordBank) {
    if(targetWord.indexOf(word) === 0) {
      const suffix = targetWord.slice(word.length)
      const suffixResult = canConstruct(suffix, wordBank)
      if(suffixResult === true) {
        return true
      }
    }
  }

  return false
}

const optimizedCanConstruct = (targetWord: string, wordBank: string[], memo: { [key: string]: boolean }= {}): Boolean => {
  if(targetWord in memo) return memo[targetWord]
  if(targetWord === '') return true

  for(let word of wordBank) {
    if(targetWord.indexOf(word) === 0) {
      const suffix = targetWord.slice(word.length)
      const suffixResult = optimizedCanConstruct(suffix, wordBank, memo)
      if(suffixResult === true) {
        memo[targetWord] = true
        return true
      }
    }
  }

  memo[targetWord] = false
  return false
}


console.log(optimizedCanConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(optimizedCanConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
console.log(optimizedCanConstruct('enterapotentpot',['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(optimizedCanConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee' ,'eee','eeee','eeeee','eeeeee']))


