import search from "./solution"

describe("Binary Search", () => {
    it("should return a index of target", () => {
        const nums = [-1,0,3,5,9,12]
        const target = 9
        expect(search(nums, target)).toBe(4)
    })
    it("should return -1 if not in nums", () => {
        const nums = [-1,0,3,5,9,12]
        const target = 2
        expect(search(nums, target)).toBe(-1)
    })
})