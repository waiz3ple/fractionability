import Fraction from '../src/core/Fraction';
import { simplify } from '../src/methods/simplify';

describe('simplify', () => {
 
  test('simplifies positive fractions correctly', () => {
    const fraction = new Fraction(4, 8);
    const result = simplify(fraction);
    expect(result).toEqual({ numerator: 1, denominator: 2 });
  });

  test('simplifies fractions with common divisor of 1', () => {
    const fraction = new Fraction(3, 7);
    const result = simplify(fraction);
    expect(result).toEqual({ numerator: 3, denominator: 7 }); // Already simplified
  });

  test('handles negative numerator correctly', () => {
    const fraction = new Fraction(-4, 8);
    const result = simplify(fraction);
    expect(result).toEqual({ numerator: -1, denominator: 2 });
  });

  test('handles negative denominator correctly', () => {
    const fraction = new Fraction(4, -8);
    const result = simplify(fraction);
    expect(result).toEqual({ numerator: -1, denominator: 2 });
  });

  test('handles both negative numerator and denominator', () => {
    const fraction = new Fraction(-4, -8);
    const result = simplify(fraction);
    expect(result).toEqual({ numerator: 1, denominator: 2 });
  });

  test('simplifies fraction with zero numerator', () => {
    const fraction = new Fraction(0, 5);
    const result = simplify(fraction);
    expect(result).toEqual({ numerator: 0, denominator: 1 });
  });

  test('simplifies large numbers correctly', () => {
    const fraction = new Fraction(36, 48);
    const result = simplify(fraction);
    expect(result).toEqual({ numerator: 3, denominator: 4 });
  });

  test('handles already simplified negative fraction', () => {
    const fraction = new Fraction(-1, 2);
    const result = simplify(fraction);
    expect(result).toEqual({ numerator: -1, denominator: 2 });
  });
});