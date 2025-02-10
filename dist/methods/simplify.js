import Fraction from '../core/Fraction';
import { gcd } from '../core/gcd';
export function simplify(fraction) {
    const numerator = fraction.getNumerator();
    const denominator = fraction.getDenominator();
    const divisor = gcd(numerator, denominator);
    return new Fraction(`${numerator / divisor}/${denominator / divisor}`);
}
