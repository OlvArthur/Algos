const howSum = (targetSum: number, numbers: number[]): number[] | null => {
  if(targetSum < 0) return null
  if(targetSum === 0) return []

  for(let num of numbers) {
    const remainder = targetSum - num
    const howSumResult = howSum(remainder, numbers)
    if(howSumResult) {
      howSumResult.push(num)
      return howSumResult
    }
  }

  return null
}

const optimizedHowSum = (targetSum: number, numbers: number[], memo: { [key: number]: number[] | null } = {}): number[] | null => {
  if(targetSum in memo) return memo[targetSum]
  if(targetSum < 0 ) return null
  if(targetSum === 0) return []

  for(let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = optimizedHowSum(remainder, numbers, memo)
    if(remainderResult) {
      remainderResult.push(num)
      memo[targetSum] = remainderResult
      return memo[targetSum]
    }
  }

  memo[targetSum] = null
  return null
}

console.log(optimizedHowSum(7, [2,3]))
console.log(optimizedHowSum(7, [5,3,4,7]))
console.log(optimizedHowSum(7, [2,4]))
console.log(optimizedHowSum(8, [2,3,5]))
console.log(optimizedHowSum(300, [7,14]))

