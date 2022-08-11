import plusOne from './solution';

describe('plus one', () => {
  it('should return an array', () => {
    const digits = [1, 2, 3];
    expect(plusOne(digits)).toEqual(expect.arrayContaining([]));
  });

  it('should return [1,2,4]', () => {
    const digits = [1, 2, 3];
    const output = [1, 2, 4];
    expect(plusOne(digits)).toEqual(expect.arrayContaining(output));
  });

  it('should return [9]', () => {
    const digits = [8];
    const output = [9];
    expect(plusOne(digits)).toEqual(expect.arrayContaining(output));
  });

  it('should return [1,0]', () => {
    const digits = [9];
    const output = [1, 0];
    expect(plusOne(digits)).toEqual(expect.arrayContaining(output));
  });
  it('should return [1,2,0,0]', () => {
    const digits = [1, 1, 9, 9];
    const output = [1, 2, 0, 0];
    expect(plusOne(digits)).toEqual(expect.arrayContaining(output));
  });
});
