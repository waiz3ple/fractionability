import Fraction from '../core/Fraction';

export function toDecimal(fraction: Fraction): number {
  return fraction.getNumerator() / fraction.getDenominator();
}