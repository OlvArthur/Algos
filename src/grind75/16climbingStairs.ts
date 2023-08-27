// h => height, N => number, 2^n <= h <= 2^(n/2)

function walk(stepHeight: number, stairsHeight: number, memo: Map<number, number>): number {
  // base cases
  const memoizedValue = memo.get(stepHeight)
  if(memoizedValue) {
    return memoizedValue
  }

  if(stepHeight === stairsHeight) return 1

  if(stepHeight > stairsHeight) return 0

  const leftTreePathsCount = walk(stepHeight + 1, stairsHeight, memo)
  const rightTreePathsCount = walk(stepHeight + 2, stairsHeight, memo)

  memo.set(stepHeight, leftTreePathsCount + rightTreePathsCount)

  return leftTreePathsCount + rightTreePathsCount
}

function climbStairs(stairsHeight: number): number {
  const memo = new Map<number, number>()

  const pathsCount = walk(0, stairsHeight, memo)

  return pathsCount
};


// function climbStairs(stairsHeight: number): number {
//   if(stairsHeight === 0) return 0

//   let pathCount = 0
//   for(let i =0; i < stairsHeight; i++) {
//     const y = (3 - i)/2

//     if((i + 2*y) === stairsHeight) pathCount++
//   }

//   for(let i=0; i< stairsHeight/2; i++) {
//     const x = 3 - 2*i

//     if((x + 2*i) === stairsHeight) pathCount++
//   }

//   return pathCount
// }

// console.log(climbStairs(3))
