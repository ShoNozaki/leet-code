import twoSum from "./solution"

describe("two sum", ()=>{
    const nums = [3,2,3,1]
    const target = 6
    it("should return positions of the numbers that add up to target",() => {
        expect(twoSum(nums, target)).toEqual([0,2])
    })
})