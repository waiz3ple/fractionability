
import Fraction from './core/Fraction';
import { isEqual } from './methods/comparison/isEqual';
import { isProper } from './methods/comparison/isProper';
import { evaluate } from './methods/evaluate';
import { toMathML } from './methods/toMathML';
//===============standalone Arithmetics===============
import { add } from './methods/arithmetic/add';

export { add, evaluate, isEqual, isProper, toMathML };
export default Fraction;

