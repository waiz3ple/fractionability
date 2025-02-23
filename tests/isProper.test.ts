import { isProper } from '../src/methods/comparison/isProper';

describe('isProper', () => {
  // Test proper fractions (numerator < denominator)
  test('returns true for positive proper fractions', () => {
    expect(isProper('1/2')).toBe(true);
    expect(isProper(0.5)).toBe(true);
    expect(isProper('2/4')).toBe(true);
    expect(isProper('50%')).toBe(true);
    expect(isProper('2:3')).toBe(true);
  });

  // Test improper fractions (numerator >= denominator)
  test('returns false for positive improper fractions', () => {
    expect(isProper('3/2')).toBe(false);
    expect(isProper(1.5)).toBe(false);
    expect(isProper('1 1/2')).toBe(false);
  });

  // Test zero
  test('returns true for zero', () => {
    expect(isProper(0)).toBe(true);
    expect(isProper('0/1')).toBe(true);
  });

  // Test negative fractions
  test('handles negative fractions', () => {
    expect(isProper('-1/2')).toBe(true); // -1 < 2
    expect(isProper(-0.5)).toBe(true);   // -1 < 2
    expect(isProper('-3/2')).toBe(false); // -3 >= 2
  });

  // Test edge cases
  test('handles edge cases', () => {
    expect(isProper('1/1')).toBe(false); // Equal numerator and denominator
    expect(isProper('0/2')).toBe(true);  // Zero numerator
  });
});
