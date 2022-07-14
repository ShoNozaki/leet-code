//solution 1
// stack that takes the incoming number and previous low

type Input = [number, Low]
type Low = number | undefined

interface MinStack {
    stack: Input[]
    low: Low
}

class MinStack {
    constructor() {
        this.stack = []
        this.low = undefined;
    }

    push(val: number): void {
        const input: Input = [val, this.low]
        this.stack.push(input)
        if(this.low === undefined || val < this.low ){
            this.low = val
        } 
    }

    pop(): void {
        const top = this.stack.length ? this.stack.pop() : null
        if(top){
            this.low = top[1]
        }

    }

    top(): number {
        const top = this.stack.length ? this.stack[this.stack.length - 1] : null
        if(top){
            return top[0]
        } 
        return 0
    }

    getMin(): number {
        if(typeof this.low === "number"){
            return this.low
        }

        return 0
    }
}

export default MinStack