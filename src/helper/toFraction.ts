import Fraction from '../core/Fraction';
import { InputType } from '../types/arithmetic.types';
import { parseInput } from './parseInput';

// Helper function to convert any input to a Fraction
export function toFraction(input: InputType): Fraction {
  if (input instanceof Fraction) {
    return input;
  }
  const parsed = parseInput(input);
  const fraction = new Fraction(parsed.numerator, parsed.denominator);
  return fraction; // Simplification happens in Fraction constructor
}