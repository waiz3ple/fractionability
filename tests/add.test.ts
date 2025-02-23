import { add } from '../src/methods/arithmetic/add';

describe('add function', () => {
    test('adds two positive fractions', () => {
        const result = add('1/2', '1/3');
        expect(result.getNumerator).toBe(5);
        expect(result.getDenominator).toBe(6);
    });

    test('adds a fraction and a whole number', () => {
        const result = add('3/4', 2);
        expect(result.getNumerator).toBe(11);
        expect(result.getDenominator).toBe(4);
    });

    test('adds two whole numbers', () => {
        const result = add(3, 5);
        expect(result.getNumerator).toBe(8);
        expect(result.getDenominator).toBe(1);
    });

    test.skip('adds negative fractions', () => { //to be fixed
        const result = add('-1/2', '1/3');
        expect(result.getNumerator).toBe(-1);
        expect(result.getDenominator).toBe(6);
    });

    test('adds negative and positive whole numbers', () => {
        const result = add(-3, 5);
        expect(result.getNumerator).toBe(2);
        expect(result.getDenominator).toBe(1);
    });

    test('adds improper fractions', () => {
        const result = add('7/4', '5/2');
        expect(result.getNumerator).toBe(17);
        expect(result.getDenominator).toBe(4);
    });

    test('adds zero to a fraction', () => {
        const result = add(0, '3/5');
        expect(result.getNumerator).toBe(3);
        expect(result.getDenominator).toBe(5);
    });

    test('adds zero to zero', () => {
        const result = add(0, 0);
        expect(result.getNumerator).toBe(0);
        expect(result.getDenominator).toBe(1);
    });

    test('throws error for invalid input', () => {
        expect(() => add('abc', '1/2')).toThrow();
        expect(() => add('1/2', 'abc')).toThrow();
    });
});
