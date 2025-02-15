// src/methods/add.ts
import Fraction from '../../core/Fraction';
import { toFraction } from '../../helper/toFraction';

type inputType = Fraction | string | number;

export function add(fraction: inputType, value: inputType): Fraction {
    // Convert both inputs to Fraction objects
    const fractionA = toFraction(fraction);
    const fractionB = toFraction(value);

    // Calculate the new numerator and denominator
    const numerator = fractionA.getNumerator * fractionB.getDenominator +
                     fractionB.getNumerator * fractionA.getDenominator;
    const denominator = fractionA.getDenominator * fractionB.getDenominator;

    // Create and return a new Fraction (simplified)
    return new Fraction(numerator, denominator);
}