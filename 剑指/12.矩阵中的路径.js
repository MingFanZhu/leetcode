/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。
 * 如果 word 存在于网格中，返回 true ；否则，返回 false 。
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    var m=board.length;
    var n=board[0].length;

    //闭包，为了直接使用局部变量
    var path=[];
    for(var i=0;i<m;i++){
        path.push(new Array(n).fill(true));
    }
    var chars=[];

    function visiable(i,j){
        if(i<0||i>=m){
            return false;
        }
        if(j<0||j>=n){
            return false;
        }
        return path[i][j];
    }

    function search(i,j){
        chars.push(board[i][j]);
        path[i][j]=false;
        if(chars[chars.length-1]!=word[chars.length-1]){
            chars.pop();
            path[i][j] = true;
            return false;
        }
        if(chars.length==word.length){
            return true;
        }
        if(visiable(i-1,j)){
            if(search(i-1,j)){
                return true;
            }
        }
        if(visiable(i,j-1)){
            if(search(i,j-1)){
                return true;
            }
        }
        if(visiable(i,j+1)){
            if(search(i,j+1)){
                return true;
            }
        }
        if(visiable(i+1,j)){
            if(search(i+1,j)){
                return true;
            }
        }
        chars.pop();
        path[i][j]=true;
        return false;
    }

    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(search(i,j)){
                return true;
            }
        }
    }
    return false;
};