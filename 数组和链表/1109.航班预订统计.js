/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    var answer = new Array(n).fill(0)

    var planes = new Array(n).fill(0);
    var diff = new Array(n).fill(0);

    for (var item of bookings) {
        diff[item[0] - 1] += item[2];
        diff[item[1]] -= item[2];
    }

    answer[0] = diff[0];
    for (var i = 1; i < n; i++) {
        answer[i] = answer[i - 1] + diff[i];
    }

    return answer;
};
// @lc code=end

