import { toFraction } from '../../helper/toFraction';
import { InputType } from '../../types/arithmetic.types';

export function toMixedNumber(fraction: InputType): string {
  const { getNumerator: numerator, getDenominator: denominator } = toFraction(fraction);

  // Handle division by zero (should be prevented by Fraction constructor)
  if (denominator === 0) {
    throw new Error('Denominator cannot be zero');
  }

  // Normalize sign: ensure denominator is positive
  const isNegative = numerator < 0 !== denominator < 0; // True if result is negative
  const absNumerator = Math.abs(numerator);
  const absDenominator = Math.abs(denominator);

  // Calculate whole and remainder parts
  const whole = Math.floor(absNumerator / absDenominator);
  const remainder = absNumerator % absDenominator;

  // Handle zero numerator
  if (absNumerator === 0) {
    return '0';
  }

  // Construct mixed number string
  const sign = isNegative ? '-' : '';
  if (remainder === 0) {
    return `${sign}${whole}`; // Whole number only
  }
  if (whole === 0) {
    return `${sign}${remainder}/${absDenominator}`; // Proper fraction
  }
  return `${sign}${whole} ${remainder}/${absDenominator}`; // Mixed number
}