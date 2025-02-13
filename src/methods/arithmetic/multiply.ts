// src/methods/multiply.ts
import Fraction from '../../core/Fraction';

export function multiply(fraction1: Fraction, fraction2: Fraction): Fraction {
  const numerator = Number(fraction1.getNumerator()) * Number(fraction2.getNumerator());
  const denominator = Number(fraction1.getDenominator()) * Number(fraction2.getDenominator());
  return new Fraction(`${numerator}/${denominator}`);
}