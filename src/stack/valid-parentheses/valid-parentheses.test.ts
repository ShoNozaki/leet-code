import isValid from './solution'

describe("Valid Parentheses", () => {
    it("should return true", () => {
        const s = "()"
        expect(isValid(s)).toBe(true)
    })
    it("should return true", () => {
        const s = "()[]{}"
        expect(isValid(s)).toBe(true)
    })
    it("should return false if length is not even", () => {
        const s = "())"
        expect(isValid(s)).toBe(false)
    })
    it("should return false if there are incomplete matches", () => {
        const s = "(){]"
        expect(isValid(s)).toBe(false)
    })
})