export class FractionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FractionError';
  }
}