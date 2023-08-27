/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

  Input: s = "A man, a plan, a canal: Panama"
  Output: true
  Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

  Input: s = "race a car"
  Output: false
  Explanation: "raceacar" is not a palindrome.

Example 3:

  Input: s = " "
  Output: true
  Explanation: s is an empty string "" after removing non-alphanumeric characters.
  Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

  1 <= s.length <= 2 * 105
  s consists only of printable ASCII characters.

*/

// iterar sobre a palavra e formar uma nova string sanitizada
  // tranformando os caracteres em minusculos
  // removendo caracteres não alfa numericos
    // checar através do código ascii

// checar se o inverso da nova string é igual normal e revertida
  // separando a string em array de strings
  // revertendo array
  // juntando o array
  // comparando a string inicial


// edge case
  // s -- "  "


// example "race a car"
// rls = ["r","a","c","e","a","c","a","r"]

function isValidPalindrome(s: string): boolean {
  let alphanumericLowerCaseString: string[] | string = []

  for(const char of s) {
    
    if(isAlphaNumeric(char)) alphanumericLowerCaseString.push(char.toLowerCase())
  }


  return alphanumericLowerCaseString.join('') === alphanumericLowerCaseString.reverse().join('')

}

function isAlphaNumeric(char: string) {
  const charAsciiValue = char.charCodeAt(0)

  const isLowerCaseLetter = 'a'.charCodeAt(0) <= charAsciiValue && charAsciiValue <= 'z'.charCodeAt(0)
  const isUpperCaseLetter = 'A'.charCodeAt(0) <= charAsciiValue && charAsciiValue <= 'Z'.charCodeAt(0)
  const isLetter = isLowerCaseLetter || isUpperCaseLetter
  const isNumber = '0'.charCodeAt(0) <= charAsciiValue && charAsciiValue <= '9'.charCodeAt(0)

  return isLetter || isNumber
}


// n => number of characters in s || length of s
// time complexity O (n)
// space complexity O (n)
