import { generateRandomArray } from "../helpers/generateRandomArray";

const quickSortArray = generateRandomArray()

function quickSort(arr: number[]): number[] {
  if(arr.length <= 1) return arr

  const pivotIndex = Math.floor(arr.length / 2)
  const pivotValue = arr[pivotIndex]

  const [leftSection, rightSection] = arr.reduce<Array<number[]>>((acc, curr, currIndex) =>{
    if(currIndex === pivotIndex) return acc
    
    if(curr <= pivotValue) {
      acc[0].push(curr)
      return acc
    } 

    acc[1].push(curr)    
    return acc
  }, [[], []])

  const leftSortedSection = quickSort(leftSection)
  const rightSortedSection = quickSort(rightSection)

  return [...leftSortedSection, pivotValue, ...rightSortedSection ]
}

console.log(quickSortArray)
console.log(quickSort(quickSortArray))


// 
