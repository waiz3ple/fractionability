import { FractionError } from './errors.js';

function parseInput(input) {
    if (typeof input === 'number') {
        return { numerator: input, denominator: 1 };
    }
    const parts = input.split(' ');
    if (parts.length === 1) {
        const [numerator, denominator] = parts[0].split('/');
        if (!denominator) {
            const decimal = parseFloat(numerator);
            if (isNaN(decimal))
                throw new FractionError(`Invalid input: ${input}`);
            return { numerator: decimal * 100, denominator: 100 };
        }
        return { numerator: parseInt(numerator), denominator: parseInt(denominator) };
    }
    else if (parts.length === 2) {
        const whole = parseInt(parts[0]);
        const [numerator, denominator] = parts[1].split('/');
        return { numerator: whole * parseInt(denominator) + parseInt(numerator), denominator: parseInt(denominator) };
    }
    throw new FractionError(`Invalid input: ${input}`);
}

export { parseInput };
//# sourceMappingURL=parseInput.js.map
