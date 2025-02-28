import Fraction from '../core/Fraction';
import { isNegative } from './isNegative';

/**
 * Generates a readable aria-label for a fraction, handling negative values correctly.
 * @param fraction - The Fraction instance to generate a label for.
 * @returns String description for screen readers (e.g., "negative 1 over 2").
 */
export function getAriaLabel(fraction: Fraction): string {
  const numerator = fraction.getNumerator;
  const denominator = fraction.getDenominator;

  if (denominator === 0) throw new Error('Denominator cannot be zero');

  // Normalize denominator to positive (move sign to numerator)
  let absNumerator = Math.abs(numerator);
  let absDenominator = Math.abs(denominator);
  const isNegativeFraction = isNegative(numerator, denominator);

  // Calculate whole number and remainder
  const whole = Math.floor(absNumerator / absDenominator);
  const remainder = absNumerator % absDenominator;

  const sign = isNegativeFraction ? 'negative ' : '';
  if (whole === 0 && remainder === 0) return `${sign}zero`;
  if (whole === 0) return `${sign}${remainder} over ${absDenominator}`;
  if (remainder === 0) return `${sign}${whole}`;
  return `${sign}${whole} and ${remainder} over ${absDenominator}`;
}