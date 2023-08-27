/* 

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

  Input: s = "anagram", t = "nagaram"
  Output: true

Example 2:

  Input: s = "rat", t = "car"
  Output: false
 

Constraints:

  1 <= s.length, t.length <= 5 * 104
  s and t consist of lowercase English letters.

*/


// 
// sort each word using quicksort and ascii code and compare both sorted words 

// function isValidAnagram(s: string, t: string): boolean {
//   const sortedS = quickSortString(s)
//   const sortedT = quickSortString(t)

//   return sortedS === sortedT
// }

// function quickSortString(word: string): string {
//   if (word.length <= 1) return word
  
//   const pivotIndex = Math.floor(word.length / 2)
//   const pivotAsciiValue = word[pivotIndex].charCodeAt(0)

  
//   const [leftSectionWord, rightSectionWord] = word.split('').reduce<string[]>((acc, curr, currIndex) => {
//     // check if current char is pivot, do nothing if true
//     if(pivotIndex === currIndex) return acc
    
//     const currAsciiValue = curr.charCodeAt(0)
//     if(currAsciiValue <= pivotAsciiValue) {
//       acc[0] = `${acc[0]}${curr}`
//       return acc
//     }

//     acc[1] = `${acc[1]}${curr}`
//     return acc
//   }, ['',''])

//   const leftSortedSectionWord = quickSortString(leftSectionWord)
//   const rightSortedSectionWord = quickSortString(rightSectionWord)

//   return leftSortedSectionWord.concat(word[pivotIndex]).concat(rightSortedSectionWord)
// }


// Create Map where key is a letter, and value is the subtraction of number of appearances in t from number of appearances in t

function isValidAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false
  
  const charCount = new Map<string, number>()

  for(let i = 0 ;i < s.length; i++) {
    const currentSChar = s[i]
    const currentSCharCount = charCount.get(currentSChar) || 0

    charCount.set(s[i], currentSCharCount + 1)
    
    const currentTChar = t[i]
    const currentTCharCount = charCount.get(currentTChar) || 0
    
    charCount.set(t[i], currentTCharCount - 1)
  }

  for (let countValue of charCount.values()) {
    if(countValue !== 0) return false
  }

  return true
}




console.log(isValidAnagram('anagram', 'nagaram'))
console.log(isValidAnagram('rat', 'car'))
