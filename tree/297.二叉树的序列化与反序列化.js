/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 *
 * https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/description/
 *
 * algorithms
 * Hard (58.19%)
 * Likes:    941
 * Dislikes: 0
 * Total Accepted:    175.4K
 * Total Submissions: 301.3K
 * Testcase Example:  '[1,2,3,null,null,4,5]'
 *
 * 
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 * 
 * 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 /
 * 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 
 * 提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode
 * 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,3,null,null,4,5]
 * 输出：[1,2,3,null,null,4,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1]
 * 输出：[1]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：root = [1,2]
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中结点数在范围 [0, 10^4] 内
 * -1000 
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    var res=encode(root,"");
    res=res.substring(0,res.length-1);
    return res;
};

function encode(root,res){
    if(root==null){
        res+="null,";
    }else{
        res+=root.val+",";
        res=encode(root.left,res);
        res=encode(root.right,res);
    }
    return res;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    data = data.split(",");
    return build(data);
};

function build(data) {
    if (data[0] == "null") {
        data.shift();
        return null;
    }

    var root = new TreeNode(parseInt(data[0]));
    data.shift();
    root.left = build(data);
    root.right = build(data);
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = serialize;
// @after-stub-for-debug-end