import { simplify } from '../methods/simplify';
import { toDecimal } from '../methods/toDecimal';
import { toMathML } from '../methods/toMathML';
import { toString } from '../methods/toString';
import { parseInput } from './parseInput';

export default class Fraction {
  private numerator: number;
  private denominator: number;

  constructor(input: number | string) {
    const parsed = parseInput(input);
    this.numerator = parsed.numerator;
    this.denominator = parsed.denominator;
  }

  public getNumerator(): number {
    return this.numerator;
  }

  public getDenominator(): number {
    return this.denominator;
  }

  public simplify(): Fraction {
    return simplify(this);
  }

  public toMathML(): string {
    return toMathML(this);
  }

  public toString(): string {
      return toString(this);
  }

  public toDecimal(): number {
    return toDecimal(this);
  }
}