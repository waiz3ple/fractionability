// src/methods/divide.ts
import Fraction from '../../core/Fraction';
import { parseInput } from '../../core/parseInput';

export function divide(fraction: Fraction, value: string | number): Fraction {
    const parsed = parseInput(value);
    const numerator = Number(fraction.getNumerator()) * Number(parsed.denominator);
    const denominator = Number(fraction.getDenominator()) * Number(parsed.numerator);
  return new Fraction(`${numerator}/${denominator}`);
}