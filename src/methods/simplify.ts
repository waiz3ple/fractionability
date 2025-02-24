import Fraction from '../core/Fraction';
import { gcd } from '../helper/gcd';
import { parseInput } from '../helper/parseInput';
import { InputType } from '../types/arithmetic.types';

export function simplify(fraction: Fraction | InputType): { numerator: number; denominator: number } {
  let num: number, den: number;
  if (fraction instanceof Fraction) {
    num = fraction.getNumerator;
    den = fraction.getDenominator;
  } else {
    const parsed = parseInput(fraction);
    num = parsed.numerator;
    den = parsed.denominator;
  }

  if (den === 0) {
    throw new Error('Denominator cannot be zero');
  }

  // Simplify using GCD
  const commonDivisor = gcd(num, den);
  num = num / commonDivisor;
  den = den / commonDivisor;

  // Normalize sign: ensure denominator is positive
  if (den < 0) {
    num = -num;
    den = -den;
  }

  return { numerator: num, denominator: den };
}