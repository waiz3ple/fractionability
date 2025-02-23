import Fraction from '../../core/Fraction';
import { toFraction } from '../../helper/toFraction';
import { InputType } from '../../types/arithmetic.types';

export function isEqual(fraction1: InputType, fraction2: InputType): boolean {
  const fractionA = toFraction(fraction1);
  const fractionB = toFraction(fraction2);

  // Normalize fractions: ensure denominator is positive
  const normalize = (frac: Fraction) => {
    let num = frac.getNumerator;
    let den = frac.getDenominator;
    if (den < 0) {
      num = -num;
      den = -den;
    }
    return { numerator: num, denominator: den };
  };

  const normalizedA = normalize(fractionA);
  const normalizedB = normalize(fractionB);

  // Use cross-multiplication to compare equivalence
  return (
    normalizedA.numerator * normalizedB.denominator ===
    normalizedB.numerator * normalizedA.denominator
  );
}