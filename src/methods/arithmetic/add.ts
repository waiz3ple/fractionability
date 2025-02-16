// src/methods/add.ts
import Fraction from '../../core/Fraction';
import { toFraction } from '../../helper/toFraction';
import { InputType } from '../../types/arithmetic.types';

export function add(fraction1: InputType, fraction2: InputType): Fraction {
    const fractionA = toFraction(fraction1);
    const fractionB = toFraction(fraction2);

    // Calculate the new numerator and denominator
    const numerator = fractionA.getNumerator * fractionB.getDenominator +
                     fractionB.getNumerator * fractionA.getDenominator;
    const denominator = fractionA.getDenominator * fractionB.getDenominator;

    // Create and return a new Fraction (simplified)
    return new Fraction(numerator, denominator);
}