const calculateTotalLoan = (loanValue: number, nMonths: number, fee: number, paidByMonth: number): number => {
  let total = 0
  let amount = loanValue
  let totalMonths = 0

  for (let i = 1; i < nMonths && amount > 0 && amount >= paidByMonth; i++) {
    amount -= paidByMonth
    total += (amount * fee)
    totalMonths++  
  }

  console.log(`paid in ${totalMonths} months`)
  console.log(`total loan: ${total + amount}`)
  console.log(`total amount: ${amount}`)

  return total + loanValue + amount
}

console.log(calculateTotalLoan(28000, 12, 0.0411, 2400))
