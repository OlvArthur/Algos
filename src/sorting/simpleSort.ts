import { generateRandomArray } from "../helpers/generateRandomArray"

const array = generateRandomArray()

function sortArray(arr: number[]): number[] {
  for(let i = 0; i<arr.length; i++) {
    for(let j = i+1; j<arr.length; j++) {
      if(arr[j]<arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }

  return arr
}

console.log(array)
console.log(sortArray(array))
