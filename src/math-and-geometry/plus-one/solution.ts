// Solution 1
// interate from end of array
// if digit is < 9 add one and return
// else digit = 0

// T = O(n)
// S = O(1)
// n = number of digits

const plusOne = (digits: number[]): number[] => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.push(1);
  [digits[0], digits[digits.length - 1]] = [
    digits[digits.length - 1],
    digits[0]
  ];
  return digits;
};

export default plusOne;
