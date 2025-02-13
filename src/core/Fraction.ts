import { simplify } from "../methods/simplify";

export default class Fraction {
  private numerator!: number;
  private denominator!: number;

  constructor(value: number | string, denominator?: number) {
    if (typeof value === "number") {
      if (denominator !== undefined) {
        // Handle two arguments (numerator and denominator)
        this.numerator = value;
        this.denominator = denominator;
      } else {
        // Handle single number (integer or decimal)
        this.fromDecimal(value);
      }
    } else if (typeof value === "string") {
      // Handle string inputs (integers, fractions, mixed numbers, decimals)
      this.fromString(value);
    } else {
      throw new Error("Invalid input type");
    }

    // Simplify the fraction
    this.simplify();
    }
    
  // Convert a decimal number to a fraction
  private fromDecimal(decimal: number) {
    let denominator = 1;
    while (decimal % 1 !== 0) {
      decimal *= 10;
      denominator *= 10;
    }

    this.numerator = decimal;
    this.denominator = denominator;
    this.simplify();
  }

  // Parse a string input into a fraction
  private fromString(value: string) {
    value = value.trim();

    if (/^\d+$/.test(value)) {
      // Handle whole numbers like '2' or '23'
      this.numerator = parseInt(value, 10);
      this.denominator = 1;
      return;
    }

    if (/^\d+\/\d+$/.test(value)) {
      // Handle fractions like '2/3' or '7/3'
      const [num, den] = value.split("/").map(Number);
      this.numerator = num;
      this.denominator = den;
      return;
    }

    if (/^\d+ \d+\/\d+$/.test(value)) {
      // Handle mixed numbers like '2 1/3' or '5 25/50'
      const [whole, fraction] = value.split(" ");
      const [num, den] = fraction.split("/").map(Number);
      this.numerator = parseInt(whole, 10) * den + num;
      this.denominator = den;
      return;
    }

    if (/^\d+\.\d+$/.test(value)) {
      // Handle decimal strings like '0.5' or '0.025'
      this.fromDecimal(parseFloat(value));
      return;
    }

    throw new Error("Invalid fraction format");
  }

  // Simplify the fraction using the imported simplify function
  public simplify(): Fraction {
    const simplified = simplify(this);
    this.numerator = simplified.numerator;
    this.denominator = simplified.denominator;

    // Ensure the denominator is positive
    if (this.denominator < 0) {
      this.numerator *= -1;
      this.denominator *= -1;
    }
    return this;
  }

    
    public getNumerator() {
        return this.numerator;
    }

    public getDenominator() {
        return this.denominator;
    }
  // Return the fraction as a string
  /*   toString() {
      return `${this.numerator}/${this.denominator}`;
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
    }  */
}



