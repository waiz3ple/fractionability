import Fraction from '../../core/Fraction.js';

function add(fraction1, fraction2) {
    const numerator = fraction1.getNumerator() * fraction2.getDenominator() +
        fraction2.getNumerator() * fraction1.getDenominator();
    const denominator = fraction1.getDenominator() * fraction2.getDenominator();
    return new Fraction(`${numerator}/${denominator}`);
}

export { add };
//# sourceMappingURL=add.js.map
