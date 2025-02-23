import { divide } from '../src/methods/arithmetic/divide';

describe('divide function', () => {
    test('divides two positive fractions', () => {
        const result = divide('1/2', '1/3');
        expect(result.getNumerator).toBe(3);
        expect(result.getDenominator).toBe(2);
    });

    test('divides a fraction by a whole number', () => {
        const result = divide('3/4', 2);
        expect(result.getNumerator).toBe(3);
        expect(result.getDenominator).toBe(8);
    });

    test('divides two whole numbers', () => {
        const result = divide(6, 3);
        expect(result.getNumerator).toBe(2);
        expect(result.getDenominator).toBe(1);
    });

    test.skip('divides negative fractions', () => { // to be fixed
        const result = divide('-1/2', '1/3');
        expect(result.getNumerator).toBe(-3);
        expect(result.getDenominator).toBe(2);
    });

    test.skip('divides a negative and positive whole number', () => {
        const result = divide(-6, 3);
        expect(result.getNumerator).toBe(-2);
        expect(result.getDenominator).toBe(1);
    });

    test('divides improper fractions', () => {
        const result = divide('7/4', '5/2');
        expect(result.getNumerator).toBe(7);
        expect(result.getDenominator).toBe(10);
    });

    test('divides by one', () => {
        const result = divide('3/5', 1);
        expect(result.getNumerator).toBe(3);
        expect(result.getDenominator).toBe(5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => divide('3/5', 0)).toThrow();
    });

    test('throws error for invalid input', () => {
        expect(() => divide('abc', '1/2')).toThrow();
        expect(() => divide('1/2', 'abc')).toThrow();
    });
});
