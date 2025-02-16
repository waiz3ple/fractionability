import Fraction from '../core/Fraction';
import { parseInput } from './parseInput';

type InputType = Fraction | string | number;

// Helper function to convert any input to a Fraction
export function toFraction(input: InputType): Fraction {
    if (input instanceof Fraction) {
        return input; // Already a Fraction, return as-is
    } else {
        const parsed = parseInput(input); // Parse strings or numbers to fraction
        return new Fraction(parsed.numerator, parsed.denominator);
    }
}