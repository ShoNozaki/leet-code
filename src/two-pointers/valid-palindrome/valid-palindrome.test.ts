import isPalindrome from './solution'

describe("isPalindrome", ()=>{
    it("should return true", ()=>{
        const s = "string"
        expect(isPalindrome(s)).toBe(true)
    })
})