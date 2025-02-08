import { Fraction } from './fraction';
export function evaluate(expression) {
    if (!isNaN(parseFloat(expression))) {
        const decimal = parseFloat(expression);
        return new Fraction(decimal * 100, 100);
    }
    if (expression.includes('/')) {
        const [numerator, denominator] = expression.split('/').map(Number);
        return new Fraction(numerator, denominator);
    }
    if (expression.includes('√')) {
        const [numerator, radicand] = expression.split('√').map(Number);
        return new Fraction(numerator, Math.sqrt(radicand));
    }
    throw new Error('Invalid expression');
}
//# sourceMappingURL=evaluate.js.map