import Fraction from '../core/Fraction';
import { gcd } from '../core/gcd';

export function simplify(fraction: Fraction): { numerator: number; denominator: number } {
    const numerator = Number(fraction.getNumerator());
    const denominator = Number(fraction.getDenominator());
    const commonDivisor = gcd(numerator, denominator);    
    return { numerator: numerator / commonDivisor, denominator: denominator / commonDivisor };
}