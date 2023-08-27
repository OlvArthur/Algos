import { generateRandomArray } from "../helpers/generateRandomArray";

const insertionSortArray = generateRandomArray()


function insertionSort(arr: number[]): number[] {
  const sortedArray = []
  for(let number of arr) {
    sortedArray.push(number)
    for (let i = sortedArray.length - 1; i > 0; i--) {
      if(sortedArray[i] < sortedArray[i - 1]) {
        [sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]]
        continue
      }
      break
    }
  }

  return sortedArray
}


console.log(insertionSortArray)
console.log(insertionSort(insertionSortArray))
