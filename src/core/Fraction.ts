import { parseInput } from '../helper/parseInput';
import { add } from '../methods/arithmetic/add';
import { simplify } from '../methods/simplify';
import { toDecimal } from '../methods/toDecimal';
import { toMathML } from '../methods/toMathML';
import { toSkew } from '../methods/toSkew';
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
    if (typeof value === 'number' && denominator !== undefined) {
      // Handle numeric numerator/denominator pair
      if (!Number.isInteger(value) || !Number.isInteger(denominator)) {
        throw new Error('Numerator and denominator must be integers');
      }
      if (denominator === 0) {
        throw new Error('Denominator cannot be zero');
      }
        this.numerator = value;
        this.denominator = denominator;
    } else {
      // Handle single input (string or number) via parseInput
      const parsed = parseInput(value);
        this.numerator = parsed.numerator;
        this.denominator = parsed.denominator;
    }
        // Always simplify after setting initial values
        this.simplify();
      }

    public get getNumerator(): number {
        return this.numerator;
    }

    public get getDenominator(): number {
        return this.denominator;
    }
    // Simplify the fraction
    private simplify():void {
        const simplified = simplify(this);
        this.numerator = simplified.numerator;
        this.denominator = simplified.denominator;
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
   // renamed to toStack. we keep toMathML for backwards compatibility
       public toStack(): string {  
        return toMathML(this);
    }
    
     public toSkew(): string {
        return toSkew(this);
    } 
}
// hybride approach
export function fraction(value: number | string, denominator?: number): Fraction {
      return new Fraction(value, denominator);
}

export default Fraction;