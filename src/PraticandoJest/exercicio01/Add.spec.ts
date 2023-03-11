import { add } from './Add';

describe('testing the sum function.', () => {
  it('should return 11', () => {
    const result = add(3, 8);
    expect(result).toBe(11);
  });
});
