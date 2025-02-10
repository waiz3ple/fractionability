export function toMathML(fraction) {
    const numerator = fraction.getNumerator();
    const denominator = fraction.getDenominator();
    if (denominator === 1) {
        return `<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mn>${numerator}</mn>
            </math>`;
    }
    const whole = Math.floor(numerator / denominator);
    const remainder = numerator % denominator;
    if (whole > 0) {
        return `<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mn>${whole}</mn>
              <mfrac>
                <mn>${remainder}</mn>
                <mn>${denominator}</mn>
              </mfrac>
            </math>`;
    }
    return `<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mfrac>
              <mn>${numerator}</mn>
              <mn>${denominator}</mn>
            </mfrac>
          </math>`;
}
