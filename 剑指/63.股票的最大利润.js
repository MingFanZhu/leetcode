/**
 * 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if(prices.length==0){
        return 0;
    }
    //dp[i][0],第i天不持有股票的收益
    //dp[i][1],第i天持有股票的收益
    var dp=[];
    for(var i=0;i<prices.length;i++){
        dp.push([0,0]);
    }
    dp[0][1]=-prices[0];//basecase
    for(var i=1;i<prices.length;i++){
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
        dp[i][1]=Math.max(dp[i-1][1],-prices[i]);
    }
    return dp[prices.length-1][0];
};