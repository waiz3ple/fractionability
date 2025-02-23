import { isEqual } from '../src/methods/comparison/isEqual';

describe('isEqual', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test equal fractions with different input types
  test('returns true for equivalent fractions from different inputs', () => {
    expect(isEqual('1/2', 0.5)).toBe(true);
    expect(isEqual('2/4', '50%')).toBe(true);
    expect(isEqual('2:4', '1/2')).toBe(true);
    expect(isEqual(0.75, '3/4')).toBe(true);
  });

  // Test unequal fractions
  test('returns false for non-equivalent fractions', () => {
    expect(isEqual('1/2', '3/4')).toBe(false);
    expect(isEqual(0.5, '1/3')).toBe(false);
    expect(isEqual('2/4', '2/3')).toBe(false);
    expect(isEqual('50%', '75%')).toBe(false);
  });

  // Test identical inputs
  test('returns true for identical inputs', () => {
    expect(isEqual('1/2', '1/2')).toBe(true);
    expect(isEqual(0.5, 0.5)).toBe(true);
    expect(isEqual('2:4', '2:4')).toBe(true);
  });

  // Test mixed numbers
  test('handles mixed numbers correctly', () => {
    expect(isEqual('1 1/2', '3/2')).toBe(true);
    expect(isEqual('1 1/2', '1/2')).toBe(false);
  });

  // Test negative fractions
  test('handles negative fractions correctly', () => {
    expect(isEqual('-1/2', -0.5)).toBe(true);
    expect(isEqual('-1/2', '1/2')).toBe(false);
  });

  // Test zero handling
  test('handles zero correctly', () => {
    expect(isEqual('0/1', 0)).toBe(true);
    expect(isEqual('0/2', '0/1')).toBe(true);
    expect(isEqual('0/1', '1/2')).toBe(false);
  });

  // Test edge cases with improper fractions
  test('handles improper fractions correctly', () => {
    expect(isEqual('5/2', '5/2')).toBe(true);
    expect(isEqual('5/2', '2/5')).toBe(false);
  });
});