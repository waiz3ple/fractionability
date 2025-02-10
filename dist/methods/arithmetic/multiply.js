import Fraction from '../../core/Fraction';
export function multiply(fraction1, fraction2) {
    const numerator = fraction1.getNumerator() * fraction2.getNumerator();
    const denominator = fraction1.getDenominator() * fraction2.getDenominator();
    return new Fraction(`${numerator}/${denominator}`);
}
