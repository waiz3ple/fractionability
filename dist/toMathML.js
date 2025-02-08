export function toMathML(fraction) {
    const [numerator, denominator] = fraction.toMixedNumber().split('/');
    return `<math>
                <mfrac>
                    <mn>${numerator}</mn>
                    <mn>${denominator}</mn>
                </mfrac>
            </math>`;
}
//# sourceMappingURL=toMathML.js.map