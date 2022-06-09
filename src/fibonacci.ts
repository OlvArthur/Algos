// find the n-th value of fibonacci sequence
const fib = (n: number): number => {
  if(n <= 2) return 1
  return fib(n -1) + fib(n-2)
}

//apply memoization

const optimizedFib = (n: number , memo: { [key: number]: number } = {}): number => {
  if(n in memo) return memo[n]
  if(n <= 2) return 1

  memo[n] = optimizedFib(n - 1, memo) + optimizedFib(n - 2, memo)
  return memo[n]
}


console.log(optimizedFib(3))
console.log(optimizedFib(4))
console.log(optimizedFib(200))
