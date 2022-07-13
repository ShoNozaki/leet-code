import maxProfit from './solution'

describe("Max Profit", () => {
    it("should return largest difference", () => {
        const prices = [1,2,3]
        expect(maxProfit(prices)).toBe(2)
    })
    it("should return 5", () => {
        const prices = [7,1,5,3,6,4]
        expect(maxProfit(prices)).toBe(5)
    })
    it("should return 0", () => {
        const prices = [7,6,4,3,1]
        expect(maxProfit(prices)).toBe(0)
    })
    it("should return 0", () => {
        const prices = [1,3,2,6]
        expect(maxProfit(prices)).toBe(5)
    })
})