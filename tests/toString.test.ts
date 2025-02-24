import Fraction, { fraction } from '../src/core/Fraction';

describe('Fraction.toString', () => {
  test('converts positive proper fraction', () => {
    expect(fraction('1/2').toString()).toBe('1/2');
    expect(new Fraction(1, 2).toString()).toBe('1/2');
  });

  test('converts positive improper fraction', () => {
    expect(fraction('3/2').toString()).toBe('3/2');
    expect(new Fraction(3, 2).toString()).toBe('3/2');
  });

  test('converts positive whole number', () => {
    expect(fraction(3).toString()).toBe('3');
    expect(new Fraction(3, 1).toString()).toBe('3');
  });

  test('handles negative numerator', () => {
    expect(fraction('-1/2').toString()).toBe('-1/2');
    expect(new Fraction(-1, 2).toString()).toBe('-1/2');
  });

  test('handles negative denominator', () => {
    expect(new Fraction(1, -2).toString()).toBe('-1/2');
  });

  test('handles both negative numerator and denominator', () => {
    expect(new Fraction(-1, -2).toString()).toBe('1/2');
  });

  test('converts zero numerator', () => {
    expect(fraction(0).toString()).toBe('0');
    expect(new Fraction(0, 5).toString()).toBe('0');
  });

  test('handles numerator equal to denominator', () => {
    expect(new Fraction(2, 2).toString()).toBe('1');
  });

  test('handles negative numerator and denominator equal', () => {
    expect(new Fraction(-3, -3).toString()).toBe('1');
  });

  test('handles large numbers with simplification', () => {
    expect(fraction('100/25').toString()).toBe('4'); // Simplified to 4/1
    expect(new Fraction(100, 25).toString()).toBe('4');
  });
});