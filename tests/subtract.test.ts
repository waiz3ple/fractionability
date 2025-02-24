import Fraction from '../src/core/Fraction';
import { subtract } from '../src/methods/arithmetic/subtract';

describe('subtract', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('subtracts two positive fractions correctly', () => {
    const result = subtract('3/4', '2/3');
    expect(result.getNumerator).toBe(1);    // (3*3 - 2*4) = 9 - 8 = 1
    expect(result.getDenominator).toBe(12); // 4 * 3 = 12
  });

  test('subtracts fraction and decimal correctly', () => {
    const result = subtract('3/4', 0.5);
    expect(result.getNumerator).toBe(1);    // (3*2 - 1*4) = 6 - 4 = 2
    expect(result.getDenominator).toBe(4);  // 4 * 2 = 8 (unsimplified)
  });

  test('subtracts mixed number and fraction correctly', () => {
    const result = subtract('1 1/2', '2/3');
    expect(result.getNumerator).toBe(5);    // (3*3 - 2*2) = 9 - 4 = 5
    expect(result.getDenominator).toBe(6);  // 2 * 3 = 6
  });

  test('handles negative fractions', () => {
    const result = subtract('-1/2', '2/3');
    expect(result.getNumerator).toBe(-7);   // (-1*3 - 2*2) = -3 - 4 = -7
    expect(result.getDenominator).toBe(6);  // 2 * 3 = 6
  });

  test('subtracts negative decimal and fraction', () => {
    const result = subtract(-0.5, '2/3');
    expect(result.getNumerator).toBe(-7);   // (-1*3 - 2*2) = -3 - 4 = -7
    expect(result.getDenominator).toBe(6);  // 2 * 3 = 6
  });

  test('subtracts with zero', () => {
    const result = subtract('2/3', 0);
    expect(result.getNumerator).toBe(2);    // (2*1 - 0*3) = 2
    expect(result.getDenominator).toBe(3);  // 3 * 1 = 3
  });

  test('subtracts percentage and ratio', () => {
    const result = subtract('50%', '2:3');
    expect(result.getNumerator).toBe(-1);  // (50*3 - 2*100) = 150 - 200 = -50/50 = -1
    expect(result.getDenominator).toBe(6); // 100 * 3 = 300/50 = 6
  });

  test('returns Fraction instance', () => {
    const result = subtract('2/3', '1/3');
    expect(result).toBeInstanceOf(Fraction);
  });
});