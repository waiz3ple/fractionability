import { toFraction } from '../../helper/toFraction';
import { InputType } from '../../types/arithmetic.types';

export function isProper(fraction: InputType): boolean {
  const { getNumerator: numerator, getDenominator: denominator } = toFraction(fraction);
  return Math.abs(numerator) < Math.abs(denominator);
}