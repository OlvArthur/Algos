/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

  Input: prices = [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

  Input: prices = [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

  1 <= prices.length <= 10⁵
  0 <= prices[i] <= 10⁴
*/


// As you need to know if there was i higher profit at past dates, you need to keep track of profit
// As you need to calculate maximum profit for that date using the best price possible to data, you need to keep track of lowest price to date



function maxProfit(prices: number[]): number {
  let profit = 0
  let lowestPrice = Math.pow(10, 4)

  for(let price of prices) {
    profit = Math.max(profit, price - lowestPrice)

    if(price < lowestPrice) lowestPrice = price
  }

  return profit

}

// n => prices length
// time complexity O (n)
// space complexity O (1)
