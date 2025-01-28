import { Fraction } from './fraction';

export function evaluate(expression: string): Fraction {
    // Handle decimals
    if (!isNaN(parseFloat(expression))) {
        const decimal = parseFloat(expression);
        return new Fraction(decimal * 100, 100);
    }

    // Handle fractions (e.g., '3/2')
    if (expression.includes('/')) {
        const [numerator, denominator] = expression.split('/').map(Number);
        return new Fraction(numerator, denominator);
    }

    // Handle roots (e.g., '2√2')
    if (expression.includes('√')) {
        const [numerator, radicand] = expression.split('√').map(Number);
        return new Fraction(numerator, Math.sqrt(radicand));
    }

    throw new Error('Invalid expression');
}