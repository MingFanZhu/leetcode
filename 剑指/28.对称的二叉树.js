/**
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。
 * 如果一棵二叉树和它的镜像一样，那么它是对称的。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    if(root==null){
        return true;
    }
    var arr=[root.left,root.right];
    while(arr.length>0){
        var num=arr.length;
        var temp=[];
        while(num>0){
            num--;
            var node=arr.shift();
            if(node!=null){
                temp.push(node.val);
                arr.push(node.left);
                arr.push(node.right);
            }else{
                temp.push(null);
            }
        }
        if(!chargeLevel(temp)){
            return false;
        }
    }
    return true;
};

function chargeLevel(arr){
    var left=0;
    var right=arr.length-1;
    while(left<right){
        if(arr[left]!=arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}