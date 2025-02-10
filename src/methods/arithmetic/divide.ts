// src/methods/divide.ts
import Fraction from '../../core/Fraction';

export function divide(fraction1: Fraction, fraction2: Fraction): Fraction {
  const numerator = fraction1.getNumerator() * fraction2.getDenominator();
  const denominator = fraction1.getDenominator() * fraction2.getNumerator();
  return new Fraction(`${numerator}/${denominator}`);
}