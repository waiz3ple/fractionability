import Fraction from '../core/Fraction';
import { toFraction } from '../helper/toFraction';
import { add } from './arithmetic/add';
import { divide } from './arithmetic/divide';
import { multiply } from './arithmetic/multiply';
import { subtract } from './arithmetic/subtract';

// Tokenize numbers (including mixed fractions), operators, and parentheses
const tokenRegex = /(-?\d+\s+\d+\/\d+|-?\d+(?:\/\d+|\.\d+)?)|([+\-*/:()])/g;

// Operator precedence
const precedence: { [key: string]: number } = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  ':': 2,
};

// Left-associative operators
const leftAssociative = ['+', '-', '*', '/', ':'];

export function evaluate(expression: string): Fraction {
  const tokens: string[] = [];
  let match;

  // Tokenize the expression
  while ((match = tokenRegex.exec(expression)) !== null) {
    tokens.push(match[1] || match[2]);
  }

  if (tokens.length === 0) {
    throw new Error('Error evaluating expression: Empty input');
  }

  const numbers: Fraction[] = [];
  const operators: string[] = [];

  // Process tokens with Shunting Yard-like logic
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (/^-?\d+\s+\d+\/\d+$|^-?\d+(?:\/\d+|\.\d+)?$/.test(token)) {
      // Handle numbers, including mixed fractions
      numbers.push(toFraction(token));
    } else if (token === '(') {
      operators.push(token);
    } else if (token === ')') {
      while (operators.length && operators[operators.length - 1] !== '(') {
        applyOperator(numbers, operators.pop()!);
      }
      if (!operators.length) throw new Error('Error evaluating expression: Mismatched parentheses');
      operators.pop(); // Remove '('
    } else if (precedence[token]) {
      while (
        operators.length &&
        operators[operators.length - 1] !== '(' &&
        precedence[operators[operators.length - 1]] >= precedence[token] &&
        leftAssociative.includes(token)
      ) {
        applyOperator(numbers, operators.pop()!);
      }
      operators.push(token);
    } else {
      throw new Error('Error evaluating expression: Invalid token');
    }
  }

  // Apply remaining operators
  while (operators.length) {
    const op = operators.pop()!;
    if (op === '(') throw new Error('Error evaluating expression: Mismatched parentheses');
    applyOperator(numbers, op);
  }

  if (numbers.length === 0) {
    throw new Error('Error evaluating expression: No result');
  }
  if (numbers.length > 1) {
    throw new Error('Error evaluating expression: Incomplete evaluation');
  }

  return numbers[0];
}

// Apply an operator to the top two numbers
function applyOperator(numbers: Fraction[], operator: string): void {
  if (numbers.length < 2) {
    throw new Error('Error evaluating expression: Not enough operands');
  }
  const b = numbers.pop()!;
  const a = numbers.pop()!;

  let result: Fraction;
  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
    case ':':
      if (b.getNumerator === 0) {
        throw new Error('Error evaluating expression: Division by zero');
      }
      result = divide(a, b);
      break;
    default:
      throw new Error(`Error evaluating expression: Unknown operator ${operator}`);
  }
  numbers.push(result);
}