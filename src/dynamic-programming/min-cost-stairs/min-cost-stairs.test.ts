import minCostClimbingStairs from "./solution"

describe("Min Cost Climbing Stairs", () => {
    it("should return a number", () => {
        const n = [1]
        expect(typeof minCostClimbingStairs(n)).toBe("number")
    })
    it("should return 15", () => {
        const n = [10,15,20]
        expect(minCostClimbingStairs(n)).toBe(15)
    })
    it("should return 6", () => {
        const n = [1,100,1,1,1,100,1,1,100,1]
        expect(minCostClimbingStairs(n)).toBe(6)
    })
    it("should return 2", () => {
        const n = [3,2,1]
        expect(minCostClimbingStairs(n)).toBe(2)
    })
    
})