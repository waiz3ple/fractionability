import Fraction from '../src/core/Fraction';
import { multiply } from '../src/methods/arithmetic/multiply';

describe('multiply', () => {

  test('multiplies two positive fractions correctly', () => {
    const result = multiply('2/3', '3/4');
    expect(result.getNumerator).toBe(6);   // 2 * 3
    expect(result.getDenominator).toBe(12); // 3 * 4
  });

  test('multiplies fraction and decimal correctly', () => {
    const result = multiply('2/3', 0.5);
    expect(result.getNumerator).toBe(2);   // 2 * 1
    expect(result.getDenominator).toBe(6); // 3 * 2
  });

  test('multiplies mixed number and fraction correctly', () => {
    const result = multiply('1 1/2', '2/3');
    expect(result.getNumerator).toBe(6);   // 3 * 2
    expect(result.getDenominator).toBe(6); // 2 * 3
  });

  test('handles negative fractions', () => {
    const result = multiply('-1/2', '2/3');
    expect(result.getNumerator).toBe(-2);  // -1 * 2
    expect(result.getDenominator).toBe(6); // 2 * 3
  });

  test('multiplies negative decimal and fraction', () => {
    const result = multiply(-0.5, '2/3');
    expect(result.getNumerator).toBe(-2);  // -1 * 2
    expect(result.getDenominator).toBe(6); // 2 * 3
  });

  test('multiplies with zero', () => {
    const result = multiply('2/3', 0);
    expect(result.getNumerator).toBe(0);   // 2 * 0
    expect(result.getDenominator).toBe(3); // 3 * 1
  });

  test('multiplies percentage and ratio', () => {
    const result = multiply('50%', '2:3');
    expect(result.getNumerator).toBe(100); // 50 * 2
    expect(result.getDenominator).toBe(300); // 100 * 3
  });

  test('returns Fraction instance', () => {
    const result = multiply('2/3', '3/4');
    expect(result).toBeInstanceOf(Fraction);
  });
});