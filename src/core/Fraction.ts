import { parseInput } from '../helper/parseInput';
import { add } from '../methods/arithmetic/add';
import { simplify } from '../methods/simplify';
import { toDecimal } from '../methods/toDecimal';
import { toMathML } from '../methods/toMathML';
import { InputType } from '../types/arithmetic.types';
import { divide } from './../methods/arithmetic/divide';
import { multiply } from './../methods/arithmetic/multiply';
import { subtract } from './../methods/arithmetic/subtract';
import { toMixedNumber } from './../methods/conversion/toMixedNumber';
import { toString } from './../methods/toString';

 class Fraction {
    private numerator: number;
    private denominator: number;

    constructor(value: number | string, denominator?: number) {
        if (typeof value === "number" && denominator !== undefined) {
            // Directly assign if both numerator and denominator are provided
            this.numerator = value;
            this.denominator = denominator;
        } else {
            // Use parseInput for numbers/strings like '1/2', '0.25', 0.25 '1 2/3'
            const parsed = parseInput(value);
            this.numerator = parsed.numerator;
            this.denominator = parsed.denominator;
        }

        // Simplify the fraction
        this.simplify();
    }

    public get getNumerator(): number {
        return this.numerator;
    }

    public get getDenominator(): number {
        return this.denominator;
    }
    // Simplify the fraction
    private simplify() {
        const simplified = simplify(this);
        this.numerator = simplified.numerator;
        this.denominator = simplified.denominator;

        // Ensure the denominator is positive
        if (this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }

        // Ensure no math error (denominator cannot be zero)
        if (this.denominator === 0) {
            throw new Error("Denominator cannot be zero");
        }
    }

    // Return the fraction as a string
    public toString(): string {
        return toString(this);
    }

//arithmetics
    public add(value: InputType): Fraction {
        return add(this, value);
    }

     public divide(value: InputType): Fraction {
        return divide(this, value);
    }

    
     public multiply(value: InputType): Fraction {
        return multiply(this, value);
    }

    public subtract(value: InputType): Fraction {
        return subtract(this, value);
    }

    public toMixedNumber(): string {
        return toMixedNumber(this)
    }

     public toDecimal(): number {
        return toDecimal(this)
    }
     
    public toMathML(): string {
        return toMathML(this);
    }
  
    
}
// hybride approach
export function fraction(fraction: number | string): Fraction {
      return new Fraction(fraction)
}

export default Fraction;