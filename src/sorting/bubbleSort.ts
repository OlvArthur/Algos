import { generateRandomArray } from "../helpers/generateRandomArray"

const bubbleSortArray = generateRandomArray()

function bubbleSort(arr: number[]): number[] {

  for(let i = arr.length - 1; i>= 0; i--) {
    for(let j=0 ; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}

console.log(bubbleSortArray)
console.log(bubbleSort(bubbleSortArray))

// n => length of array
// time complexity O (n²)
// space complexity O(1)
