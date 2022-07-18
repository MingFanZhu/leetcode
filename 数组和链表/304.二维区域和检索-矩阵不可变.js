/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.preMatrix = new Array();
    for (var i = 0; i <= matrix.length; i++) {
        this.preMatrix.push(new Array(matrix[0].length + 1).fill(0));
    }

    for (var i = 1; i <= matrix.length; i++) {
        for (var j = 1; j <= matrix[0].length; j++) {
            this.preMatrix[i][j] = this.preMatrix[i - 1][j] + this.preMatrix[i][j - 1]
                + matrix[i - 1][j - 1] - this.preMatrix[i - 1][j - 1];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.preMatrix[row2 + 1][col2 + 1] - this.preMatrix[row2 + 1][col1]
        - this.preMatrix[row1][col2 + 1] + this.preMatrix[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = NumMatrix;
// @after-stub-for-debug-end