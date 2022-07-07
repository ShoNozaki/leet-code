import containsDuplicate from "./solution";

test("should pass", () => {
  expect(true).toBe(true)
})
test('should return false when passed an array of different numbers', () => {
  const input = [1,2,3]
  const output = containsDuplicate(input)
  console.log({input, output})
  expect(output).toBe(false);
});
test('should return true if duplicate number is in array', () => {
  expect(containsDuplicate([1,2,2])).toBe(true)
  expect(containsDuplicate([2,1,2])).toBe(true)
});