const bestSum = (targetSum: number, numbers: number[]): number[] | null => {
  if(targetSum < 0) return null
  if(targetSum === 0) return []

  let bestCombination: number[] | null = null
  for(let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = bestSum(remainder,numbers)
    if(remainderResult && (!bestCombination || remainderResult.length < bestCombination.length)) {
        bestCombination = remainderResult
        bestCombination.push(num)
    }
  }

  console.log(bestCombination)

  return bestCombination
}

const optimizedBestSum = (targetSum: number, numbers: number[], memo: { [key: number]: number[] | null } = {}): number[] | null => {
  if(targetSum in memo) return memo[targetSum]
  if(targetSum === 0) return []
  if(targetSum < 0) return null
  
  let shortestCombination: number[] | null = null
  for(let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = optimizedBestSum(remainder,numbers, memo)
    if(remainderCombination !== null) {
      const combination = [...remainderCombination, num]
      if (shortestCombination === null || combination.length  < shortestCombination.length) {
        shortestCombination = combination
      }
    } 
  }
  
  
  memo[targetSum] = shortestCombination

  return shortestCombination
}






// console.log(bestSum(7, [5,3,4,7]))
// console.log(bestSum(8, [2,3,5]))
// console.log(bestSum(8, [1,4,5]))
console.log(optimizedBestSum(8, [1,4,5]))
console.log(optimizedBestSum(100, [1,2, 5, 25]))
