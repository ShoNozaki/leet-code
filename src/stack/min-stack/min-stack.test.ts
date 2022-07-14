import MinStack from "./solution"

describe("Min Stack Class", () => {
    it("should be able to push values", () => {
        const stack = new MinStack()
        stack.push(1)
        let top = stack.top()
        expect(top).toBe(1)
        stack.push(2)
        top = stack.top()
        expect(top).toBe(2)
    })
    it("should be able to check top of stack", () => {
        const stack = new MinStack()
        stack.push(1)
        stack.push(2)
        const top = stack.top()
        expect(top).toBe(2)
    })
    it("should be able to pop off top of stack", () => {
        const stack = new MinStack()
        stack.push(1)
        stack.push(2)
        stack.pop()
        const top = stack.top()
        expect(top).toBe(1)
    })
    it("should be able to get smallest number in stack", () => {
        const stack = new MinStack()
        stack.push(3)
        stack.push(1)
        stack.push(2)
        const min = stack.getMin()
        expect(min).toBe(1)
    })
})