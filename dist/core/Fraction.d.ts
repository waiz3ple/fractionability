export default class Fraction {
    private numerator;
    private denominator;
    constructor(value: number | string, denominator?: number);
    private fromDecimal;
    private fromString;
    simplify(): Fraction;
    getNumerator(): number;
    getDenominator(): number;
}
