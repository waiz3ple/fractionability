// src/methods/subtract.ts
import Fraction from '../../core/Fraction';
import { toFraction } from '../../helper/toFraction';
import { InputType } from '../../types/arithmetic.types';

export function subtract(fraction1: InputType, fraction2: InputType): Fraction {
    const fractionA = toFraction(fraction1);
    const fractionB = toFraction(fraction2);
    const numerator = fractionA.getNumerator * fractionB.getDenominator -
                    fractionB.getNumerator * fractionA.getDenominator;
  const denominator = fractionA.getDenominator * fractionB.getDenominator;
  return new Fraction(`${numerator}/${denominator}`);
}
