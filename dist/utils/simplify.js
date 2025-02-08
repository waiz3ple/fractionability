import { greatestCommonDivisor } from './gcd';
export function simplifyFraction(numerator, denominator) {
    const gcd = greatestCommonDivisor(numerator, denominator);
    return [numerator / gcd, denominator / gcd];
}
//# sourceMappingURL=simplify.js.map