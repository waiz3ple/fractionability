import Fraction from '../../core/Fraction';
import { toFraction } from '../../helper/toFraction';
import { InputType } from '../../types/arithmetic.types';

export function divide(fraction1: InputType, fraction2: InputType): Fraction {
   // Convert both inputs to Fraction objects
    const fractionA = toFraction(fraction1);
    const fractionB = toFraction(fraction2);

    const numerator = fractionA.getNumerator * fractionB.getDenominator;
    const denominator = fractionA.getDenominator * fractionB.getNumerator;
  return new Fraction(`${numerator}/${denominator}`);
}
