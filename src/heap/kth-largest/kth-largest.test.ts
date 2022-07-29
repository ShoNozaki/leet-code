import KthLargest from './solution'

describe("Kth Largest Class", () => {
    const obj = new KthLargest(3, [4, 5, 8, 2])
    it("should have a number value for k when instantiated", () => {
        expect(typeof obj.k).toBe("number")
    })
    it("should have an array of length 3 for heap when instantiated", () => {
        expect(obj.heap.length).toBe(3)
    })
    it("should return 4", () => {
        expect(obj.add(3)).toBe(4)
    })
    it("should return 5", () => {
        expect(obj.add(5)).toBe(5)
    })
    it("should return 5", () => {
        expect(obj.add(10)).toBe(5)
    })
    it("should return 8", () => {
        expect(obj.add(9)).toBe(8)
    })
    it("should return 8", () => {
        expect(obj.add(4)).toBe(8)
    })
})

describe("Kth Largest Class Test 2", () => {
    const obj = new KthLargest(2, [0])
    it("should have a number value for k when instantiated", () => {
        expect(typeof obj.k).toBe("number")
    })
    it("should have an array of length 3 for heap when instantiated", () => {
        expect(obj.heap.length).toBe(1)
    })
    it("should return -1", () => {
        expect(obj.add(-1)).toBe(-1)
    })
    it("should return 0", () => {
        expect(obj.add(1)).toBe(0)
    })
    it("should return 0", () => {
        expect(obj.add(-2)).toBe(0)
    })
    it("should return 0", () => {
        expect(obj.add(-4)).toBe(0)
    })
    it("should return 1", () => {
        expect(obj.add(3)).toBe(1)
    })
})