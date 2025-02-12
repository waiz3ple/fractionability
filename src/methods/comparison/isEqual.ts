import Fraction from '../../core/Fraction';

export function isEqual(fraction1: Fraction, fraction2: Fraction): boolean {
  return (
    fraction1.getNumerator() === fraction2.getNumerator() &&
    fraction1.getDenominator() === fraction2.getDenominator()
  );
}