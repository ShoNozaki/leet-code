// cache the sums
// T = O(n)
// S = O(n)
// n = number of iterations
//Solution 1

interface Sums {
  [sum: number]: boolean;
}

const sumDigits = (n: number): number => {
  const digits = n.toString().split('');
  let sum = 0;
  digits.forEach((digit) => (sum += Math.pow(parseInt(digit), 2)));
  return sum;
};

const isHappy = (n: number): boolean => {
  let sum = n;
  const sums: Sums = {};

  while (sum !== 1) {
    if (sums[sum]) {
      return false;
    }
    sums[sum] = true;
    sum = sumDigits(sum);
  }
  return true;
};

export default isHappy;
