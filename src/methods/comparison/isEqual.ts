import Fraction from '../../core/Fraction'; // Add this line to import Fraction

type fractionValueType = string | number;
export function isEqual(fraction1: fractionValueType, fraction2: fractionValueType): boolean {
    const parsed1 = new Fraction(fraction1);
    const parsed2 = new Fraction(fraction2);
  return (
    parsed1.getNumerator() === parsed2.getNumerator() &&
    parsed1.getDenominator() === parsed2.getDenominator()
  );
}