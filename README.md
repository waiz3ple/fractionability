# Fractionability

![Fractionability Logo](src/assets/fraction-ability-logo-text-border.png)

**A lightweight, accessible JavaScript library for fraction manipulation and display**

**Fractionability** empowers developers to work with fractions effortlessly, transforming decimals, strings, mixed numbers, percentages, and ratios into simplified, screen-reader-friendly representations. With robust MathML support, arithmetic operations, and a chainable API, it’s the go-to solution for creating inclusive web applications—perfect for educational tools, recipe apps, financial calculators, and more.

---

## Why Fractionability?

Fractions like `1/2` or `3 1/2` are often displayed as plain text, confusing screen readers and alienating visually impaired users. **Fractionability** solves this with:

- **Seamless Conversion:** Turns diverse inputs into consistent fraction objects.
- **Accessibility-First Design:** Generates MathML with natural language `aria-labels` for screen readers.
- **Intuitive API:** Offers chaining and standalone functions for flexible use.
- **Practical Applications:** Simplifies real-world tasks like scaling recipes or splitting bills.

> **Note:** This library focuses on fraction display and manipulation, not complex equation editing. For advanced math, pair it with MathML or specialized tools.

---

## Features

- **Convert Inputs:** Transform decimals (`0.75` → `3/4`), strings (`'3/4'`), mixed numbers (`'1 1/2'`), percentages (`'50%'`), and ratios (`'2:3'`) into fractions.
- **Auto-Simplification:** Reduces fractions instantly (e.g., `'4/8'` → `'1/2'`).
- **Arithmetic Operations:** Add, subtract, multiply, and divide fractions with ease.
- **Comparisons:** Check equality and proper/improper status.
- **Flexible Output:** Convert to decimals, mixed numbers, strings, or MathML.
- **Chainable Methods:** Fluid API (e.g., `fraction('2/3').add('1/2').toMixedNumber()`).
- **Expression Evaluation:** Compute expressions like `'3 * 1/6'`.
- **Accessibility:** MathML output with clear, screen-reader-friendly labels.

---
>**Pro Tip**: Use `f13y` for fast search on npm!

## Installation

### Via npm
```bash
npm install fractionability
```

### Via Yarn
```bash
yarn add fractionability
```

### Via Alias (Shorthand)
```bash
npm install f13y@npm:fractionability
```

### Manual Setup
```bash
git clone https://github.com/waiz3ple/fractionability.git
cd fractionability
npm install
npm run build
```

#### Build the Library
```bash
npm run build
```

#### Run Unit Tests
```bash
npm run test
```

---

## Getting Started

### ES Modules (ESM)
```javascript
import { fraction, add, toMathML } from 'fractionability';
// Or with alias
import { fraction, add, toMathML } from 'f13y';
```

### CommonJS (CJS)
```javascript
const { fraction, add, toMathML } = require('fractionability');
// Or with alias
const { fraction, add, toMathML } = require('f13y');
```

> **Tip:** Supports both ESM and CJS—choose what fits your project!

---

## Core Usage Examples

### Creating Fractions
```javascript
const { fraction } = require('fractionability');

// From various inputs
console.log(fraction(0.75).toString());      // '3/4'
console.log(fraction('2/3').toString());     // '2/3'
console.log(fraction('-1 1/2').toString());  // '-3/2'
console.log(fraction('50%').toString());     // '1/2'
console.log(fraction('2:3').toString());     // '2/3'
```

### Arithmetic Operations
```javascript
const { fraction, add, subtract } = require('fractionability');

const frac = fraction('2/3');
console.log(frac.add('1/2').toString());      // '7/6'
console.log(subtract('5/6', '1/3').toString()); // '1/2'
```

### Chaining Methods
```javascript
const { fraction } = require('fractionability');

const result = fraction('7/3').multiply(2).toMixedNumber();
console.log(result); // '4 2/3'
```

### Accessible MathML
```javascript
const { fraction } = require('fractionability');

console.log(fraction('-3/2').toMathML());
// '<math aria-label="negative 1 and 1 over 2"><mo>-</mo><mn>1</mn><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'
```

---

## Real-World Scenarios

### 1. Recipe Scaling
**Scenario:** A recipe calls for `1/2` cup of sugar, and you need to triple it for a larger batch.
```javascript
const { fraction, multiply } = require('fractionability');

const sugar = fraction('1/2');
const tripled = multiply(sugar, 3);
console.log(tripled.toMixedNumber()); // '1 1/2'
```

### 2. Financial Bill Splitting
**Scenario:** Split a $100 bill between two people in a `3:2` ratio.
```javascript
const { fraction, multiply, subtract } = require('fractionability');

const total = 100;
const ratio = fraction('3:2');
const person1Share = multiply(total, fraction('3/5')); // 3/(3+2)
const person2Share = subtract(total, person1Share);
console.log(person1Share.toString(), person2Share.toString()); // '60', '40'
```

### 3. Educational Visualization
**Scenario:** Display `5/3` as a mixed number with MathML for a math lesson.
```javascript
const { fraction } = require('fractionability');

const frac = fraction('5/3');
console.log(frac.toMixedNumber()); // '1 2/3'
console.log(frac.toMathML());
// '<math aria-label="1 and 2 over 3"><mn>1</mn><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'
```

### 4. Construction Measurements
**Scenario:** Add two lengths, `2 1/4` feet and `1 3/8` feet, for a total measurement.
```javascript
const { fraction, add } = require('fractionability');

const total = add('2 1/4', '1 3/8');
console.log(total.toMixedNumber()); // '3 5/8'
```

### 5. Interest Calculation
**Scenario:** Calculate 5% interest on a $1000 loan.
```javascript
const { fraction, multiply } = require('fractionability');

const principal = 1000;
const interest = multiply(principal, fraction('5%'));
console.log(interest.toDecimal()); // 50
```

---

## Advanced Features

### Expression Evaluation
Compute complex fraction expressions:
```javascript
const { evaluate } = require('fractionability');

const result = evaluate('(1/2 + 1/3) * 3/4');
console.log(result.toString()); // '5/8'
```

### Comparisons
Check fraction properties:
```javascript
const { isEqual, isProper } = require('fractionability');

console.log(isEqual('2/4', '50%')); // true
console.log(isProper('3/2'));       // false
```

---

## React Integration

### Interactive Recipe App
```javascript
import React from 'react';
import { fraction, multiply } from 'fractionability';

const RecipeScaler = ({ amount }) => {
  const scaled = fraction(amount).multiply(2).toMixedNumber();
  return <p>Scaled Amount: {scaled} cups</p>;
};

// Usage: <RecipeScaler amount="1 1/2" /> → "Scaled Amount: 3 cups"
```

### Financial Dashboard
```javascript
import React from 'react';
import { fraction, evaluate } from 'fractionability';

const InterestCalculator = ({ principal, rate }) => {
  const interest = evaluate(`${principal} * ${rate}`).toDecimal();
  return <p>Interest: ${interest.toFixed(2)}</p>;
};

// Usage: <InterestCalculator principal="1000" rate="5%" /> → "Interest: $50.00"
```

---

## Accessibility Commitment

Fractionability prioritizes inclusivity:
- **Screen Reader Support:** MathML output includes descriptive `aria-labels` (e.g., "negative one and one over two" for `-3/2`).
- **Clear Formatting:** Simplifies fractions and normalizes signs for consistent display.

![Proper Fraction](https://raw.githubusercontent.com/waiz3ple/fractionability/main/src/assets/stack.png) ![Mixed Fraction](https://raw.githubusercontent.com/waiz3ple/fractionability/main/src/assets/mix.png)

---

## Contributing

Join us in making the web more accessible:
1. Fork the repository: [github.com/waiz3ple/fractionability](https://github.com/waiz3ple/fractionability)
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push and submit a pull request.

---

## License

Licensed under the [MIT License](https://github.com/waiz3ple/fractionability/blob/main/LICENSE).

---

## Support

Encounter an issue or have a question? Open an issue on [GitHub Issues](https://github.com/waiz3ple/fractionability/issues).

---

## Disclaimer

Fractionability excels at fraction manipulation and display. For advanced equation solving, integrate with MathML or other math libraries.

---

**Elevate your web apps with Fractionability—where fractions meet accessibility!**