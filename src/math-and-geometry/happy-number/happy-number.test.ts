import isHappy from './solution';

describe('isHappy', () => {
  it('should return a boolean', () => {
    const n = 5;
    expect(typeof isHappy(n)).toBe('boolean');
  });
  it('should return true', () => {
    const n = 19;
    expect(isHappy(n)).toBe(true);
  });
  it('should return false', () => {
    const n = 2;
    expect(isHappy(n)).toBe(false);
  });
});
