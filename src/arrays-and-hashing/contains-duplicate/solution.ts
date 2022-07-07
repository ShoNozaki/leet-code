// Solution 1:
// Iterate over all values and store into a hash to check against
// T = (O)n
// S = (O)n 
// const containsDuplicate = (nums: number[]): boolean => {
//     // const numberKey: {[num: number] : boolean} = {}

//     for(let i = 0; i < nums.length; i++){
//         const val = nums[i]
//         if(numberKey[val]){
//             return true;
//         } else {
//             numberKey[val] = true;
//         }
//     }
//     return false;
// };

// Solution 2
// Use a Set intead of a hash map

const containsDuplicate = (nums: number[]): boolean => {
    const numberKey=  new Set()
    for(let i = 0; i < nums.length; i++){
        const val = nums[i]
        if(numberKey.has(val)){
            return true;
        } else {
            numberKey.add(val)
        }
    }
    return false;
};
export default containsDuplicate