const countConstruct = (targetWord: string, wordBank: string[]): number => {
  if(targetWord === '') return 1


  let waysCount = 0
  for(let word of wordBank) {
    if(targetWord.indexOf(word) === 0) {
      const suffix = targetWord.slice(word.length)
      const numWaysSuffix = countConstruct(suffix, wordBank)
      waysCount += numWaysSuffix
    }
  }

  return waysCount
}

const optimizedCountConstruct = (targetWord: string, wordBank: string[], memo: { [key: string]: number } = {}): number => {
  if(targetWord in memo) return memo[targetWord]
  if(targetWord === '') return 1


  let waysCount = 0
  for(let word of wordBank) {
    if(targetWord.indexOf(word) === 0) {
      const suffix = targetWord.slice(word.length)
      const numWaysSuffix = optimizedCountConstruct(suffix, wordBank, memo)
      waysCount += numWaysSuffix
    }
  }

  memo[targetWord] = waysCount
  return waysCount
}


console.log(optimizedCountConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(optimizedCountConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(optimizedCountConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
console.log(optimizedCountConstruct('enterapotentpot',['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(optimizedCountConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee' ,'eee','eeee','eeeee','eeeeee']))

