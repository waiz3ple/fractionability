
import Fraction, { fraction } from './core/Fraction';
import { isEqual } from './methods/comparison/isEqual';
import { isProper } from './methods/comparison/isProper';
import { evaluate } from './methods/evaluate';
import { toMathML } from './methods/toMathML';
//===============standalone Arithmetics===============
import { add } from './methods/arithmetic/add';
import { divide } from './methods/arithmetic/divide';
import { multiply } from './methods/arithmetic/multiply';
import { subtract } from './methods/arithmetic/subtract';

export {
    add, divide, evaluate, fraction, isEqual,
    isProper, multiply, subtract,
    toMathML
};
    
export default Fraction;

