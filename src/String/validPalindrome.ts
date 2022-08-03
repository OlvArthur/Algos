const isPalindrome = (s: string): boolean => {
  // if(s === '') return true

  const sanitizedString = s.toLowerCase().replace(/[^a-z0-9]/gi, '')

  return sanitizedString === sanitizedString.split('').reverse().join('')
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))
