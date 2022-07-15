//solution 1
// use two pointers, keep checking each half until you get
// T = O(log(n))
// S = O(1)
// n = number of times we can halve the array


const search = (nums: number[], target: number): number => {
    const failIndex = -1
    let start = 0
    let end = nums.length - 1
    if(nums[start] === target){
        return start
    }
    if(nums[end] === target){
        return end
    }

    while(end - start !== 1){
        const medianI = Math.ceil((start + end)/2)
        const medianVal = nums[medianI]
        if(medianVal === target){
            return medianI
        }else if (medianVal > target){
            end = medianI
        }else if (medianVal < target){
            start = medianI
        }
    }
    return failIndex
};

export default search
