import Fraction from '../../core/Fraction.js';

function divide(fraction1, fraction2) {
    const numerator = fraction1.getNumerator() * fraction2.getDenominator();
    const denominator = fraction1.getDenominator() * fraction2.getNumerator();
    return new Fraction(`${numerator}/${denominator}`);
}

export { divide };
//# sourceMappingURL=divide.js.map
