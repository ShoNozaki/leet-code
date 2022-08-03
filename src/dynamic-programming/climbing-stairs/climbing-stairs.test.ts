import climbStairs from "./solution"

describe("Climb Stairs", () => {
    it("should return a number", () => {
        const n = 1
        expect(typeof climbStairs(n)).toBe("number")
    })
})