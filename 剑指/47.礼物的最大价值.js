/**
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
 * 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
 * 给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxValue = function(grid) {
    var dp=JSON.parse(JSON.stringify(grid));
    dp.unshift(new Array(dp[0].length).fill(0));
    for(var i=0;i<dp.length;i++){
        dp[i].unshift(0);
    }
    for(var i=1;i<dp.length;i++){
        for(var j=1;j<dp[0].length;j++){
            dp[i][j]=Math.max(dp[i-1][j]+dp[i][j],dp[i][j-1]+dp[i][j])
        }
    }

    return dp[dp.length-1][dp[0].length-1];
};