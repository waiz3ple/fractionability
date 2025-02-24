//manaually created file to test the library
// Run this file using Node.js to see the output of the library functions  `node usage.js`
// to run unit tests use `npm run test` command
import { add, divide, evaluate, fraction, isEqual, isProper, multiply, subtract } from './dist/index.js';


const logSection = (title) => console.log(`\n=== ${title.toUpperCase()} ===`);
const logTest = (description, result) => console.log(`- ${description}:`, result);

const prettyFraction = (frac) => `${frac.getNumerator}/${frac.getDenominator}`;

// =================== Fraction Creation ===================
logSection('Fraction Creation');
logTest('From decimal (0.75)', prettyFraction(fraction(0.75)));          // '3/4'
logTest('From string fraction (2/3)', prettyFraction(fraction('2/3')));  // '2/3'
logTest('From mixed number (1 2/3)', prettyFraction(fraction('1 2/3'))); // '5/3'
logTest('From percentage (50%)', prettyFraction(fraction('50%')));       // '1/2'
logTest('From ratio (2:3)', prettyFraction(fraction('2:3')));            // '2/3'
logTest('From whole number (5)', prettyFraction(fraction(5)));           // '5/1'
logTest('From negative decimal (-0.5)', prettyFraction(fraction(-0.5))); // '-1/2'
logTest('From zero (0)', prettyFraction(fraction(0)));                   // '0/1'

// =================== Arithmetic Operations ===================
logSection('Arithmetic Operations');

// Addition
logTest('Add 2/3 + 3/7', prettyFraction(add('2/3', '3/7')));             // '23/21'
logTest('Add 0.5 + 0.25', prettyFraction(add(0.5, 0.25)));               // '3/4'
logTest('Chain add 1/4 + 2:3', prettyFraction(fraction('1/4').add('2:3'))); // '11/12'

// Subtraction
logTest('Subtract 5/6 - 1/3', prettyFraction(subtract('5/6', '1/3')));   // '1/2'
logTest('Subtract 3/4 - 0.5', prettyFraction(subtract('3/4', 0.5)));     // '1/4'
logTest('Chain subtract 1 - 1/4', prettyFraction(fraction(1).subtract('1/4'))); // '3/4'

// Multiplication
logTest('Multiply 2/3 * 3/4', prettyFraction(multiply('2/3', '3/4')));   // '1/2'
logTest('Multiply 1/2 * 0.5', prettyFraction(multiply('1/2', 0.5)));     // '1/4'
logTest('Chain multiply 3/5 * 2:3', prettyFraction(fraction('3/5').multiply('2:3'))); // '2/5'

// Division
logTest('Divide 2/3 ÷ 3/4', prettyFraction(divide('2/3', '3/4')));       // '8/9'
logTest('Divide 1/2 ÷ 0.5', prettyFraction(divide('1/2', 0.5)));         // '1/1'
logTest('Chain divide 3/4 ÷ 1/2', prettyFraction(fraction('3/4').divide('1/2'))); // '3/2'

// =================== Expression Evaluation ===================
logSection('Expression Evaluation');
logTest('Evaluate "3 * 1/6"', prettyFraction(evaluate('3 * 1/6')));       // '1/2'
logTest('Evaluate "(1/2 + 1/3) * 3/4"', prettyFraction(evaluate('(1/2 + 1/3) * 3/4'))); // '5/8'
logTest('Evaluate "2/3 - 1/4"', prettyFraction(evaluate('2/3 - 1/4')));  // '5/12'

// =================== Comparisons ===================
logSection('Comparisons');
logTest('isEqual: 50% === 0.5', isEqual('50%', 0.5));                    // true
logTest('isEqual: 2/3 === 4/6', isEqual('2/3', '4/6'));                  // true
logTest('isEqual: 1/3 === 0.333', isEqual('1/3', 0.333));                // false
logTest('isProper: 3/4', isProper('3/4'));                               // true
logTest('isProper: 5/3', isProper('5/3'));                               // false

// =================== Conversions ===================
logSection('Conversions');

// toString
logTest('toString: 7/3', fraction('7/3').toString());                    // '7/3'
logTest('toString: -1/2', fraction('-1/2').toString());                  // '-1/2'
logTest('toString: 4/1', fraction(4).toString());                        // '4'

// toMixedNumber
logTest('toMixedNumber: 7/3', fraction('7/3').toMixedNumber());          // '2 1/3'
logTest('toMixedNumber: -5/2', fraction('-5/2').toMixedNumber());        // '-2 1/2'
logTest('toMixedNumber: 1/2', fraction('1/2').toMixedNumber());          // '0 1/2'

// toDecimal
logTest('toDecimal: 3/4', fraction('3/4').toDecimal());                  // 0.75
logTest('toDecimal: -1/2', fraction('-1/2').toDecimal());                // -0.5
logTest('toDecimal: 5', fraction(5).toDecimal());                        // 5

// toMathML (compact output for brevity)
logTest('toMathML: 3/4', (fraction('3/4').toMathML()).replace(/\s+/g, '')); // '<matharia-label="3over4"><mfrac><mn>3</mn><mn>4</mn></mfrac></math>'
logTest('toMathML: -5/2', (fraction('-5/2').toMathML()).replace(/\s+/g, '')); // '<matharia-label="negative2and1over2"><mo>-</mo><mn>2</mn><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'

// =================== Real-World Scenarios ===================
logSection('Real-World Scenarios');

// Recipe Scaling
const sugar = fraction('1/3');
const scaledSugar = sugar.multiply(2);
logTest('Recipe scaling: Double 1/3 cup', scaledSugar.toMixedNumber());   // '0 2/3'

// Bill Splitting
const totalBill = 150;
const splitRatio = fraction('2:3');
const share1 = multiply(totalBill, fraction('2/5')); // 2/(2+3)
const share2 = subtract(totalBill, share1);
logTest('Bill split (2:3 ratio on $150): Share 1', share1.toString());   // '60'
logTest('Bill split: Share 2', share2.toString());                       // '90'

// Interest Calculation
const principal = 1000;
const rate = fraction('5%');
const interest = multiply(principal, rate);
logTest('Interest on $1000 at 5%', interest.toDecimal());                // 50

// Construction Measurement
const length1 = fraction('2 1/4');
const length2 = fraction('1 3/8');
const totalLength = add(length1, length2);
logTest('Construction: Add 2 1/4 + 1 3/8 feet', totalLength.toMixedNumber()); // '3 5/8'

// =================== Chaining Examples ===================
logSection('Chaining Examples');
logTest('Chain: (2/3 + 1/4) * 2', fraction('2/3').add('1/4').multiply(2).toMixedNumber()); // '1 5/6'
logTest('Chain: 3/4 - 1/2 to decimal', fraction('3/4').subtract('1/2').toDecimal()); // 0.25
logTest('Chain: -1/2 * 50% to MathML', fraction('-1/2').multiply('50%').toMathML().replace(/\s+/g, '')); // '<matharia-label="negative1over4"><mo>-</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></math>'

console.log('\n✨ All tests completed! Explore Fractionability’s power! ✨');