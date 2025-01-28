import { greatestCommonDivisor } from './gcd';

export function leastCommonMultiple(a: number, b: number): number {
    return (a * b) / greatestCommonDivisor(a, b);
}