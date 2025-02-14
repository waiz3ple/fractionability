// Parse a surd string into coefficient and radicand
export function parseSurd(value: string): { coefficient: number; radicand: number } {
  const surdRegex = /^([+-]?\d*\.?\d*)\s*√(\d+)$/;
  const match = value.match(surdRegex);
  if (!match) {
    throw new Error("Invalid surd format");
  }
  const coefficient = match[1] ? parseFloat(match[1]) : 1;
  const radicand = parseInt(match[2], 10);
  return { coefficient, radicand };
}

// Convert a surd or number to a string
export function surdToString(value: number | { coefficient: number; radicand: number }): string {
  if (typeof value === "number") {
    return value.toString();
  } else {
    if (value.coefficient === 1) {
      return `√${value.radicand}`;
    } else if (value.coefficient === -1) {
      return `-√${value.radicand}`;
    } else if (value.coefficient === 0) {
      return "0";
    } else {
      return `${value.coefficient}√${value.radicand}`;
    }
  }
}

// Simplify a surd by factoring out perfect squares
export function simplifySurd(surd: { coefficient: number; radicand: number }): { coefficient: number; radicand: number } {
  const { coefficient, radicand } = surd;
  let maxSquareFactor = 1;
  for (let i = Math.floor(Math.sqrt(radicand)); i >= 1; i--) {
    if (radicand % (i * i) === 0) {
      maxSquareFactor = i;
      break;
    }
  }
  const newCoefficient = coefficient * maxSquareFactor;
  const newRadicand = radicand / (maxSquareFactor * maxSquareFactor);
  return { coefficient: newCoefficient, radicand: newRadicand };
}

// Rationalize the denominator and simplify surds
export function rationalizeDenominator(
  numerator: number | { coefficient: number; radicand: number },
  denominator: number | { coefficient: number; radicand: number }
): { numerator: number | string; denominator: number | string } {
  // Handle zero denominator
  if (denominator === 0 || (typeof denominator === "object" && denominator.coefficient === 0)) {
    throw new Error("Denominator cannot be zero");
  }

  // If denominator is a surd, rationalize it
  if (typeof denominator !== "number") {
    const multiplier = { coefficient: denominator.coefficient, radicand: denominator.radicand };

    // Multiply numerator and denominator by √denominator.radicand
    if (typeof numerator === "number") {
      const newNumerator = numerator * multiplier.coefficient * Math.sqrt(multiplier.radicand);
      const newDenominator = multiplier.coefficient * multiplier.coefficient * multiplier.radicand;
      return { numerator: newNumerator, denominator: newDenominator };
    } else {
      const newNumerator = {
        coefficient: numerator.coefficient * multiplier.coefficient,
        radicand: numerator.radicand * multiplier.radicand,
      };
      const newDenominator = multiplier.coefficient * multiplier.coefficient * multiplier.radicand;
      return { numerator: surdToString(simplifySurd(newNumerator)), denominator: newDenominator };
    }
  }

  // If denominator is a number, no need to rationalize
  return { numerator: typeof numerator === "number" ? numerator : surdToString(simplifySurd(numerator)), denominator };
}

// Simplify a fraction with surds
export function simplifyFraction(
  numerator: number | { coefficient: number; radicand: number },
  denominator: number | { coefficient: number; radicand: number }
): { numerator: number | string; denominator: number | string } {
  // Handle zero denominator
  if (denominator === 0 || (typeof denominator === "object" && denominator.coefficient === 0)) {
    throw new Error("Denominator cannot be zero");
  }

  // Simplify numerator and denominator if they are surds
  const simplifiedNumerator = typeof numerator === "number" ? numerator : simplifySurd(numerator);
  const simplifiedDenominator = typeof denominator === "number" ? denominator : simplifySurd(denominator);

  // If both numerator and denominator are surds, simplify the fraction
  if (typeof simplifiedNumerator !== "number" && typeof simplifiedDenominator !== "number") {
    const radicandRatio = simplifiedNumerator.radicand / simplifiedDenominator.radicand;
    if (Number.isInteger(Math.sqrt(radicandRatio))) {
      const newCoefficient = simplifiedNumerator.coefficient / simplifiedDenominator.coefficient;
      const newRadicand = Math.sqrt(radicandRatio);
      return { numerator: newCoefficient * newRadicand, denominator: 1 };
    }
  }

  // Otherwise, return the simplified numerator and denominator
  return {
    numerator: typeof simplifiedNumerator === "number" ? simplifiedNumerator : surdToString(simplifiedNumerator),
    denominator: typeof simplifiedDenominator === "number" ? simplifiedDenominator : surdToString(simplifiedDenominator),
  };
}