export class FractionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FractionError';
    }
}
