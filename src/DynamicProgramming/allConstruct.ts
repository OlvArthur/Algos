const allConstruct = (targetWord: string, wordBank: string[]): string[][] => {
  if(targetWord === '') return [[]]

  const resultWays = []
  for(let word of wordBank) {
    if(targetWord.indexOf(word) === 0) {
      const suffix = targetWord.slice(word.length)
      const suffixWays = allConstruct(suffix, wordBank)
      const targetWays = suffixWays.map(way => [word, ...way])
      resultWays.push(...targetWays)
    }
  }

  return resultWays
}


console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(allConstruct('enterapotentpot',['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee' ,'eee','eeee','eeeee','eeeeee']))
