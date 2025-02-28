import Fraction from '../src/core/Fraction';
import * as toSkewModule from '../src/methods/toSkew'; // Import entire module for mocking

// Helper function to normalize strings by removing whitespace
const removeWhitespace = (str: string): string => str.replace(/\s+/g, '');

// Determine if the browser actually supports bevelled fractions
const isBevelledSupported = toSkewModule.supportsBevelled();

describe('toSkew', () => {
  let supportsBevelledMock: jest.SpyInstance;

  beforeEach(() => {
    // Mock the supportsBevelled function from the module
    supportsBevelledMock = jest.spyOn(toSkewModule, 'supportsBevelled');
  });

  afterEach(() => {
    supportsBevelledMock.mockRestore();
  });

  // Conditionally run tests only if bevelled fractions are supported
  describe('when browser supports bevelled fractions', () => {
    // Skip this suite if bevelled fractions aren't supported
    beforeAll(() => {
      if (!isBevelledSupported) {
        console.log('Skipping bevelled fraction tests: browser does not support bevelled fractions');
        // Use Jest's skip method for this suite
        return;
      }
    });

    // Only run these tests if bevelled is supported; no mock needed
    if (isBevelledSupported) {
      it('renders positive proper fraction as MathML', () => {
        const fraction = new Fraction(1, 2);
        const result = removeWhitespace(toSkewModule.toSkew(fraction));
        const expected = removeWhitespace(
          `<math aria-label="1 over 2"><mfrac bevelled="true"><mn>1</mn><mn>2</mn></mfrac></math>`
        );
        expect(result).toBe(expected);
      });

      it('renders positive improper fraction as mixed number in MathML', () => {
        const fraction = new Fraction(3, 2);
        const result = removeWhitespace(toSkewModule.toSkew(fraction));
        const expected = removeWhitespace(
          `<math aria-label="1 and 1 over 2"><mn>1</mn><mfrac bevelled="true"><mn>1</mn><mn>2</mn></mfrac></math>`
        );
        expect(result).toBe(expected);
      });

      it('renders fraction with negative numerator in MathML', () => {
        const fraction = new Fraction(-1, 2);
        const result = removeWhitespace(toSkewModule.toSkew(fraction));
        const expected = removeWhitespace(
          `<math aria-label="negative 1 over 2"><mo>-</mo><mfrac bevelled="true"><mn>1</mn><mn>2</mn></mfrac></math>`
        );
        expect(result).toBe(expected);
      });

      it('renders fraction with negative denominator in MathML', () => {
        const fraction = new Fraction(1, -2);
        const result = removeWhitespace(toSkewModule.toSkew(fraction));
        const expected = removeWhitespace(
          `<math aria-label="negative 1 over 2"><mo>-</mo><mfrac bevelled="true"><mn>1</mn><mn>2</mn></mfrac></math>`
        );
        expect(result).toBe(expected);
      });

      it('renders fraction with both negative numerator and denominator in MathML', () => {
        const fraction = new Fraction(-3, -2);
        const result = removeWhitespace(toSkewModule.toSkew(fraction));
        const expected = removeWhitespace(
          `<math aria-label="1 and 1 over 2"><mn>1</mn><mfrac bevelled="true"><mn>1</mn><mn>2</mn></mfrac></math>`
        );
        expect(result).toBe(expected);
      });

      it('renders zero numerator as MathML', () => {
        const fraction = new Fraction(0, 5);
        const result = removeWhitespace(toSkewModule.toSkew(fraction));
        const expected = removeWhitespace(`<math aria-label="zero"><mn>0</mn></math>`);
        expect(result).toBe(expected);
      });

      it('renders negative improper fraction as mixed number in MathML', () => {
        const fraction = new Fraction(-5, 2);
        const result = removeWhitespace(toSkewModule.toSkew(fraction));
        const expected = removeWhitespace(
          `<math aria-label="negative 2 and 1 over 2"><mo>-</mo><mn>2</mn><mfrac bevelled="true"><mn>1</mn><mn>2</mn></mfrac></math>`
        );
        expect(result).toBe(expected);
      });
    } else {
      it.skip('bevelled fraction tests skipped due to lack of browser support', () => {});
    }
  });

  describe('when browser does not support bevelled fractions', () => {
    beforeEach(() => {
      supportsBevelledMock.mockReturnValue(false);
    });

    it('renders positive proper fraction as span', () => {
      const fraction = new Fraction(1, 2);
      const result = removeWhitespace(toSkewModule.toSkew(fraction));
      const expected = removeWhitespace(`<span aria-label="1 over 2">1&frasl;2</span>`);
      expect(result).toBe(expected);
    });

    it('renders positive improper fraction as mixed number in span', () => {
      const fraction = new Fraction(3, 2);
      const result = removeWhitespace(toSkewModule.toSkew(fraction));
      const expected = removeWhitespace(`<span aria-label="1 and 1 over 2">1&nbsp;1&frasl;2</span>`);
      expect(result).toBe(expected);
    });

    it('renders fraction with negative numerator in span', () => {
      const fraction = new Fraction(-1, 2);
      const result = removeWhitespace(toSkewModule.toSkew(fraction));
      const expected = removeWhitespace(`<span aria-label="negative 1 over 2">-1&frasl;2</span>`);
      expect(result).toBe(expected);
    });

    it('renders fraction with negative denominator in span', () => {
      const fraction = new Fraction(1, -2);
      const result = removeWhitespace(toSkewModule.toSkew(fraction));
      const expected = removeWhitespace(`<span aria-label="negative 1 over 2">-1&frasl;2</span>`);
      expect(result).toBe(expected);
    });

    it('renders fraction with both negative numerator and denominator in span', () => {
      const fraction = new Fraction(-3, -2);
      const result = removeWhitespace(toSkewModule.toSkew(fraction));
      const expected = removeWhitespace(`<span aria-label="1 and 1 over 2">1&nbsp;1&frasl;2</span>`);
      expect(result).toBe(expected);
    });

    it('renders negative improper fraction as mixed number in span', () => {
      const fraction = new Fraction(-5, 2);
      const result = removeWhitespace(toSkewModule.toSkew(fraction));
      const expected = removeWhitespace(`<span aria-label="negative 2 and 1 over 2">-2&nbsp;1&frasl;2</span>`);
      expect(result).toBe(expected);
    });
  });
});