import { FractionError } from './errors';

export function parseInput(input: number | string): { numerator: number; denominator: number } {
  if (typeof input === 'number') {
    return { numerator: input, denominator: 1 };
  }

  // Handle string inputs like '1/4', '0.25', '1 2/3'
  const parts = input.split(' ');
  if (parts.length === 1) {
    const [numerator, denominator] = parts[0].split('/');
    if (!denominator) {
      // Handle decimal inputs like '0.25'
      const decimal = parseFloat(numerator);
      if (isNaN(decimal)) throw new FractionError(`Invalid input: ${input}`);
      return { numerator: decimal * 100, denominator: 100 };
    }
    return { numerator: parseInt(numerator), denominator: parseInt(denominator) };
  } else if (parts.length === 2) {
    // Handle mixed numbers like '1 2/3'
    const whole = parseInt(parts[0]);
    const [numerator, denominator] = parts[1].split('/');
    return { numerator: whole * parseInt(denominator) + parseInt(numerator), denominator: parseInt(denominator) };
  }

  throw new FractionError(`Invalid input: ${input}`);
}