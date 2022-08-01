import lastStoneWeight from './solution'

describe("last stone weight", () => {
    const stones1 = [1]
    it("should return a number", () => {
        expect(typeof lastStoneWeight(stones1)).toBe("number")
    })
    it("should return 1", () => {
        expect(lastStoneWeight(stones1)).toBe(1)
    })

    const stones2: number[] = []
    it("should return 0 if no stones", () => {
        expect(lastStoneWeight(stones2)).toBe(0)
    })

    const stones3 = [2,2]
    it("should return 0", () => {
        expect(lastStoneWeight(stones3)).toBe(0)
    })

    const stones4 = [2,7,4,1,8,1]
    it("should return 1", () => {
        expect(lastStoneWeight(stones4)).toBe(1)
    })

    const stones5 = [3,7,2]
    it("should return 2", () => {
        expect(lastStoneWeight(stones5)).toBe(2)
    })

    const stones6 = [285,740,94,103,144,805,517,232,571,760,586,184,660,256,863,465,322,957,18,670,516,526,853,116,353,16,408,346,521,638]
    it("should return 1", () => {
        expect(lastStoneWeight(stones6)).toBe(1)
    })

})