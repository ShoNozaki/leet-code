// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

//solution 1
// T = O(n)
// S = O(n)
// n = nodes in tree

const maxDepth = (root: TreeNode | null): number => {
    if(!root){
        return 0
    }
    const getDepth = (node: TreeNode, prevDepth: number): number => {
        const currentDepth = prevDepth + 1
        const leftDepth = node.left ? getDepth(node.left, currentDepth) : currentDepth
        const rightDepth = node.right ? getDepth(node.right, currentDepth) : currentDepth

        return rightDepth > leftDepth ?  rightDepth : leftDepth
    }
    return getDepth(root, 0)
};