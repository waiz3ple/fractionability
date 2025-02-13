// src/methods/divide.ts
import Fraction from '../../core/Fraction';

export function divide(fraction1: Fraction, fraction2: Fraction): Fraction {
  const numerator = Number(fraction1.getNumerator()) * Number(fraction2.getDenominator());
  const denominator = Number(fraction1.getDenominator()) * Number(fraction2.getNumerator());
  return new Fraction(`${numerator}/${denominator}`);
}