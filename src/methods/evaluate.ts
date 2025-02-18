import { fraction } from '../core/Fraction';
import { toFraction } from '../helper/toFraction';
import { add } from './arithmetic/add';
import { divide } from './arithmetic/divide';
import { multiply } from './arithmetic/multiply';
import { subtract } from './arithmetic/subtract';

// Regex to match arithmetic expressions with fractions, decimals, or integers
const expressionRegex = /\(?\s*(-?\d+(?:\/\d+|\.\d+)?)\s*([+\-*/:])\s*(-?\d+(?:\/\d+|\.\d+)?)\s*\)?/g;

export function evaluate(expression: string) {
    expression = expression.replace(/\s+/g, '');  // Remove all whitespace from the expression

    let previousExpression = "";

    // Keep evaluating until no more expressions are left to evaluate
    while (expression !== previousExpression) {
        previousExpression = expression; // Track the previous expression to detect no change

        expression = expression.replace(expressionRegex, (_, left, operator, right) => {
            try {
                const fractionA = toFraction(left);
                const fractionB = toFraction(right);

                let result;

                switch (operator) {
                    case '+':
                        result = add(fractionA, fractionB);
                        break;
                    case '-':
                        result = subtract(fractionA, fractionB);
                        break;
                    case '*':
                        result = multiply(fractionA, fractionB);
                        break;
                    case '/':
                    case ':':
                        result = divide(fractionA, fractionB);
                        break;
                    default:
                        throw new Error(`Invalid operator: ${operator}`);
                }
                return `${result.getNumerator}/${result.getDenominator}`;
            } catch (error) {
                throw new Error(`Error evaluating expression`);
            }
        });
    }
    return fraction(expression);
}