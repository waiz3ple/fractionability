import Fraction from '../../core/Fraction';
import { toFraction } from '../../helper/toFraction';
import { InputType } from '../../types/arithmetic.types';
import { isProper } from '../comparison/isProper';

export function toMixedNumber(fraction: InputType): string {
    const { getNumerator: numerator, getDenominator: denominator } = toFraction(fraction);
    
    if (isProper(fraction)) {
       return new Fraction(numerator, denominator).toString()
    }
  
  const whole = Math.floor(numerator / denominator);
  const remainder = numerator % denominator;
  return remainder === 0 ? `${whole}` : `${whole} ${remainder}/${denominator}`;
}