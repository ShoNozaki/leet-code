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
//longest past at node is longest left plus longest right
// can a child have a longer path than parent? yes
// get length and top diameter of left
// get length and top diameter of right
// add lengths together and compare with diameter

// T = O(n)
// S = O(n)
// n = number of nodes in tree

const diameterOfBinaryTree = (root: TreeNode | null): number => {
    if(!root){
        return 0
    }
    let maxDiameter = 0
    const getHeight = (node: TreeNode | null): number => {
        if(!node){
            return -1
        }
        const left = getHeight(node.left)
        const right = getHeight(node.right)
        const diameter = 2 + left + right
        maxDiameter = Math.max(maxDiameter, diameter)

        return 1 + Math.max(left, right)

    }
    getHeight(root)
    return maxDiameter
};

export default diameterOfBinaryTree

// drawback, this isnt a pure function as there are side effects with the max diameter
// you can brute force without side effects at the cost of time.

//brute force T = O(n^2) get diamter for each node with needs to dfs for the legs
