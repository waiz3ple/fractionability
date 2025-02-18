import Fraction from '../core/Fraction';

export function toMathML(fraction: Fraction): string {
  const numerator: number = fraction.getNumerator;
  const denominator: number = fraction.getDenominator;

  // Handle whole numbers (e.g., 3)
  if (denominator === 1) {
    return `<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mn>${numerator}</mn>
            </math>`;
  }

  // Handle mixed numbers (e.g., 3 1/3)
  const whole = Math.floor(numerator / denominator);
  const remainder = numerator % denominator;

  if (whole > 0) {
    return `<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mn>${whole}</mn>
              <mfrac>
                <mn>${remainder}</mn>
                <mn>${denominator}</mn>
              </mfrac>
            </math>`;
  }

  // Handle proper fractions (e.g., 1/4)
  return `<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mfrac>
              <mn>${numerator}</mn>
              <mn>${denominator}</mn>
            </mfrac>
          </math>`;
}