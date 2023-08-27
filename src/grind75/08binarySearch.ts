/* 
  Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

  You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

  Input: nums = [-1,0,3,5,9,12], target = 9
  Output: 4
  Explanation: 9 exists in nums and its index is 4

Example 2:

  Input: nums = [-1,0,3,5,9,12], target = 2
  Output: -1
  Explanation: 2 does not exist in nums so return -1
 

Constraints:

  1 <= nums.length <= 10⁴
  -10⁴ < nums[i], target < 10⁴
  All the integers in nums are unique.
  nums is sorted in ascending order.

*/

// find middle value, and check against target
  // if middle value equals target, return middle index
  // if middle value lower than target, discard all values in array at the left side
  // else discard all values in array at right side

// repeat process on remaining array until found, or remaining array has one option


// edge cases
  // [] => false

//   0 1 2 3 4 5
// [-1,0,3,5,9,12] target 9
// indexRangestart = 2
// indexRangeEnd = 2
// middleIndex = 1
function search(nums: number[], target: number): number {
  if(nums.length === 0) return -1

  let remainingValuesIndexRangeStart = 0
  let remainingValuesIndexRangeEnd = nums.length - 1

  while (remainingValuesIndexRangeStart < remainingValuesIndexRangeEnd) {
    const remainingValuesIndexRange = remainingValuesIndexRangeEnd - remainingValuesIndexRangeStart
    const middleIndex = Math.ceil((remainingValuesIndexRange / 2) + remainingValuesIndexRangeStart)

    if(nums[middleIndex] === target) return middleIndex

    if(nums[middleIndex] < target) {
      remainingValuesIndexRangeStart = middleIndex + 1
      continue
    }

    remainingValuesIndexRangeEnd = middleIndex - 1
  }

  

  return nums[remainingValuesIndexRangeStart] === target ? remainingValuesIndexRangeStart : -1
}


// n => nums length
// time complexity O(logn)
// space complexity O(1)
