import { toMixedNumber } from '../src/methods/conversion/toMixedNumber';

describe('toMixedNumber', () => {
  test('converts positive proper fraction', () => {
    expect(toMixedNumber('1/2')).toBe('1/2');
    expect(toMixedNumber(0.5)).toBe('1/2');
  });

  test('converts positive improper fraction', () => {
    expect(toMixedNumber('3/2')).toBe('1 1/2');
    expect(toMixedNumber('1 1/2')).toBe('1 1/2');
  });

  test('converts positive whole number', () => {
    expect(toMixedNumber(3)).toBe('3');
  });

  test('handles negative proper fraction', () => {
    expect(toMixedNumber('-1/2')).toBe('-1/2');
  });

  test('handles negative improper fraction', () => {
    expect(toMixedNumber('-3/2')).toBe('-1 1/2');
    expect(toMixedNumber('-2 2/3')).toBe('-2 2/3');
  });

  test('handles negative whole number', () => {
    expect(toMixedNumber(-4)).toBe('-4');
  });

  test('handles zero', () => {
    expect(toMixedNumber(0)).toBe('0');
    expect(toMixedNumber('0/5')).toBe('0');
  });

  test('converts percentage', () => {
    expect(toMixedNumber('50%')).toBe('1/2');
  });

  test('converts ratio', () => {
    expect(toMixedNumber('2:3')).toBe('2/3');
  });
});