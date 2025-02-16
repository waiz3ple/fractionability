import { FractionError } from '../core/errors';

export function parseInput(input: number | string): { numerator: number; denominator: number } {

    const value = input?.toString().trim();

    // Handle percentages (e.g., '10%')
    if (value?.endsWith('%')) {
        const percentValue = parseFloat(value.slice(0, -1));
        if (isNaN(percentValue)) throw new FractionError(`Invalid percentage: ${value}`);
        return { numerator: percentValue, denominator: 100 };
    }

    // Handle ratios (e.g., '2:3')
    if (value?.includes(':')) {
        const [num, den] = value.split(':').map(Number);
        if (isNaN(num) || isNaN(den)) throw new FractionError(`Invalid ratio: ${value}`);
        return { numerator: num, denominator: den };
    }

    // Handle whole numbers (e.g., '2', '23')
    if (/^\d+$/.test(value)) {
        const numerator = parseInt(value, 10);
        if (isNaN(numerator)) throw new FractionError(`Invalid whole number: ${value}`);
        return { numerator, denominator: 1 };
    }

    // Handle fractions (e.g., '2/3', '7/3')
    if (/^\d+\/\d+$/.test(value)) {
        const [num, den] = value.split('/').map(Number);
        if (isNaN(num) || isNaN(den)) throw new FractionError(`Invalid fraction: ${value}`);
        return { numerator: num, denominator: den };
    }

    // Handle mixed numbers (e.g., '2 1/3', '5 25/50')
    if (/^\d+ \d+\/\d+$/.test(value)) {
        const [whole, fraction] = value.split(' ');
        const [num, den] = fraction.split('/').map(Number);
        if (isNaN(parseInt(whole, 10)) || isNaN(num) || isNaN(den)) {
            throw new FractionError(`Invalid mixed number: ${value}`);
        }
        return { numerator: parseInt(whole, 10) * den + num, denominator: den };
    }

    // Handle decimal strings (e.g., '0.5', '0.025')
    if (/^\d+\.\d+$/.test(value)) {
        let decimal = parseFloat(value);
        if (isNaN(decimal)) throw new FractionError(`Invalid decimal: ${value}`);
        let denominator = 1;
        while (decimal % 1 !== 0) {
            decimal *= 10;
            denominator *= 10;
        }
        return { numerator: decimal, denominator };
    }

     if (typeof input === 'number') {
        // Handle numbers directly
        return { numerator: input, denominator: 1 };
    } 

    throw new FractionError(`Invalid input format: ${value}`);
}