import Fraction from '../src/core/Fraction';
import { toFraction } from '../src/helper/toFraction'; 
describe('toFraction', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns existing Fraction instance unchanged', () => {
    const fraction = new Fraction(1, 2);
    const result = toFraction(fraction);
    expect(result).toBe(fraction); // Same instance
    expect(result.getNumerator).toBe(1);
    expect(result.getDenominator).toBe(2);
  });

  test('converts positive fraction string', () => {
    const result = toFraction('3/4');
    expect(result.getNumerator).toBe(3);
    expect(result.getDenominator).toBe(4);
  });

  test('converts negative fraction string', () => {
    const result = toFraction('-1/2');
    expect(result.getNumerator).toBe(-1);
    expect(result.getDenominator).toBe(2);
  });

  test('converts decimal number', () => {
    const result = toFraction(0.5);
    expect(result.getNumerator).toBe(1);
    expect(result.getDenominator).toBe(2);
  });

  test('converts negative decimal number', () => {
    const result = toFraction(-0.25);
    expect(result.getNumerator).toBe(-1);
    expect(result.getDenominator).toBe(4);
  });

  test('converts whole number', () => {
    const result = toFraction(5);
    expect(result.getNumerator).toBe(5);
    expect(result.getDenominator).toBe(1);
  });

  test('converts negative whole number', () => {
    const result = toFraction(-3);
    expect(result.getNumerator).toBe(-3);
    expect(result.getDenominator).toBe(1);
  });

  test('converts percentage string', () => {
    const result = toFraction('50%');
    expect(result.getNumerator).toBe(1);
    expect(result.getDenominator).toBe(2);
  });

  test('converts negative percentage string', () => {
    const result = toFraction('-25%');
    expect(result.getNumerator).toBe(-1);
    expect(result.getDenominator).toBe(4);
  });

  test('converts ratio string', () => {
    const result = toFraction('2:3');
    expect(result.getNumerator).toBe(2);
    expect(result.getDenominator).toBe(3);
  });

  test('converts negative ratio string', () => {
    const result = toFraction('-2:3');
    expect(result.getNumerator).toBe(-2);
    expect(result.getDenominator).toBe(3);
  });

  test('converts mixed number string', () => {
    const result = toFraction('1 1/2');
    expect(result.getNumerator).toBe(3);
    expect(result.getDenominator).toBe(2);
  });

  test('converts negative mixed number string', () => {
    const result = toFraction('-1 1/2');
    expect(result.getNumerator).toBe(-3);
    expect(result.getDenominator).toBe(2);
  });
    
  test('throws error for invalid input', () => {
    expect(() => toFraction('invalid')).toThrow();
  });
});