// Solution 1
//Cache solutions
//T = O(n)
//S = O(n)

// Solution 2
// bottom up  with 2 pointers
// T = O(n)
// S = O(1)

const climbStairs = (n: number): number => {
    let one = 1
    let two = 1

    for(let i = 0; i < n - 1 ; i++){
        let temp = one
        one = one + two
        two = temp
    }

    return one

};

export default climbStairs