import Fraction from "../core/Fraction";
import { getAriaLabel } from "../helper/getAriaLabel";
import { isNegative } from "../helper/isNegative";

export function toSkew(fraction: Fraction): string {
  let numerator = fraction.getNumerator;
  let denominator = fraction.getDenominator;

    const isNegativeFraction = isNegative(numerator, denominator);

  if (denominator < 0) {
    numerator = -numerator;
    denominator = -denominator;
  }

  // Absolute values for calculation
  const absNumerator = Math.abs(numerator);
  const absDenominator = Math.abs(denominator);

  // Case 1: Whole number (denominator = 1)
  if (absDenominator === 1) {
    const value = absNumerator;
    return ` <math aria-label="${getAriaLabel(fraction)}">
            <mn>${isNegativeFraction ? '-' : ''}${value}</mn>
          </math>`;
  }

  // Case 2: Mixed number or improper fraction (convert to mixed form for accessibility)
  const whole = Math.floor(absNumerator / absDenominator);
  const remainder = absNumerator % absDenominator;

  if (whole > 0 && remainder > 0) {
    return supportsBevelled()
      ? `<math aria-label="${getAriaLabel(fraction)}">
           ${isNegativeFraction ? '<mo>-</mo>' : ''}
           <mn>${whole}</mn>
           <mfrac bevelled="true">
             <mn>${remainder}</mn>
             <mn>${absDenominator}</mn>
           </mfrac>
         </math>`
      : `<span aria-label="${getAriaLabel(fraction)}">
           ${isNegativeFraction ? '-' : ''}${whole}&nbsp;${remainder}&frasl;${absDenominator}
         </span>`;
  } else if (whole > 0 && remainder === 0) {
    // Improper fraction simplifies to whole number
    return `<math aria-label="${getAriaLabel(fraction)}">
              <mn>${isNegativeFraction ? -whole : whole}</mn>
            </math>`;
  }

  // Case 3: Proper fraction or zero
  return supportsBevelled()
    ? `<math aria-label="${getAriaLabel(fraction)}">
         ${isNegativeFraction && absNumerator !== 0 ? '<mo>-</mo>' : ''}
         <mfrac bevelled="true">
           <mn>${absNumerator}</mn>
           <mn>${absDenominator}</mn>
         </mfrac>
       </math>`
    : `<span aria-label="${getAriaLabel(fraction)}">
         ${isNegativeFraction && absNumerator !== 0 ? '-' : ''}${absNumerator}&frasl;${absDenominator}
       </span>`;
}

// Helper function to check for bevelled support
export function supportsBevelled(): boolean {
  try {
    const mathmlNS = "http://www.w3.org/1998/Math/MathML";
    const mathml = document.createElementNS(mathmlNS, "math");
    const mfrac = document.createElementNS(mathmlNS, "mfrac");
    mfrac.setAttribute("bevelled", "true");
    mathml.appendChild(mfrac);
    document.body.appendChild(mathml);
    const isSupported = mfrac.getAttribute("bevelled") === "true";
    document.body.removeChild(mathml);
    return isSupported;
  } catch (e) {
    return false;
  }
} 





