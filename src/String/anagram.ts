const isAnagram = (s: string, t: string): boolean =>  JSON.stringify(s.split('').sort()) === JSON.stringify(t.split('').sort()) 



console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
