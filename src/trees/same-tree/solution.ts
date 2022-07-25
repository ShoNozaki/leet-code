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
// T = O(p + q)
// S = O(1)
// p,q = number of nodes in respective trees

// const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
//     if(p === null  && q === null){
//         return true
//     }
//     if(p === null && q){
//         return false
//     }
//     if(p && q === null){
//         return false
//     }
//     if(p && q){
//         if(p.val !== q.val){
//             return false
//         }
//         return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
//     }
//     return true
// };

//siplified and refactored
const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if(!p && !q){
        return true
    } else if(!p || !q || p.val !== q.val){
        return false
    }
   
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
export default isSameTree