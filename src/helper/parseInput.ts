import { FractionError } from '../core/errors';

export function parseInput(input: number | string): { numerator: number; denominator: number } {
  let value = input?.toString().trim();
  if (!value) throw new FractionError('Input cannot be empty');

  // Handle negative inputs
  let isNegative = false;
  if (value.startsWith('-')) {
    isNegative = true;
    value = value.slice(1); // Remove leading '-'
  }

  // Handle percentages (e.g., '10%', '-10%')
  if (value.endsWith('%')) {
    const percentValue = parseFloat(value.slice(0, -1));
    if (isNaN(percentValue)) throw new FractionError(`Invalid percentage: ${value}`);
    return { numerator: isNegative ? -percentValue : percentValue, denominator: 100 };
  }

  // Handle ratios (e.g., '2:3', '-2:3')
  if (value.includes(':')) {
    const [num, den] = value.split(':').map(Number);
    if (isNaN(num) || isNaN(den) || den === 0) throw new FractionError(`Invalid ratio: ${value}`);
    return { numerator: isNegative ? -num : num, denominator: den };
  }

  // Handle whole numbers (e.g., '2', '-2')
  if (/^\d+$/.test(value)) {
    const numerator = parseInt(value, 10);
    if (isNaN(numerator)) throw new FractionError(`Invalid whole number: ${value}`);
    return { numerator: isNegative ? -numerator : numerator, denominator: 1 };
  }

  // Handle fractions (e.g., '2/3', '-2/3')
  if (/^\d+\/\d+$/.test(value)) {
    const [num, den] = value.split('/').map(Number);
    if (isNaN(num) || isNaN(den) || den === 0) throw new FractionError(`Invalid fraction: ${value}`);
    return { numerator: isNegative ? -num : num, denominator: den };
  }

  // Handle mixed numbers (e.g., '2 1/3', '-2 1/3')
  if (/^\d+ \d+\/\d+$/.test(value)) {
    const [whole, fraction] = value.split(' ');
    const [num, den] = fraction.split('/').map(Number);
    if (isNaN(parseInt(whole, 10)) || isNaN(num) || isNaN(den) || den === 0) {
      throw new FractionError(`Invalid mixed number: ${value}`);
    }
    const numerator = parseInt(whole, 10) * den + num;
    return { numerator: isNegative ? -numerator : numerator, denominator: den };
  }

  // Handle decimal strings (e.g., '0.5', '-0.5')
  if (/^\d+\.\d+$/.test(value)) {
    let decimal = parseFloat(value);
    if (isNaN(decimal)) throw new FractionError(`Invalid decimal: ${value}`);
    let denominator = 1;
    while (decimal % 1 !== 0) {
      decimal *= 10;
      denominator *= 10;
    }
    return { numerator: isNegative ? -decimal : decimal, denominator };
  }

  // Handle numeric input directly (e.g., 2, -0.5)
  if (typeof input === 'number' && !isNaN(input)) {
    if (Number.isInteger(input)) {
      return { numerator: input, denominator: 1 };
    }
    let decimal = input;
    let denominator = 1;
    while (decimal % 1 !== 0) {
      decimal *= 10;
      denominator *= 10;
    }
    return { numerator: decimal, denominator };
  }

  throw new FractionError(`Invalid input format: ${input}`);
}