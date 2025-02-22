import Fraction, { fraction } from '../src/core/Fraction';

describe('Fraction Class', () => {
    describe('Constructor', () => {
        test('should create a fraction from numerator and denominator', () => {
            const fraction = new Fraction(3, 4);
            expect(fraction.getNumerator).toBe(3);
            expect(fraction.getDenominator).toBe(4);
        });

        test('should create a fraction from a decimal string', () => {
            const fraction = new Fraction('0.75');
            expect(fraction.getNumerator).toBe(3);
            expect(fraction.getDenominator).toBe(4);
        });

        test('should create a fraction from a fraction string', () => {
            const fraction = new Fraction('3/4');
            expect(fraction.getNumerator).toBe(3);
            expect(fraction.getDenominator).toBe(4);
        });

        test('should create a fraction from a mixed number string', () => {
            const fraction = new Fraction('1 1/2');
            expect(fraction.getNumerator).toBe(3);
            expect(fraction.getDenominator).toBe(2);
        });

        test('should throw an error if denominator is zero', () => {
            expect(() => new Fraction(1, 0)).toThrow('Denominator cannot be zero');
        });
    });

    describe('Simplification', () => {
        test('should simplify the fraction', () => {
            const fraction = new Fraction(4, 8);
            expect(fraction.getNumerator).toBe(1);
            expect(fraction.getDenominator).toBe(2);
        });

        test('should ensure the denominator is positive', () => {
            const fraction = new Fraction(3, -4);
            expect(fraction.getNumerator).toBe(-3);
            expect(fraction.getDenominator).toBe(4);
        });
    });

    describe('Arithmetic Operations', () => {
        test('should add two fractions', () => {
            const fraction1 = new Fraction(1, 2);
            const fraction2 = new Fraction(1, 4);
            const result = fraction1.add(fraction2);
            expect(result.getNumerator).toBe(3);
            expect(result.getDenominator).toBe(4);
        });

        test('should subtract two fractions', () => {
            const fraction1 = new Fraction(3, 4);
            const fraction2 = new Fraction(1, 4);
            const result = fraction1.subtract(fraction2);
            expect(result.getNumerator).toBe(1);
            expect(result.getDenominator).toBe(2);
        });

        test('should multiply two fractions', () => {
            const fraction1 = new Fraction(1, 2);
            const fraction2 = new Fraction(2, 3);
            const result = fraction1.multiply(fraction2);
            expect(result.getNumerator).toBe(1);
            expect(result.getDenominator).toBe(3);
        });

        test('should divide two fractions', () => {
            const fraction1 = new Fraction(1, 2);
            const fraction2 = new Fraction(3, 4);
            const result = fraction1.divide(fraction2);
            expect(result.getNumerator).toBe(2);
            expect(result.getDenominator).toBe(3);
        });
    });

    describe('Utility Methods', () => {
        test('should convert fraction to mixed number', () => {
            const fraction = new Fraction(7, 4);
            expect(fraction.toMixedNumber()).toBe('1 3/4');
        });

        test('should convert fraction to decimal', () => {
            const fraction = new Fraction(3, 4);
            expect(fraction.toDecimal()).toBe(0.75);
        });

        test('should convert fraction to MathML', () => {
            const fraction = new Fraction(3, 4);
            expect(fraction.toMathML()).toBe('<mfrac><mn>3</mn><mn>4</mn></mfrac>');
        });

        test('should return fraction as string', () => {
            const fraction = new Fraction(3, 4);
            expect(fraction.toString()).toBe('3/4');
        });
    });

    describe('Fraction Function', () => {
        test('should create a fraction using the fraction function', () => {
            const fractionInstance = fraction('3/4');
            expect(fractionInstance.getNumerator).toBe(3);
            expect(fractionInstance.getDenominator).toBe(4);
        });
    });
});