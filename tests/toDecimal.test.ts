import Fraction from '../src/core/Fraction';

describe('Fraction.toDecimal', () => {
  test('converts positive proper fraction to decimal', () => {
    const fraction = new Fraction(1, 2);
    expect(fraction.toDecimal()).toBe(0.5);
  });

  test('converts positive improper fraction to decimal', () => {
    const fraction = new Fraction(3, 2);
    expect(fraction.toDecimal()).toBe(1.5);
  });

  test('converts whole number fraction to decimal', () => {
    const fraction = new Fraction(4, 1);
    expect(fraction.toDecimal()).toBe(4);
  });

  test('handles negative numerator correctly', () => {
    const fraction = new Fraction(-1, 2);
    expect(fraction.toDecimal()).toBe(-0.5);
  });

  test('handles negative denominator correctly', () => {
    const fraction = new Fraction(1, -2);
    expect(fraction.toDecimal()).toBe(-0.5);
  });

  test('handles both negative numerator and denominator', () => {
    const fraction = new Fraction(-1, -2);
    expect(fraction.toDecimal()).toBe(0.5);
  });

  test('converts zero numerator to zero', () => {
    const fraction = new Fraction(0, 5);
    expect(fraction.toDecimal()).toBe(0);
  });

  test('handles large numbers with simplification', () => {
    const fraction = new Fraction(100, 25); // Simplifies to 4/1
    expect(fraction.toDecimal()).toBe(4);
  });

  test('converts simplified fraction from string input', () => {
    const fraction = new Fraction('4/8'); // Simplifies to 1/2
    expect(fraction.toDecimal()).toBe(0.5);
  });

  test('handles negative fraction string input', () => {
    const fraction = new Fraction('-2/4'); // Simplifies to -1/2
    expect(fraction.toDecimal()).toBe(-0.5);
  });
});