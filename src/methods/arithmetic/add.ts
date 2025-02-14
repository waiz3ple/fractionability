// src/methods/add.ts
import Fraction from '../../core/Fraction';
import { parseInput } from '../../core/parseInput';

export function add(fraction: Fraction, value: string|number): Fraction {
   const parsed = parseInput(value);
  const numerator =
    Number(fraction.getNumerator()) * Number(parsed.denominator) +
    Number(parsed.numerator) * Number(fraction.getDenominator());
  const denominator = Number(fraction.getDenominator()) * Number(parsed.denominator);
  return new Fraction(`${numerator}/${denominator}`);
}