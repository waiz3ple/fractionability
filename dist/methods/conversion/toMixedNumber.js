export function toMixedNumber(fraction) {
    const numerator = fraction.getNumerator();
    const denominator = fraction.getDenominator();
    const whole = Math.floor(numerator / denominator);
    const remainder = numerator % denominator;
    return remainder === 0 ? `${whole}` : `${whole} ${remainder}/${denominator}`;
}
