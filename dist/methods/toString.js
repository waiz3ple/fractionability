export function toString(fraction) {
    const numerator = fraction.getNumerator();
    const denominator = fraction.getDenominator();
    if (denominator === 1) {
        return `${numerator}`;
    }
    return `${numerator}/${denominator}`;
}
