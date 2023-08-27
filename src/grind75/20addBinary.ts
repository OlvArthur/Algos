function addBinary(a: string, b: string): string {
  if(a === '0' && b === '0') return '0'
  
  if(a === '0' || b === '0') return Boolean(Number(a)) ? a : b

  const aInOrder = a.split('').reverse()
  const bInOrder = b.split('').reverse()

  const maxLength = Math.max(a.length, b.length)

  let supplement = 0
  const sum: number[] = []
  for(let i=0;i< maxLength; i++) {
    const aValue = aInOrder[i] || 0
    const bValue = bInOrder[i] || 0

    const valuesSum = Number(aValue) + Number(bValue) + supplement

    sum[i] = valuesSum % 2
    supplement = Math.floor(valuesSum / 2)
  }

  if(supplement === 1) sum[sum.length] = 1

  return sum.reverse().join('')

};


console.log(addBinary("110010", "100"))
