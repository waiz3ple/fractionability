// src/methods/multiply.ts
import Fraction from '../../core/Fraction';

export function multiply(fraction1: Fraction, fraction2: Fraction): Fraction {
  const numerator = fraction1.getNumerator() * fraction2.getNumerator();
  const denominator = fraction1.getDenominator() * fraction2.getDenominator();
  return new Fraction(`${numerator}/${denominator}`);
}