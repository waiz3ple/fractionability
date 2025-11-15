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

function getLowestFraction(decimal: number) {
  // Source: https://stackoverflow.com/a - Posted by Martin R, modified by community. - License - CC BY-SA 3.0
  // TODO: pass in the precision optionally
  var eps = 1.0E-15; // precision, this default roughly corresponds to the number of significant digits of a double precision number
  var h, h1, h2, k, k1, k2, a, x;
  
  x = decimal;
  a = Math.floor(x);
  h1 = 1;
  k1 = 0;
  h = a;
  k = 1;
  
  while (x-a > eps*k*k) {
    x = 1/(x-a);
    a = Math.floor(x);
    h2 = h1; h1 = h;
    k2 = k1; k1 = k;
    h = h2 + a*h1;
    k = k2 + a*k1;
  }
  
  return {numerator: h, denominator: k};
}
