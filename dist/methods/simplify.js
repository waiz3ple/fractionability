import { gcd } from '../core/gcd.js';

function simplify(fraction) {
    const numerator = fraction.getNumerator();
    const denominator = fraction.getDenominator();
    const commonDivisor = gcd(numerator, denominator);
    return { numerator: numerator / commonDivisor, denominator: denominator / commonDivisor };
}

export { simplify };
//# sourceMappingURL=simplify.js.map
