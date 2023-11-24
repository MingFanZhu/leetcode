/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。
 * 如果是则返回 true，否则返回 false。
 * 假设输入的数组的任意两个数字都互不相同。
 */

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder = function(postorder) {
    // 终止条件，树节点 <=2 返回 true
    if (postorder.length <= 2) return true;

    // 根节点
    const root = postorder[postorder.length - 1];
    // 寻找 第一个大于根节点 的节点 inx
    const idx = postorder.findIndex((item) => item > root);

    // 划分出：左子树区间 [left, inx - 1]
    const left = postorder.slice(0, idx);
    // 划分出：右子树区间 [inx, postorder.length - 1]
    const right = postorder.slice(idx, -1);

    // 二叉搜索树的右子树和根相比，最小值一定是根值
    // 因为前面根据找到的第一个大于根节点的值，所以左区间都小于根节点，无需判断
    if (Math.min(root, ...right) !== root) return false

    return verifyPostorder(left) && verifyPostorder(right)
};