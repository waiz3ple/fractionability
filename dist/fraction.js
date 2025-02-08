 class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    simplify() {
        const gcd = this.greatestCommonDivisor(this.numerator, this.denominator);
        return new Fraction(this.numerator / gcd, this.denominator / gcd);
    }
    toMixedNumber() {
        if (this.numerator > this.denominator) {
            const wholeNumber = Math.floor(this.numerator / this.denominator);
            const remainder = this.numerator % this.denominator;
            return `${wholeNumber} ${remainder}/${this.denominator}`;
        }
        return `${this.numerator}/${this.denominator}`;
    }
    greatestCommonDivisor(a, b) {
        return b === 0 ? a : this.greatestCommonDivisor(b, a % b);
    }
 }

 export function Fraction (numerator, denominator) {
    return new Fraction(numerator, denominator);
}
//# sourceMappingURL=fraction.js.map