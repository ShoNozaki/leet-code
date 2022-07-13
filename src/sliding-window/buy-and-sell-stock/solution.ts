// solution 1
// track current profit, maxProfit, low point
// 2 pointer
// if new low, change low pointer
// T = O(n)
// S = O(1)
// n = each price

const maxProfit = (prices: number[]): number => {
    let maxProfit =  0
    let low = prices[0]
    for(let i = 1; i < prices.length; i++){
        const currentPrice = prices[i]
        let profit;
        if(currentPrice < low){
            low = currentPrice
        } else if(currentPrice > low) {
            profit = currentPrice - low
            if(profit > maxProfit){
                maxProfit = profit
            }
        }
        // if even do nothing 
    }
 return maxProfit
};

export default maxProfit