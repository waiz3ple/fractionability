import { Fraction } from './fraction';

export function toMathML(fraction: Fraction): string {
    const [numerator, denominator] = fraction.toMixedNumber().split('/');
    return `<math>
                <mfrac>
                    <mn>${numerator}</mn>
                    <mn>${denominator}</mn>
                </mfrac>
            </math>`;
}