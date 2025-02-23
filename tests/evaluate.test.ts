import { evaluate } from '../src/methods/evaluate';

describe('evaluate', () => {
  
  test('adds two fractions correctly', () => {
    expect(evaluate('1/2 + 1/3').toString()).toBe('5/6');
  });

  test('subtracts two fractions correctly', () => {
    expect(evaluate('3/4 - 1/4').toString()).toBe('1/2');
  });

  test('multiplies two fractions correctly', () => {
    expect(evaluate('2/3 * 3/4').toString()).toBe('1/2');
  });

  test('divides two fractions correctly', () => {
    expect(evaluate('3/4 / 1/2').toString()).toBe('3/2');
  });

  test('supports alternative division symbol', () => {
    expect(evaluate('3/4 : 1/2').toString()).toBe('3/2');
  });

  test('handles decimal to fraction conversion', () => {
    expect(evaluate('0.5 + 1/4').toString()).toBe('3/4');
  });

  test.skip('handles mixed fractions', () => {
    expect(evaluate('1 1/2 + 3/4').toString()).toBe('9/4');  // 2.25 as fraction
  });

  test('handles complex expressions', () => {
    expect(evaluate('(1/2 + 1/3) * 3/4').toString()).toBe('5/8');
  });

  test('returns simplified fraction', () => {
    expect(evaluate('4/8 + 2/4').toString()).toBe('1');
  });

  test('throws an error for invalid expressions', () => {
    expect(() => evaluate('1/2 +')).toThrow('Error evaluating expression');
  });

  test('throws an error for division by zero', () => {
    expect(() => evaluate('1/2 / 0')).toThrow('Error evaluating expression');
  });

});
