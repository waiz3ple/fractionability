// src/methods/toMixedNumber.ts
import Fraction from '../../core/Fraction';

export function toMixedNumber(fraction: Fraction): string {
  const numerator = fraction.getNumerator();
  const denominator = fraction.getDenominator();
  const whole = Math.floor(numerator / denominator);
  const remainder = numerator % denominator;
  return remainder === 0 ? `${whole}` : `${whole} ${remainder}/${denominator}`;
}