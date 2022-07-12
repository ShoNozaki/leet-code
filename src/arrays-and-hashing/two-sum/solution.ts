// solution 1
// brute force : use pointers
// T = O(n^2)
// S = O(1)

// const twoSum = (nums: number[], target: number): number[] => {
//     const positions: number[] = []
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j< nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
//     return positions
// };

//solution 2
// sort and add positions and then 2 pointers
// T = O(nlog(n)) + O(n)
// S = O(n)

// const twoSum = (nums: number[], target: number): number[] => {
//     const positions: number[] = []
//     const numsAndPos = nums.map((num, i) => [num, i])
//     const sorted = numsAndPos.sort((a,b) => a[0] - b[0])
//     let point1 = 0
//     let point2 = sorted.length - 1
//     while(point2 > point1){
//         const num1 = sorted[point1][0]
//         const pos1 = sorted[point1][1]
//         const num2 = sorted[point2][0]
//         const pos2 = sorted[point2][1]

//         const sum = num1 + num2
//         if (sum === target){
//             if(pos1 < pos2){
//                 return [pos1, pos2]
//             } else {
//                 return [pos2, pos1]
//             }
//         } else if(sum < target){
//             point1 += 1
//         } else if(sum > target){
//             point2 -= 1
//         }
//     }
//     return []
// };

// solution 3
// use a hash of value and index
interface NumMap {
    [num: number] : number
}

const twoSum = (nums: number[], target: number): number[] => {
    const map: NumMap = {}
    for(let i = 0; i < nums.length; i++){
        let num1 = nums[i]
        let num2 = target - num1
        if(typeof(map[num2]) === "number"){
            return [map[num2], i]
        } else {
            map[num1] = i
        }
        }
    return []
};

export default twoSum