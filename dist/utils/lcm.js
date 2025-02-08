import { greatestCommonDivisor } from './gcd';
export function leastCommonMultiple(a, b) {
    return (a * b) / greatestCommonDivisor(a, b);
}
//# sourceMappingURL=lcm.js.map