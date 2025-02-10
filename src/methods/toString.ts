import Fraction from '../core/Fraction';

export function toString(fraction: Fraction): string {
  const numerator = fraction.getNumerator();
  const denominator = fraction.getDenominator();

  // Handle whole numbers (e.g., 3)
  if (denominator === 1) {
    return `${numerator}`;
  }

  // Handle improper fractions (e.g., 7/3)
  return `${numerator}/${denominator}`;
}