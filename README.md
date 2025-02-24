# Fractionability

![Fractionability Logo](https://raw.githubusercontent.com/waiz3ple/fractionability/main/src/assets/fraction-ability-logo-text-border.png)

**A lightweight, accessible JavaScript library for fraction manipulation and display**

**Fractionability** transforms decimals, strings, mixed numbers, percentages, and ratios into simplified, screen-reader-friendly fractions with ease. Featuring MathML support, arithmetic operations, and a fluid API, it’s the ultimate tool for building inclusive web applications—ideal for educational tools, recipe apps, financial calculators, and beyond.

---

## Why Fractionability?

Plain text linear fractions like `1/2` or `3 1/2` often confuse screen readers, excluding visually impaired users. **Fractionability** bridges this gap with:

- **Effortless Conversion:** Turns diverse inputs into consistent fraction objects.
- **Accessibility Focus:** Delivers MathML with natural `aria-labels` for screen readers.
- **Developer-Friendly API:** Supports chaining and standalone functions for versatility.
- **Real-World Utility:** Streamlines tasks like recipe scaling and bill splitting.

> **Note:** Designed for fraction handling and display, not complex equation solving. Pair with MathML or specialized libraries for advanced math.

---

## Features

- **Input Parsing:** Convert decimals (`0.75` → `3/4`), strings (`'3/4'`), mixed numbers (`'1 1/2'`), percentages (`'50%'`), and ratios (`'2:3'`) into fractions.
- **Auto-Simplification:** Instantly reduces fractions (e.g., `'4/8'` → `'1/2'`).
- **Arithmetic:** Add, subtract, multiply, and divide with precision.
- **Comparisons:** Check equality and proper/improper status.
- **Output Options:** Render as decimals, mixed numbers, strings, or MathML.
- **Chainable API:** Fluent method chaining (e.g., `fraction('2/3').add('1/2')`).
- **Expression Evaluation:** Compute expressions like `'3 * 1/6'`.
- **Accessibility:** MathML with clear, screen-reader-ready labels.

> **Pro Tip:** Search `f13y` on npm for faster installation and autocompletion!

---

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
---

## Getting Started

### ES Modules (ESM)
```javascript
import { fraction, evaluate, isProper, isEqual } from 'fractionability';
// Or with alias
import { fraction, evaluate, isProper, isEqual } from 'f13y';
```

### CommonJS (CJS)
```javascript
const { fraction, evaluate, isProper, isEqual } = require('fractionability');
// Or with alias
const { fraction, evaluate, isProper, isEqual } = require('f13y');
```

> **Tip:** Works seamlessly with both ESM and CJS—pick your style!

---

## Usage Examples

### Creating Fractions
```javascript
const { fraction } = require('fractionability');

console.log(fraction('3/4').toString());      // '3/4'
console.log(fraction(0.5).toString());        // '1/2'
console.log(fraction('-1 1/2').toString());   // '-3/2'
console.log(fraction('50%').toString());      // '1/2'
console.log(fraction('2:3').toString());      // '2/3'
```

### Arithmetic
```javascript
const { fraction, add } = require('fractionability');

const frac = fraction('2/3');
console.log(frac.add('1/2').toString());      // '7/6'
console.log(add('5/6', '1/3').toString());    // '7/6'
```

### Chaining
```javascript
const { fraction } = require('fractionability');

const result = fraction('7/3').multiply(2).toMixedNumber();
console.log(result); // '4 2/3'
```

### MathML Output
```javascript
const { fraction } = require('fractionability');

console.log(fraction('-5/2').toMathML());
// '<math aria-label="negative 2 and 1 over 2"><mo>-</mo><mn>2</mn><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'
```

---

## Real-World Scenarios

### Recipe Scaling
**Goal:** Triple `1/3` cup of flour for a larger batch.
```javascript
const { fraction, multiply } = require('fractionability');

const flour = fraction('1/3');
console.log(multiply(flour, 3).toString()); // '1'
```

### Bill Splitting
**Goal:** Divide a $150 bill in a `2:3` ratio.
```javascript
const { fraction, multiply, subtract } = require('fractionability');

const total = 150;
const share1 = multiply(total, fraction('2/5')); // 2/(2+3)
const share2 = subtract(total, share1);
console.log(share1.toString(), share2.toString()); // '60', '90'
```

### Educational Tool
**Goal:** Visualize `7/3` for a lesson.
```javascript
const { fraction } = require('fractionability');

const frac = fraction('7/3');
console.log(frac.toMixedNumber()); // '2 1/3'
console.log(frac.toMathML());
// '<math aria-label="2 and 1 over 3"><mn>2</mn><mfrac><mn>1</mn><mn>3</mn></mfrac></math>'
```

### Construction Project
**Goal:** Sum `1 3/4` and `2 1/2` feet.
```javascript
const { fraction, add } = require('fractionability');

const total = add('1 3/4', '2 1/2');
console.log(total.toMixedNumber()); // '4 1/4'
```

### Interest Calculation
**Goal:** Compute 7% interest on $500.
```javascript
const { fraction, multiply } = require('fractionability');

const interest = multiply(500, fraction('7%'));
console.log(interest.toDecimal()); // 35
```

---

## API Highlights

### Standalone Functions
- `add(f1, f2)`: Adds two fractions.
- `divide(f1, f2)`: Divides fractions.
- `evaluate(expression)`: Evaluates fraction expressions (e.g., `'1/2 + 1/3'`).
- `fraction(value)`: Creates a `Fraction` instance.
- `isEqual(f1, f2)`: Checks fraction equality.
- `isProper(fraction)`: Tests if a fraction is proper.
- `multiply(f1, f2)`: Multiplies fractions.
- `subtract(f1, f2)`: Subtracts fractions.

### Chainable Methods
- `.add(value)`: Adds a fraction.
- `.subtract(value)`: Subtracts a fraction.
- `.multiply(value)`: Multiplies by a fraction.
- `.divide(value)`: Divides by a fraction.
- `.toString()`: Returns a fraction string (e.g., `'3/4'`).
- `.toMixedNumber()`: Returns a mixed number (e.g., `'1 2/3'`).
- `.toDecimal()`: Returns a decimal value.
- `.toMathML()`: Returns accessible MathML.

---

## React Integration

### Recipe Scaler
```javascript
import React from 'react';
import { fraction } from 'fractionability';

const RecipeScaler = ({ amount }) => {
  const scaled = fraction(amount).multiply(3).toMixedNumber();
  return <p>Scaled: {scaled} cups</p>;
};

// <RecipeScaler amount="2/3" /> → "Scaled: 2 cups"
```

### Financial Widget
```javascript
import React from 'react';
import { fraction, multiply } = require('fractionability');

const InterestWidget = ({ principal, rate }) => {
  const interest = multiply(principal, fraction(rate)).toDecimal();
  return <p>Interest: ${interest.toFixed(2)}</p>;
};

// <InterestWidget principal={1000} rate="5%" /> → "Interest: $50.00"
```

---

## Accessibility Matters

Fractionability ensures inclusivity with:
- **MathML Output:** Descriptive `aria-labels` (e.g., "two and one over three" for `7/3`).
- **Normalized Fractions:** Clear, simplified representations for all users.

A simple fraction like `3/4` becomes:
 ![Proper Fraction](https://raw.githubusercontent.com/waiz3ple/fractionability/main/src/assets/stack.png) and `7/3` become ![Mixed Fraction](https://raw.githubusercontent.com/waiz3ple/fractionability/main/src/assets/mix.png).

---

## Contributing
Help us enhance accessibility:
1. Fork the repository: [github.com/waiz3ple/fractionability](https://github.com/waiz3ple/fractionability)
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push and submit a pull request.

#### For Contributors: Build and Test

To contribute effectively, you may need to build and test the library locally. These steps are optional and intended for contributors:

##### Build the Library
Generate the distributable files (`dist/index.js`, `dist/index.cjs`, `dist/index.d.ts`):
```bash
npm run build
```
> **Note:** Ensure dependencies are installed (`npm install`) before building.

##### Run Unit Tests
Verify your changes with our comprehensive test suite:
```bash
npm run test
```
> **Tip:** Use `npm run test:watch` for continuous testing during development.

##### Run Manual Test
Testing the build:
```bash
node usage.js
```
---

## License

[MIT License](https://github.com/waiz3ple/fractionability/blob/main/LICENSE)

---

## Support

Questions or issues? Visit [GitHub Issues](https://github.com/waiz3ple/fractionability/issues).

---

## Disclaimer

Fractionability shines in fraction manipulation and display. For advanced equations, combine with MathML or other tools.

---

**Unlock inclusive fraction handling with Fractionability—your web app deserves it!**