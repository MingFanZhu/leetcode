/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.minStack = [];//记录stack中从对应元素到栈底的最小值，每次压栈只要当前元素和栈顶元素比大小就行了
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    if (this.minStack.length == 0) {
        this.minStack.push(x);
    } else {
        var top = this.minStack[this.minStack.length - 1];
        if (x <= top) {
            this.minStack.push(x);
        } else {
            this.minStack.push(top);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minStack.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length != 0) {
        return this.stack[this.stack.length - 1];
    } else {
        return undefined;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    if (this.minStack.length != 0) {
        return this.minStack[this.minStack.length - 1];
    } else {
        return undefined;
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */