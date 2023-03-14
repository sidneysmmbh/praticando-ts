import { myPromise } from './MyPromise-01';

describe('', () => {
  it('should return "Hello" plus the name sent to the promise.', async () => {
    try {
      const result1 = await myPromise('Sidney');
      expect(result1).toBe('Hello Sidney!');
      const result2 = await myPromise(null);
    } catch (e) {
      expect(e).toBe('You must enter a name!');
    }
  });
});
