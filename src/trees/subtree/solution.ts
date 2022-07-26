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

// solution 1
// call isSameTree on all nodes that have the same root val
// T = O(n) ^ m
// S = O(1)
// n =  nodes in subroot
// m = occurrences of subroot val in root

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if(!p && !q){
        return true
    } else if(!p || !q || p.val !== q.val){
        return false
    }
   
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

const isSubtree = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if(!root && !subRoot){
        return true
    } else if (!root){
        return false
    } else if(!subRoot){
        return true
    } else if(root.val === subRoot.val){
        if(isSameTree(root, subRoot)){
            return true
        }
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

};

export default isSubtree