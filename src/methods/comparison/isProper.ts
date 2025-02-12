import Fraction from '../../core/Fraction';

export function isProper(fraction: Fraction): boolean {
  return fraction.getNumerator() < fraction.getDenominator();
}