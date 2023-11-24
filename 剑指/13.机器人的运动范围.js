/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。
 * 请问该机器人能够到达多少个格子？
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function (m, n, k) {
    var res = 0;
    var path = [];
    for (var i = 0; i < m; i++) {
        path.push(new Array(n).fill(true));
    }

    function visiable(i, j) {
        if (!path[i][j]) {
            return false;
        }
        var sum = 0;
        var str = i.toString() + j.toString();
        for(var i=0;i<str.length;i++){
            sum+=parseInt(str[i]);
        }
        if (sum > k) {
            return false;
        }
        return true;
    }

    function dfs(i, j) {
        var vis = visiable(i, j);
        if (vis) {
            res++;
        }
        path[i][j] = false;
        if (vis) {
            //小于等于k才继续右下
            if (i + 1 < m) {
                dfs(i + 1, j);
            }
            if (j + 1 < n) {
                dfs(i, j + 1);
            }
        }
    }

    dfs(0, 0);
    return res;
};