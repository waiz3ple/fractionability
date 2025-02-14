import Fraction from '../core/Fraction';

export function toDecimal(fraction: Fraction): number {
  return Number(fraction.getNumerator()) / Number(fraction.getDenominator());
}