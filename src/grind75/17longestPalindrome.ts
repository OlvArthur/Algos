function longestPalindrome(s: string): number {
  if(s.length === 1) return 1

  const charCount = new Map<string, number>()
  let longestPalindromeLength = 0

  for(let i=0; i< s.length; i++) {
    const count = charCount.get(s[i])

    if(!count) {
      charCount.set(s[i], 1)
      continue
    }

    charCount.delete(s[i])
    longestPalindromeLength += 2
  }

  const charsLeftCount = charCount.size

  if(charsLeftCount) longestPalindromeLength++

  return longestPalindromeLength
};
