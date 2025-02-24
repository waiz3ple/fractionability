import { toMathML } from '../src/methods/toMathML';
import Fraction from '../src/core/Fraction';


export const removeWhitespace = (str: string): string => str.replace(/\s+/g, '');

describe('toMathML', () => {
  test('converts positive proper fraction', () => {
    const fraction = new Fraction(1, 2);
    expect(removeWhitespace(toMathML(fraction))).toBe(
      removeWhitespace(`<math aria-label="1 over 2"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`)
    );
  });

  test('converts positive improper fraction to mixed number', () => {
    const fraction = new Fraction(3, 2);
    expect(removeWhitespace(toMathML(fraction))).toBe(
      removeWhitespace(`<math aria-label="1 and 1 over 2"><mn>1</mn><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`)
    );
  });

  test('converts whole number', () => {
    const fraction = new Fraction(3, 1);
    expect(removeWhitespace(toMathML(fraction))).toBe(
      removeWhitespace(`<math aria-label="3"><mn>3</mn></math>`)
    );
  });

  test('handles negative numerator', () => {
    const fraction = new Fraction(-1, 2);
    expect(removeWhitespace(toMathML(fraction))).toBe(
      removeWhitespace(`<math aria-label="negative 1 over 2"><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`)
    );
  });

  test('handles negative denominator', () => {
    const fraction = new Fraction(1, -2);
    expect(removeWhitespace(toMathML(fraction))).toBe(
      removeWhitespace(`<math aria-label="negative 1 over 2"><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`)
    );
  });

  test('handles both negative', () => {
    const fraction = new Fraction(-3, -2);
    expect(removeWhitespace(toMathML(fraction))).toBe(
      removeWhitespace(`<math aria-label="1 and 1 over 2"><mn>1</mn><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`)
    );
  });

  test('handles zero numerator', () => {
    const fraction = new Fraction(0, 5);
    expect(removeWhitespace(toMathML(fraction))).toBe(
      removeWhitespace(`<math aria-label="zero"><mn>0</mn></math>`)
    );
  });

  test('handles negative improper fraction', () => {
    const fraction = new Fraction(-5, 2);
    expect(removeWhitespace(toMathML(fraction))).toBe(
      removeWhitespace(`<math aria-label="negative 2 and 1 over 2"><mo>-</mo><mn>2</mn><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`)
    );
  });
});