import { gcd } from '../src/helper/gcd';
describe('gcd', () => {
  test('calculates GCD of positive numbers', () => {
    expect(gcd(48, 18)).toBe(6);
  });

  test('handles one zero input', () => {
    expect(gcd(5, 0)).toBe(5);
  });

  test('handles negative numbers', () => {
      expect(gcd(-48, 18)).toBe(6); // GCD is always positive
    });

  test('handles both zeros', () => {
    expect(gcd(0, 0)).toBe(0);
  });
});