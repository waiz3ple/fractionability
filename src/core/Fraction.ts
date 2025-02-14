import { add } from '../methods/arithmetic/add';
import { simplify } from '../methods/simplify';
import { divide } from './../methods/arithmetic/divide';
import { parseInput } from './parseInput';

export default class Fraction {
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

    public getNumerator(): number {
        return this.numerator;
    }

    public getDenominator(): number {
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
        return `${this.numerator}/${this.denominator}`;
    }


    public add(value: number | string): Fraction {
        return add(this, value);
    }

     public divide(value: number | string): Fraction {
        return divide(this, value);
    }
    
     /*
    public simplify(): Fraction {
        return simplify(this);
    }

    public toMathML(): string {
        return toMathML(this);
    }

    public toDecimal(): number {
        return toDecimal(this);
    }  */
    
}