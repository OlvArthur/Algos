/* 
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

Example 1:

  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

  Input: nums = [3,2,4], target = 6
  Output: [1,2]

Example 3:

  Input: nums = [3,3], target = 6
  Output: [0,1]
 

Constraints:

  2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109
  Only one valid answer exists.

*/

// Brute force solution
// iterate through array once and for each value iterate through the array looking for the sum
// function twoSum(numbers: number[], target: number): number[] {
//   for(let [index1, num1] of numbers.entries()) {
//     for(let [index2, num2] of numbers.entries()) {
//       if(index1 === index2) continue

//       if((num1 + num2) === target) {
//         return [index1, index2]
//       }
//     }
//   }

//   return []
// }

// n => length of array
// time complexity O(n²)
// space complexity O(1)



// Memoized Solution
const twoSum = (numbers: number[], target: number): number[] => {
  const memo:{ [key: number]:number } = {}
  
  for(let [index, num] of numbers.entries()) {
    if(num in memo) {
      return  [index, memo[num]]
    }
    
    const suplement = target - num
    memo[suplement] = index
  }
  
  return []
}

// n => array length
// time complexity O(n)
// space complexity O(n)

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
