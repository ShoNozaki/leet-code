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
//recursion
// T = O(n)
// S = O(1)
// n = nodes in tree

 const invertTree = (root: TreeNode | null): TreeNode | null => {
    if(!root){
        return null
    }
    if(root.left){
        invertTree(root.left)
    }
    if(root.right){
        invertTree(root.right)
    }
    let hold = root.right
    root.right = root.left
    root.left = hold

    return root
};