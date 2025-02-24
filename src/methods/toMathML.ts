import Fraction from '../core/Fraction';

export function toMathML(fraction: Fraction): string {
  let numerator = fraction.getNumerator;
  let denominator = fraction.getDenominator;

  // Normalize sign: ensure denominator is positive, move sign to numerator
  const isNegative = (numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0) || (numerator < 0 && denominator < 0 && Math.abs(numerator) >= Math.abs(denominator));
  if (denominator < 0) {
    numerator = -numerator;
    denominator = -denominator;
  }

  // Absolute values for calculation
  const absNumerator = Math.abs(numerator);
  const absDenominator = Math.abs(denominator);

  // Helper to generate readable aria-label
  const getAriaLabel = (whole: number, num: number, den: number): string => {
    const sign = isNegative ? 'negative ' : '';
    if (whole === 0 && num === 0) return `${sign}zero`;
    if (whole === 0) return `${sign}${num} over ${den}`;
    if (num === 0) return `${sign}${whole}`;
    return `${sign}${whole} and ${num} over ${den}`;
  };

  // Case 1: Whole number (denominator = 1)
  if (absDenominator === 1) {
    const value = absNumerator;
    return `<math aria-label="${getAriaLabel(value, 0, 1)}">
              <mn>${isNegative ? -value : value}</mn>
            </math>`;
  }

  // Case 2: Mixed number or improper fraction (convert to mixed form for accessibility)
  const whole = Math.floor(absNumerator / absDenominator);
  const remainder = absNumerator % absDenominator;

  if (whole > 0 && remainder > 0) {
    return `<math aria-label="${getAriaLabel(whole, remainder, absDenominator)}">
              ${isNegative ? '<mo>-</mo>' : ''}
              <mn>${whole}</mn>
              <mfrac>
                <mn>${remainder}</mn>
                <mn>${absDenominator}</mn>
              </mfrac>
            </math>`;
  } else if (whole > 0 && remainder === 0) {
    // Improper fraction simplifies to whole number
    return `<math aria-label="${getAriaLabel(whole, 0, 1)}">
              <mn>${isNegative ? -whole : whole}</mn>
            </math>`;
  }

  // Case 3: Proper fraction or zero
  return `<math aria-label="${getAriaLabel(0, absNumerator, absDenominator)}">
            ${isNegative && absNumerator !== 0 ? '<mo>-</mo>' : ''}
            <mfrac>
              <mn>${absNumerator}</mn>
              <mn>${absDenominator}</mn>
            </mfrac>
          </math>`;
}