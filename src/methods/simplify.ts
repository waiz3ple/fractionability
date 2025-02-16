import Fraction from '../core/Fraction';
import { gcd } from '../helper/gcd';

export function simplify(fraction: Fraction): { numerator: number; denominator: number } {
    const numerator = fraction.getNumerator;
    const denominator = fraction.getDenominator;
    const commonDivisor = gcd(numerator, denominator);    
    return { numerator: numerator / commonDivisor, denominator: denominator / commonDivisor };
}