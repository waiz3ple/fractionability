// src/methods/subtract.ts
import Fraction from '../../core/Fraction';

export function subtract(fraction1: Fraction, fraction2: Fraction): Fraction {
  const numerator =
    fraction1.getNumerator() * fraction2.getDenominator() -
    fraction2.getNumerator() * fraction1.getDenominator();
  const denominator = fraction1.getDenominator() * fraction2.getDenominator();
  return new Fraction(`${numerator}/${denominator}`);
}