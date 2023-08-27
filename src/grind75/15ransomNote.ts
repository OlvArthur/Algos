/**
  Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

  Each letter in magazine can only be used once in ransomNote.

 

Example 1:

  Input: ransomNote = "a", magazine = "b"
  Output: false

Example 2:

  Input: ransomNote = "aa", magazine = "ab"
  Output: false

Example 3:

  Input: ransomNote = "aa", magazine = "aab"
  Output: true
 

Constraints:

  1 <= ransomNote.length, magazine.length <= 10⁵
  ransomNote and magazine consist of lowercase English letters.

*/

// { 'a': 1, 'b': -1}
// iterate through ransomNote adding to map keys
// iterate through magazie subtracting to map keys
// iterate through ransomNote, getting map value and checking if it is zero

function canConstructRansomNote(ransomNote: string, magazine: string): boolean {
  const charCount = new Map<string, number>()


  for(const char of ransomNote) {
    const currentCharCount = charCount.get(char) || 0

    charCount.set(char, currentCharCount + 1)
  }

  for(const char of magazine) {
    const currentCharCount = charCount.get(char) || 0

    charCount.set(char, currentCharCount - 1)
  }

  for(const char of ransomNote) {
    if((charCount.get(char) || 0) <= 0)return false
  }

  return true

};
