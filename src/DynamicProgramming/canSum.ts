
// brute force
const canSum = (targetSum:number, numbers: number[]): boolean => {
  if(targetSum === 0) return true
  if(targetSum < 0) return false

  return numbers.reduce((acc,num) => acc || canSum(targetSum - num, numbers), false)
}


// optimized memoized function
const optimizedCanSum = (targetSum: number, numbers: number[], memo: { [key: number]: boolean } = {}): boolean => {
  if(targetSum in memo) return memo[targetSum]
  if(targetSum === 0) return true
  if(targetSum < 0) return false

  memo[targetSum] = numbers.reduce((acc,num) => acc || optimizedCanSum(targetSum - num, numbers, memo), false)

  return memo[targetSum]
}

console.log(optimizedCanSum(7, [2,3]))
console.log(optimizedCanSum(7, [5,3,4,7]))
console.log(optimizedCanSum(7, [2,4]))
console.log(optimizedCanSum(8, [2,3,5]))
console.log(optimizedCanSum(300, [7,14]))
