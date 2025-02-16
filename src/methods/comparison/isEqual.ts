import { toFraction } from '../../helper/toFraction';
import { InputType } from '../../types/arithmetic.types';

export function isEqual(fraction1: InputType, fraction2: InputType): boolean {
    const fractionA = toFraction(fraction1);
    const fractionB = toFraction(fraction2);
  return (
    fractionA.getNumerator === fractionB.getNumerator &&
    fractionA.getDenominator === fractionB.getDenominator
  );
}