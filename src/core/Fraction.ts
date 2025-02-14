import { simplify } from '../methods/simplify';
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
      // Handle string inputs (integers, fractions, mixed numbers, decimals, percentages,   ratios)
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
    // Handle percentages (e.g., '10%')
    if (value.endsWith('%')) {
        const percentValue = parseFloat(value.slice(0, -1));
        this.numerator = percentValue;
        this.denominator = 100;
        return;
    }   
    // Handle ratios (e.g., '2:3')
    if (value.includes(':')) {
        const [num, den] = value.split(':').map(Number);
        this.numerator = num;
        this.denominator = den;
        return;
    }   
    // Handle whole numbers (e.g., '2', '23')
    if (/^\d+$/.test(value)) {
        this.numerator = parseInt(value, 10);
        this.denominator = 1;
        return;
    }   
    // Handle fractions (e.g., '2/3', '7/3')
    if (/^\d+\/\d+$/.test(value)) {
        const [num, den] = value.split('/').map(Number);
        this.numerator = num;
        this.denominator = den;
        return;
    }   
    // Handle mixed numbers (e.g., '2 1/3', '5 25/50')
    if (/^\d+ \d+\/\d+$/.test(value)) {
        const [whole, fraction] = value.split(' ');
        const [num, den] = fraction.split('/').map(Number);
        this.numerator = parseInt(whole, 10) * den + num;
        this.denominator = den;
        return;
    }   
    // Handle decimal strings (e.g., '0.5', '0.025')
    if (/^\d+\.\d+$/.test(value)) {
        this.fromDecimal(parseFloat(value));
        return;
    }   
    throw new Error("Invalid fraction format");
    }   
    // Simplify the fraction 
    private simplify() {
    const simplified = simplify(this)
    this.numerator = simplified.numerator;
    this.denominator = simplified.denominator;  
    // Ensure the denominator is positive
    if (this.denominator < 0) {
        this.numerator *= -1;
        this.denominator *= -1;
        }   
        //Ensure No Math Error
        if (this.denominator === 0 || this.denominator === 0 && this.numerator===0) {
            throw new Error("Denominator can not be zero");           
        }
    }   
    // Return the fraction as a string
    toString() {
    return `${this.numerator}/${this.denominator}`;
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