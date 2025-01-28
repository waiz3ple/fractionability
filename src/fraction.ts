export class Fraction {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    simplify(): Fraction {
        const gcd = this.greatestCommonDivisor(this.numerator, this.denominator);
        return new Fraction(this.numerator / gcd, this.denominator / gcd);
    }

    toMixedNumber(): string {
        if (this.numerator > this.denominator) {
            const wholeNumber = Math.floor(this.numerator / this.denominator);
            const remainder = this.numerator % this.denominator;
            return `${wholeNumber} ${remainder}/${this.denominator}`;
        }
        return `${this.numerator}/${this.denominator}`;
    }

    private greatestCommonDivisor(a: number, b: number): number {
        return b === 0 ? a : this.greatestCommonDivisor(b, a % b);
    }
}
