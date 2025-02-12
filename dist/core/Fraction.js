import { simplify } from '../methods/simplify.js';

class Fraction {
    constructor(value, denominator) {
        if (typeof value === "number") {
            if (denominator !== undefined) {
                this.numerator = value;
                this.denominator = denominator;
            }
            else {
                this.fromDecimal(value);
            }
        }
        else if (typeof value === "string") {
            this.fromString(value);
        }
        else {
            throw new Error("Invalid input type");
        }
        this.simplify();
    }
    fromDecimal(decimal) {
        let denominator = 1;
        while (decimal % 1 !== 0) {
            decimal *= 10;
            denominator *= 10;
        }
        this.numerator = decimal;
        this.denominator = denominator;
        this.simplify();
    }
    fromString(value) {
        value = value.trim();
        if (/^\d+$/.test(value)) {
            this.numerator = parseInt(value, 10);
            this.denominator = 1;
            return;
        }
        if (/^\d+\/\d+$/.test(value)) {
            const [num, den] = value.split("/").map(Number);
            this.numerator = num;
            this.denominator = den;
            return;
        }
        if (/^\d+ \d+\/\d+$/.test(value)) {
            const [whole, fraction] = value.split(" ");
            const [num, den] = fraction.split("/").map(Number);
            this.numerator = parseInt(whole, 10) * den + num;
            this.denominator = den;
            return;
        }
        if (/^\d+\.\d+$/.test(value)) {
            this.fromDecimal(parseFloat(value));
            return;
        }
        throw new Error("Invalid fraction format");
    }
    simplify() {
        const simplified = simplify(this);
        this.numerator = simplified.numerator;
        this.denominator = simplified.denominator;
        if (this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    }
    getNumerator() {
        return this.numerator;
    }
    getDenominator() {
        return this.denominator;
    }
}

export { Fraction as default };
//# sourceMappingURL=Fraction.js.map
