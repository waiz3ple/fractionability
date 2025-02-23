import Fraction from '../core/Fraction';

export function toString(fraction: Fraction): string {
  const numerator = fraction.getNumerator;
  const denominator = fraction.getDenominator;

 
if(numerator === denominator){
    return `1`;
}

 // Handle whole numbers (e.g., 3)
  if (denominator === 1) {
    return `${numerator}`;
  }
  //Handle {1:1} fractions
    // Handle improper fractions (e.g., 7/3)
  return `${numerator}/${denominator}`;
}