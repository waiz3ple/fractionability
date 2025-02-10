import { simplify } from '../methods/simplify';
import { toDecimal } from '../methods/toDecimal';
import { toMathML } from '../methods/toMathML';
import { toString } from '../methods/toString';
import { parseInput } from './parseInput';
export default class Fraction {
    constructor(input) {
        const parsed = parseInput(input);
        this.numerator = parsed.numerator;
        this.denominator = parsed.denominator;
    }
    getNumerator() {
        return this.numerator;
    }
    getDenominator() {
        return this.denominator;
    }
    simplify() {
        return simplify(this);
    }
    toMathML() {
        return toMathML(this);
    }
    toString() {
        return toString(this);
    }
    toDecimal() {
        return toDecimal(this);
    }
}
