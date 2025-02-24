import Fraction from '../core/Fraction';

export function toString(fraction: Fraction): string {
  const numerator = fraction.getNumerator;
  const denominator = fraction.getDenominator;

 if (denominator === 0) {
      throw new Error('Denominator cannot be zero');
    }

    const isNegative = numerator < 0 !== denominator < 0;
    const absNumerator = Math.abs(numerator);
    const absDenominator = Math.abs(denominator);
    const sign = isNegative ? '-' : '';

    if (absNumerator === absDenominator) {
      return `${sign}1`;
    }
    if (absDenominator === 1) {
      return `${sign}${absNumerator}`;
    }
    return `${sign}${absNumerator}/${absDenominator}`;
}