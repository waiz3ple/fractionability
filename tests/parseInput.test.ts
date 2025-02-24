import { FractionError } from '../src/core/errors';
import { parseInput } from '../src/helper/parseInput';

describe('parseInput', () => {
  // Positive input tests
  test('parses positive percentages correctly', () => {
    expect(parseInput('50%')).toEqual({ numerator: 50, denominator: 100 });
    expect(parseInput('25%')).toEqual({ numerator: 25, denominator: 100 });
  });

  test('parses positive ratios correctly', () => {
    expect(parseInput('2:3')).toEqual({ numerator: 2, denominator: 3 });
    expect(parseInput('1:4')).toEqual({ numerator: 1, denominator: 4 });
  });

  test('parses positive whole numbers correctly', () => {
    expect(parseInput('5')).toEqual({ numerator: 5, denominator: 1 });
    expect(parseInput(42)).toEqual({ numerator: 42, denominator: 1 });
  });

  test('parses positive fractions correctly', () => {
    expect(parseInput('2/3')).toEqual({ numerator: 2, denominator: 3 });
    expect(parseInput('1/2')).toEqual({ numerator: 1, denominator: 2 });
  });

  test('parses positive mixed numbers correctly', () => {
    expect(parseInput('1 1/2')).toEqual({ numerator: 3, denominator: 2 });
    expect(parseInput('2 3/4')).toEqual({ numerator: 11, denominator: 4 });
  });

  test('parses positive decimals correctly', () => {
    expect(parseInput('0.5')).toEqual({ numerator: 5, denominator: 10 });
    expect(parseInput(0.25)).toEqual({ numerator: 25, denominator: 100 });
  });

  // Negative input tests
  test('parses negative percentages correctly', () => {
    expect(parseInput('-50%')).toEqual({ numerator: -50, denominator: 100 });
    expect(parseInput('-25%')).toEqual({ numerator: -25, denominator: 100 });
  });

  test('parses negative ratios correctly', () => {
    expect(parseInput('-2:3')).toEqual({ numerator: -2, denominator: 3 });
    expect(parseInput('-1:4')).toEqual({ numerator: -1, denominator: 4 });
  });

  test('parses negative whole numbers correctly', () => {
    expect(parseInput('-5')).toEqual({ numerator: -5, denominator: 1 });
    expect(parseInput(-42)).toEqual({ numerator: -42, denominator: 1 });
  });

  test('parses negative fractions correctly', () => {
    expect(parseInput('-2/3')).toEqual({ numerator: -2, denominator: 3 });
    expect(parseInput('-1/2')).toEqual({ numerator: -1, denominator: 2 });
  });

  test('parses negative mixed numbers correctly', () => {
    expect(parseInput('-1 1/2')).toEqual({ numerator: -3, denominator: 2 });
    expect(parseInput('-2 3/4')).toEqual({ numerator: -11, denominator: 4 });
  });

  test('parses negative decimals correctly', () => {
    expect(parseInput('-0.5')).toEqual({ numerator: -5, denominator: 10 });
    expect(parseInput(-0.25)).toEqual({ numerator: -25, denominator: 100 });
  });

  // Edge cases
  test('handles zero correctly', () => {
    expect(parseInput('0')).toEqual({ numerator: 0, denominator: 1 });
    expect(parseInput(0)).toEqual({ numerator: 0, denominator: 1 });
    expect(parseInput('0%')).toEqual({ numerator: 0, denominator: 100 });
  });

  // Error cases
  test('throws error for invalid inputs', () => {
    expect(() => parseInput('abc')).toThrow(FractionError);
    expect(() => parseInput('1/0')).toThrow(FractionError);
    expect(() => parseInput('1 1/0')).toThrow(FractionError);
    expect(() => parseInput('2:0')).toThrow(FractionError);
    expect(() => parseInput('')).toThrow(FractionError);
    expect(() => parseInput(null as any)).toThrow(FractionError);
    expect(() => parseInput(undefined as any)).toThrow(FractionError);
  });
});