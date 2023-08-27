export function generateRandomArray(size: number = 20) {
  const randomArray = Array(size)
            .fill(0)
            .map(() => Math.floor(50 * Math.random()))
  return randomArray
}
