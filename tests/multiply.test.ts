import Fraction from '../src/core/Fraction';
import { multiply } from '../src/methods/arithmetic/multiply';

describe('multiply', () => {

  test('multiplies two positive fractions correctly', () => {
    const result = multiply('2/3', '3/4');
    expect(result.getNumerator).toBe(1);   
    expect(result.getDenominator).toBe(2); 
  });

  test('multiplies fraction and decimal correctly', () => {
    const result = multiply('2/3', 0.5);
    expect(result.getNumerator).toBe(1);   
    expect(result.getDenominator).toBe(3);
  });

  test('multiplies mixed number and fraction correctly', () => {
    const result = multiply('1 1/2', '2/3');
    expect(result.getNumerator).toBe(1);
    expect(result.getDenominator).toBe(1); 
  });

  test('handles negative fractions', () => {
    const result = multiply('-1/2', '2/3');
    expect(result.getNumerator).toBe(-1);  
    expect(result.getDenominator).toBe(3);
  });

  test('multiplies negative decimal and fraction', () => {
    const result = multiply(-0.5, '2/3');
    expect(result.getNumerator).toBe(-1);  
    expect(result.getDenominator).toBe(3);
  });

  test('multiplies with zero', () => {
    const result = multiply('2/3', 0);
    expect(result.getNumerator).toBe(0);   
    expect(result.getDenominator).toBe(1); 
  });

  test('multiplies percentage and ratio', () => {
    const result = multiply('50%', '2:3');
    expect(result.getNumerator).toBe(1); 
    expect(result.getDenominator).toBe(3); 
  });

  test('returns Fraction instance', () => {
    const result = multiply('2/3', '3/4');
    expect(result).toBeInstanceOf(Fraction);
  });
});