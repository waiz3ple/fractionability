// src/methods/add.ts
import Fraction from '../../core/Fraction';

export function add(fraction1: Fraction, fraction2: Fraction): Fraction {
  const numerator =
    Number(fraction1.getNumerator()) * Number(fraction2.getDenominator()) +
    Number(fraction2.getNumerator()) * Number(fraction1.getDenominator());
  const denominator = Number(fraction1.getDenominator()) * Number(fraction2.getDenominator());
  return new Fraction(`${numerator}/${denominator}`);
}