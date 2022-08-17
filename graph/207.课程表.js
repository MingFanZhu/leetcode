/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 *
 * https://leetcode.cn/problems/course-schedule/description/
 *
 * algorithms
 * Medium (53.90%)
 * Likes:    1382
 * Dislikes: 0
 * Total Accepted:    238.9K
 * Total Submissions: 443.3K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * 
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi]
 * ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 * 
 * 
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 * 
 * 
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
 * 
 * 示例 2：
 * 
 * 
 * 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
 * 输出：false
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * prerequisites[i].length == 2
 * 0 i, bi < numCourses
 * prerequisites[i] 中的所有课程对 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var graph=new Array(numCourses);
    for(var i=0;i<numCourses;i++){
        graph[i]=new Array();
    }
    for(var item of prerequisites){
        graph[item[1]].push(item[0]);
    }

    var visited=new Array(numCourses).fill(false);
    var onPath=new Array(numCourses).fill(false);
    var isCircle=false;

    function travel(graph,index){
        if(onPath[index]){
            isCircle=true;
            return;
        }
        if(visited[index]){
            return;
        }
        visited[index]=true;
        onPath[index]=true;
        for(var i of graph[index]){
            travel(graph,i);
        }
        onPath[index]=false;
    }

    for(var i=0;i<numCourses;i++){
        //全部结点都走一遍，因为不是从a到b的问题
        travel(graph,i);
    }
    return !isCircle;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = canFinish;
// @after-stub-for-debug-end