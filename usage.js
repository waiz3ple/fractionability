import Fraction, { add, divide, isEqual, isProper } from './dist/index.js';

// =================== Fraction Creation ===================
console.log(new Fraction(2, 3)); // { numerator: 2, denominator: 3 }
console.log(new Fraction(2)); // { numerator: 2, denominator: 1 }
console.log(new Fraction('2')); // { numerator: 2, denominator: 1 }
console.log(new Fraction('23')); // { numerator: 23, denominator: 1 }
console.log(new Fraction('2/3')); // { numerator: 2, denominator: 3 }
console.log(new Fraction('7/3')); // { numerator: 7, denominator: 3 }
console.log(new Fraction(0.5)); // { numerator: 1, denominator: 2 }
console.log(new Fraction(0.75)); // { numerator: 3, denominator: 4 }
console.log(new Fraction(1.5)); // { numerator: 3, denominator: 2 }
console.log(new Fraction(0.025)); // { numerator: 1, denominator: 40 }
console.log(new Fraction('0.025')); // { numerator: 1, denominator: 40 }
console.log(new Fraction('2 1/3')); // { numerator: 7, denominator: 3 }
console.log(new Fraction('5 25/50')); // { numerator: 11, denominator: 2 }
console.log(new Fraction('10%')); // { numerator: 1, denominator: 10 }
console.log(new Fraction('50%')); // { numerator: 1, denominator: 2 }
console.log(new Fraction('2:3')); // { numerator: 2, denominator: 3 }
console.log(new Fraction('0/1')); // { numerator: 0, denominator: 1 }

// =================== Addition ===================
console.log('ADD', add('0.5', 0.3)); // { numerator: 4, denominator: 5 }
console.log(new Fraction('2/3').add('3/7')); // { numerator: 23, denominator: 21 }
console.log(new Fraction('2/3').add('3:7').add(4)); // { numerator: 107, denominator: 21 }

const frac1 = new Fraction('1/4');
const frac2 = new Fraction('2:3');
console.log('chain', frac1.add(frac2)); // { numerator: 11, denominator: 12 }

// =================== Subtraction ===================
console.log(new Fraction('2/3').subtract('1/4')); // { numerator: 5, denominator: 12 }
console.log(new Fraction('5/6').subtract('1/2')); // { numerator: 1, denominator: 3 }
console.log(new Fraction('3/4').subtract('0.5')); // { numerator: 1, denominator: 4 }

// =================== Multiplication ===================
console.log('=================== Multiplication ===================')
console.log(new Fraction('2/3').multiply('3/4')); // { numerator: 1, denominator: 2 }
console.log(new Fraction('1/2').multiply('0.5')); // { numerator: 1, denominator: 4 }
console.log(new Fraction('3/5').multiply('2:3')); // { numerator: 2, denominator: 5 }

// =================== Division ===================
console.log(' =================== Division ===================')
console.log(new Fraction('2/3').divide('3/4')); // { numerator: 8, denominator: 9 }
console.log(new Fraction('1/2').divide(0.5)); // { numerator: 1, denominator: 1 }
console.log(new Fraction('3/4').divide('0.5')); // { numerator: 3, denominator: 2 }
console.log('standalone', divide(new Fraction('1/2'), new Fraction('3/7'))) // { numerator: 7, denominator: 6 }
console.log('standalone', divide('1/2', '3/7'))  // { numerator: 7, denominator: 6 }

// =================== Comparison ===================
console.log('=================== Comparison ===================')
console.log(isEqual('50%', '0.5')); // true
console.log(isEqual('2/3', '4/6')); // true
console.log(isEqual('1/2', '0.5')); // true
console.log(isEqual('3:4', '0.75')); // true
console.log(isEqual('1/3', '0.333')); // false
// =================== Comparison ===================
console.log('=================== isProper ===================')

console.log(isProper(0.75))
console.log(isProper('9/7'))

console.log('=================== toMixed ===================')
console.log( new Fraction('9/7').toMixedNumber())
console.log( new Fraction('7/9').toMixedNumber())
console.log(new Fraction('8:12').toMixedNumber())
console.log(new Fraction('7:3').toMixedNumber())
console.log('=================== toDecimal ===================')
console.log( new Fraction('8:12').toDecimal())
