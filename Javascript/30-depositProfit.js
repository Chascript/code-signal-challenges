function depositProfit(deposit, rate, threshold) {
  let count = 0
  while(deposit < threshold){
      deposit = deposit*(rate/100+1)
      count++
  }
  return count
  }
  