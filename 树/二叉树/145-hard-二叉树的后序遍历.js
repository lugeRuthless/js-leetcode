// 145 hard 二叉树的后序遍历

// 给定一个二叉树，返回它的 后序 遍历。
//
// 示例:
//
//     输入: [1,null,2,3]
// 1
//     \
//      2
//      /
//      3
//
// 输出: [3,2,1]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
//



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return [];
    let arr = []
    let curNode = root;
    let fn = (curNode) => {
        if (curNode.left){
            fn(curNode.left)
        }
        if (curNode.right){
            fn(curNode.right)
        }
        arr.push(curNode.val)
    }
    fn(curNode)
    return arr
};