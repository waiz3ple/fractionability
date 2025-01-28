import { greatestCommonDivisor } from './gcd';

export function simplifyFraction(numerator: number, denominator: number): [number, number] {
    const gcd = greatestCommonDivisor(numerator, denominator);
    return [numerator / gcd, denominator / gcd];
}