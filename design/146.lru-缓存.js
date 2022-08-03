/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 *
 * https://leetcode.cn/problems/lru-cache/description/
 *
 * algorithms
 * Medium (53.00%)
 * Likes:    2320
 * Dislikes: 0
 * Total Accepted:    387.2K
 * Total Submissions: 728.9K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 
 * 实现 LRUCache 类：
 * 
 * 
 * 
 * 
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组
 * key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 
 * 
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= capacity <= 3000
 * 0 <= key <= 10000
 * 0 <= value <= 10^5
 * 最多调用 2 * 10^5 次 get 和 put
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    //一个双向链表按时间序列存储
    //一个map存储结点的引用
    this.capacity = capacity;
    this.length = 0;
    this.cache = new Cache();
    this.map = new Map();
};

function Cache() {
    this.head = null;
    this.last = this.head;
}

Cache.prototype.unshift = function (key, value) {
    var node = new CacheNode(key, value);
    if (this.head == null) {
        //初始化
        this.head = node;
        this.last = node;
    } else {
        node.next = this.head;
        this.head.before = node;
        this.head = node;
    }
    return node;
}

Cache.prototype.update = function (node, value) {
    node.value = value;
    if (node == this.head) {
        return;
    }
    if (node == this.last) {
        this.last = this.last.before;
        node.before.next = null;
        node.before = null;
        node.next = this.head;
        this.head.before = node;
        this.head = node;
    } else {
        node.before.next = node.next;
        node.next.before = node.before;
        node.before = null;
        node.next = this.head;
        this.head.before = node;
        this.head = node;
    }
}

Cache.prototype.pop = function () {
    var node = this.last;
    if (this.last == this.head) {
        this.last = null;
        this.head = null;
    } else {
        this.last = this.last.before;
        this.last.next = null;
    }
    return node;
}

function CacheNode(key, value) {
    this.key = key ? key : null;
    this.value = value ? value : null;
    this.next = null;
    this.before = null;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        var node = this.map.get(key);
        this.cache.update(node, node.value);//为了把node提前
        return node.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        var node = this.map.get(key);
        this.cache.update(node, value);
    } else {
        if (this.length == this.capacity) {
            var node = this.cache.pop();
            this.map.delete(node.key);
            this.length--;
        }
        var node = this.cache.unshift(key, value);
        this.map.set(key, node);
        this.length++;
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = LRUCache;
// @after-stub-for-debug-end