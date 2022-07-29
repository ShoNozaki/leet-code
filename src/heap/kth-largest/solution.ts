
interface KthLargest {
    k: number
    heap: number[]
}

// Solution 1
// Sort
// T = O(n log(n))
// S = O(n)
// n = nodes in array

// class KthLargest {
//     constructor(k: number, nums: number[]) {
//         this.k = k
//         this.heap = nums.sort((a,b) => a - b)
//     }

//     add(val: number): number {
//         this.heap.push(val)
//         this.heap.sort((a,b) => a - b)
//         const kIndex = this.heap.length - this.k
//         return this.heap[kIndex]
//     }
// }

// Solution 2
// if we use a BST
// intatntiation would be O(n)
// insert in bst is O(n)

// Solution 3
// Min Heap of size K
// contrusction O(nlog n)
// add/ pop in O(log n)

class KthLargest {
    constructor(k: number, nums: number[]) {
        this.k = k
        this.heap = []
        nums.forEach(num => {
            this.add(num)
        })
    }

    getMin(): number {
        return this.heap[0]
    }
    
    remove(): number | null {
        
        if(this.heap.length === 0){
            return null
        }
        //swap first and last
        let start = 0;
        let end = this.heap.length - 1;
        [this.heap[start], this.heap[end]] = [this.heap[end], this.heap[start]];
        //pop off end
        const removed = this.heap.pop()
        //swap down until balanced
        let current = 0
        let leftIndex = current * 2 + 1
        let rightIndex = current * 2 + 2
        
        while(this.heap[current] > this.heap[leftIndex] ||
            this.heap[current] > this.heap[rightIndex]){
                let swapIndex = 0;
                if(this.heap[rightIndex] !== undefined && this.heap[leftIndex]!== undefined){
                    swapIndex = this.heap[leftIndex] < this.heap[rightIndex] ? leftIndex : rightIndex;
                } else if(this.heap[rightIndex] !== undefined){
                    swapIndex = rightIndex
                } else if(this.heap[leftIndex] !== undefined){
                    swapIndex = leftIndex
                }
                [this.heap[current], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[current]]
                current = swapIndex
                
                leftIndex = current * 2 + 1
                rightIndex = current * 2 + 2
        }

        if(removed !== undefined){
            return removed 
        }

        return null
    }

    add(val: number): number {
        if(val < this.getMin() && this.heap.length === this.k){
            return this.getMin()
        }
        // put number at the end
        this.heap.push(val)
        // balance heap
        let current = this.heap.length - 1
        let parentIndex = Math.floor((current - 1 )/2)
        while(current > 0 && this.heap[parentIndex] > this.heap[current]){
            //swap up till balanced
            [this.heap[parentIndex], this.heap[current]] = [this.heap[current], this.heap[parentIndex]]
            current = parentIndex
            parentIndex = Math.floor((current - 1 )/2)
        }
        //pop off top to size
        while(this.heap.length > this.k){
            this.remove()
        }
        //return min
        return this.getMin()
    }
}



/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

export default KthLargest