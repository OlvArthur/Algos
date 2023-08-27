
function mergeSort(arr: number[]): number[] {
  if(arr.length <= 1) return arr

  const sortedLeftarray = mergeSort(arr.slice(0, Math.floor(arr.length/2)))
  const sortedRightarray = mergeSort(arr.slice(Math.floor(arr.length/2)))
  return sortTwoSortedArrays(sortedLeftarray, sortedRightarray)
}

function sortTwoSortedArrays(arr1: number[], arr2: number[]): number[] {
  const sortedArray = []


  let arr1Index = 0
  let arr2Index = 0
  while(arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      sortedArray.push(arr1[arr1Index])
      arr1Index++
    } else {
      sortedArray.push(arr2[arr2Index])
      arr2Index++   
    }
  }

  if(arr1Index >= arr1.length){
    sortedArray.push(...arr2.slice(arr2Index))
  }

  if(arr2Index >= arr2.length){
    sortedArray.push(...arr1.slice(arr1Index))
  }



  return sortedArray
}

console.log(mergeSort([1,4,2,8,345]))


