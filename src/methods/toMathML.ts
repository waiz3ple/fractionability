import Fraction from '../core/Fraction';
import { getAriaLabel } from '../helper/getAriaLabel';
import { isNegative } from '../helper/isNegative';

/**
 * Converts a Fraction instance to an accessible MathML string representation.
 * @param fraction - The Fraction instance to convert.
 * @returns MathML string with proper fraction formatting and accessibility labels.
 */
export function toMathML(fraction: Fraction): string {
  let numerator = fraction.getNumerator;
  let denominator = fraction.getDenominator;

  // Normalize denominator to positive, moving the sign to the numerator
  const isNegativeFraction = isNegative(numerator, denominator);
  if (denominator < 0) {
    numerator = -numerator;
    denominator = -denominator;
  }

  // Absolute values for calculation
  const absNumerator = Math.abs(numerator);
  const absDenominator = Math.abs(denominator);

  // Case 1: Whole number (denominator = 1)
  if (absDenominator === 1) {
    const value = absNumerator;
    return `
      <math aria-label="${getAriaLabel(fraction)}">
        <mn>${isNegativeFraction ? '-' : ''}${value}</mn>
      </math>`;
  }

  // Case 2: Mixed number or improper fraction (convert to mixed form for accessibility)
  const whole = Math.floor(absNumerator / absDenominator);
  const remainder = absNumerator % absDenominator;

  if (whole > 0 && remainder > 0) {
    return `
      <math aria-label="${getAriaLabel(fraction)}">
        ${isNegativeFraction ? '<mo>-</mo>' : ''}
        <mn>${whole}</mn>
        <mfrac>
          <mn>${remainder}</mn>
          <mn>${absDenominator}</mn>
        </mfrac>
      </math>`;
  } else if (whole > 0 && remainder === 0) {
    // Improper fraction simplifies to whole number
    return `
      <math aria-label="${getAriaLabel(fraction)}">
        <mn>${isNegativeFraction ? '-' : ''}${whole}</mn>
      </math>`;
  }

  // Case 3: Proper fraction or zero
  return `
    <math aria-label="${getAriaLabel(fraction)}">
      ${isNegativeFraction && absNumerator !== 0 ? '<mo>-</mo>' : ''}
      <mfrac>
        <mn>${absNumerator}</mn>
        <mn>${absDenominator}</mn>
      </mfrac>
    </math>`;
}