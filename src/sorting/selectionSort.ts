import { generateRandomArray } from "../helpers/generateRandomArray"

const selectionSortarray = generateRandomArray()

function selectionSort(arr: number[]): number[] {
  for(let i = 0; i<arr.length; i++) {
    let minSubsequentValueIndex = i
    for(let j = i+1; j<arr.length; j++) {
      if(arr[j]<arr[minSubsequentValueIndex]) {
        minSubsequentValueIndex = j 
      }
    }

    const tempIndex = arr[i]
    arr[i] = arr[minSubsequentValueIndex]
    arr[minSubsequentValueIndex] = tempIndex
  }

  return arr
}

console.log(selectionSortarray)
console.log(selectionSort(selectionSortarray))

// n => array length
// time complexity O(n²)
