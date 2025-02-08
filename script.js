import Fraction, { evaluate } from './dist/main';

console.log(evaluate('.25').simplify()); 
console.log(evaluate('2.25').simplify()); 
console.log(evaluate('1/3').simplify()); 
console.log(Fraction('.25')); 