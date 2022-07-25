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

const isBalanced = (root: TreeNode | null): boolean => {
    let isBalanced = true
    const getHeight = (node: TreeNode | null): number => {
        if(!node){
            return - 1
        }
        const left = getHeight(node.left)
        const right = getHeight(node.right)

        if(Math.abs(left - right) > 1){
            isBalanced = false
        }
        return 2 + Math.max(left, right)
    }
    getHeight(root)
    return isBalanced
};