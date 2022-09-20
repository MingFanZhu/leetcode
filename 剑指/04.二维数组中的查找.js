/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length==0){
        return false;
    }
    //从右上角开始，向下则增，向左则减
    var n=0;
    var m=matrix[0].length-1;
    while(n<matrix.length&&m>=0){
        if(matrix[n][m]==target){
            return true;
        }
        if(matrix[n][m]>target){
            m--;
            continue;
        }else{
            n++;
            continue;
        }
    }
    return false;
};