const twoSum = (numbers: number[], target: number): number[] => {
  const memo:{ [key: number]:number } = {}
  
  const indexes:number[] = []
  
  for(let [index, num] of numbers.entries()) {
      const suplement = target - num
      if(num in memo) {
          return  [index, memo[num]]
      }
      
      memo[suplement] = index
  }
  
  return []
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
