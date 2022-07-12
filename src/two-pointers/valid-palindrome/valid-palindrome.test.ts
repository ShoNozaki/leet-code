import isPalindrome, {isAlphanumeric} from './solution'

describe("isAlphanumeric", () => {
    it("should return true", ()=>{
        expect(isAlphanumeric("aaa")).toBe(true)
    })
    it("should return true", ()=>{
        expect(isAlphanumeric("Abc")).toBe(true)
    })
    it("should return false", ()=>{
        expect(isAlphanumeric("!")).toBe(false)
    })
    it("should return false", ()=>{
        expect(isAlphanumeric("a!A")).toBe(false)
    })
})

describe("isPalindrome", ()=>{
    it("should return false is s in not a palindrome", ()=>{
        const s = "string"
        expect(isPalindrome(s)).toBe(false)
    })
    it("should return true is s is a palindrome", ()=>{
        const s = "catac"
        expect(isPalindrome(s)).toBe(true)
    })
    it("should return true is s is a palindrome", ()=>{
        const s = "cat!ac"
        expect(isPalindrome(s)).toBe(true)
    })
    it("should return true", ()=>{
        const s = "A man, a plan, a canal: Panama"
        expect(isPalindrome(s)).toBe(true)
    })
})