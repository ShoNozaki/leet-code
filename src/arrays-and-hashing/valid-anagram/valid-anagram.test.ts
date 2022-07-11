import isAnagram from "./solution"

test("returns false if s is not the same length as t", () => {
    const s = "car"
    const t = "cart"
    expect(isAnagram(s, t)).toBe(false)
})

test("returns false if s has different characters than t", () => {
    const s = "abc"
    const t = "def"
    expect(isAnagram(s, t)).toBe(false)
})

test("returns true if s and t are anagrams", () => {
    const s = "create"
    const t = "reeact"
    expect(isAnagram(s, t)).toBe(true)
})