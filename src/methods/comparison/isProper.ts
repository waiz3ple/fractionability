import Fraction from '../../core/Fraction';

export function isProper(fraction: string| number): boolean {
   const parsed = new Fraction(fraction)
  return parsed.getNumerator() < parsed.getDenominator();
}