// What are the number of possible paths from the top left to the bottom right corner of a grid?
// you can only move down or right
const gridTraveller = (n: number,m: number): number => {
  if(n === 1 && m === 1) return 1
  if(n === 0 || m === 0) return 0

  return gridTraveller(n - 1,m) + gridTraveller(n, m - 1)
}


const optimizedGridTraveller = (n: number, m: number, memo: { [key: string]: number } = {}): number => {
  const key = `${n},${m}`
  const inverseKey = `${m},${n}`

  if(key in memo) return memo[key]
  if(inverseKey in memo) return memo[inverseKey]
  
  if(n === 1 && m === 1) return 1
  if(n === 0 || m === 0) return 0

  memo[key] = optimizedGridTraveller(n - 1, m, memo) + optimizedGridTraveller(n, m - 1, memo)
  return memo[key]
}

console.log(optimizedGridTraveller(1,1)) // 1
console.log(optimizedGridTraveller(2,3)) // 3
console.log(optimizedGridTraveller(3,2)) // 3
console.log(optimizedGridTraveller(3,3)) // 6
console.log(optimizedGridTraveller(18,18)) // 2333606220
