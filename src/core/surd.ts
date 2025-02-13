export function parseSurd(value: string): { coefficient: number; radicand: number } {
  const surdRegex = /^(\d*)\s*√(\d+)$/;
  const match = value.match(surdRegex);
  if (!match) {
    throw new Error("Invalid surd format");
  }
  const coefficient = match[1] ? parseInt(match[1], 10) : 1;
  const radicand = parseInt(match[2], 10);
  return { coefficient, radicand };
}

export function surdToString(coefficient: number, radicand: number): string {
  if (coefficient === 1) {
    return `√${radicand}`;
  } else if (coefficient === 0) {
    return "0";
  } else {
    return `${coefficient}√${radicand}`;
  }
}