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
    return getLowestFraction(isNegative ? -decimal : decimal)
  }

  // Handle numeric input directly (e.g., 2, -0.5)
  if (typeof input === 'number' && !isNaN(input)) {
    if (Number.isInteger(input)) {
      return { numerator: input, denominator: 1 };
    }
    return getLowestFraction(input)
  }
  
  throw new FractionError(`Invalid input format: ${input}`);
}

/**
 * Gets the lowest fraction that a number was trying to represent.
 * @param decimal - the number we're turning into a fraction
 * @param precision - this default roughly corresponds to the number of significant digits of a double precision number
 * @license CC BY-SA 3.0
 * @see https://stackoverflow.com/a/14011299 Posted by Martin R, modified by community.
*/
function getLowestFraction(decimal: number, precision = 1.0E-15) {
  let remaining = decimal
  let integerPart = Math.floor(remaining)
  let previousNumerator = 1
  let previousDenominator = 0
  let numerator = integerPart
  let denominator = 1
  
  while (remaining - integerPart > precision * denominator * denominator) {
    remaining = 1 / (remaining - integerPart)
    integerPart = Math.floor(remaining)
    let temporaryNumerator = previousNumerator; previousNumerator = numerator
    let temporaryDenominator = previousDenominator; previousDenominator = denominator
    numerator = temporaryNumerator + integerPart * previousNumerator
    denominator = temporaryDenominator + integerPart * previousDenominator
  }
  
  return {numerator, denominator};
}
