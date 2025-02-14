import { Fraction, isEqual } from './dist/index.js';



// Test cases
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
console.log(new Fraction('10%')); //{ numerator: 1, denominator: 10 }
console.log(new Fraction('50%')); //{ numerator: 1, denominator: 2}
console.log(new Fraction('2:3')); // { numerator: 2, denominator: 3 }
console.log(new Fraction('0/1')); //  { numerator: 0, denominator: 1 }

console.log('===================Add=======================');

console.log(new Fraction('2/3').add('3/7')); //  { numerator: 23, denominator: 21 }
console.log(new Fraction('2/3').add('3:7').add(4)); //  { numerator: 107, denominator: 21 }

console.log('===================Division=======================');

console.log(new Fraction('2/3').divide('7:2').add('5/6')); //  { numerator: 14, denominator: 9 }
console.log('===================Multiplication=======================');

console.log(new Fraction('2/3').add('3:7').add(4)); //  { numerator: 107, denominator: 21 }

console.log( isEqual('50%', '0.5'))