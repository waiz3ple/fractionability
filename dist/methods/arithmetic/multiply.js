import Fraction from '../../core/Fraction.js';

function multiply(fraction1, fraction2) {
    const numerator = fraction1.getNumerator() * fraction2.getNumerator();
    const denominator = fraction1.getDenominator() * fraction2.getDenominator();
    return new Fraction(`${numerator}/${denominator}`);
}

export { multiply };
//# sourceMappingURL=multiply.js.map
