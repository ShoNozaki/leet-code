interface MaxHeap {
    heap: number[]
}

class MaxHeap {
    constructor(nums: number[]){
        this.heap = []
        nums.forEach(num => this.add(num))
    }
    getMax(): number{
        if(this.getLength()){
            return this.heap[0]
        }
        return 0
    }
    getLength(): number{
        return this.heap.length
    }
    add(val: number): number{
        this.heap.push(val)

        let current = this.heap.length - 1
        let parent = Math.floor(current - 1 / 2)

        while(current > 0 && this.heap[parent] < this.heap[current]){
            [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]]
            current = parent
            parent = Math.floor((current - 1) / 2)
        }
        return this.getMax()
    }
    remove(): number{
        if(this.heap.length <= 0){
            return 0
        }
        //swap
        const start = 0;
        const end = this.getLength() - 1;
        [this.heap[start], this.heap[end]] = [this.heap[end], this.heap[start]]
        //pop
        const removed = this.heap.pop()
        //restore heap
        let current = 0
        let left = current * 2 + 1;
        let right = current * 2 + 2;
        while(this.heap[current] < this.heap[left] ||
              this.heap[current] < this.heap[right]){

                let swapIndex = 0;
                if(this.heap[left] !== undefined && this.heap[right] !== undefined){
                    swapIndex = this.heap[left] > this.heap[right] ? left : right
                } else if(this.heap[left] !== undefined){
                    swapIndex = left
                }else if(this.heap[right] !== undefined){
                    swapIndex = right
                }
                [this.heap[current], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[current]]

                current = swapIndex
                left = current * 2 + 1;
                right = current * 2 + 2;
        }
        if(removed !== undefined){
            return removed
        }
        return 0
    }
}

// Solution 1
// create max heap
// while heap is bigger than 1
    // pop off top 2
    // if not equal, add the difference

const lastStoneWeight = (stones: number[]): number => {
    const heap = new MaxHeap(stones)
    // console.log(heap.heap)
    
    while(heap.getLength() > 1){
        console.log(heap.heap)
        const large = heap.remove();
        const small = heap.remove();
        
        const dif = large - small;
        if(dif > 0){
            heap.add(dif)
        }
        console.log(dif)
    }
    // console.log(heap.heap)
    return heap.getMax()
};

export default lastStoneWeight