# Fractionability

## Accessible Fraction Library

**Fractionability** is a lightweight, modular, and accessible JavaScript library designed to improve fraction representation on the web. It seamlessly converts decimals, strings, mixed numbers, percentages, and ratios into fractions, ensuring human-readable and screen-reader-friendly output. Additionally, it generates MathML for enhanced accessibility, making it an ideal tool for creating inclusive web content.

---

## 🔥 Why Fractionability?

Many websites display fractions in formats like `1/2` or `3 1/2`, which can be challenging for screen readers to interpret correctly. Improper fractions, mixed numbers, percentages, and ratios often cause accessibility issues, making content difficult to understand for visually impaired users.

**Fractionability** solves this by ensuring:
- Properly formatted fractions for better readability.
- Enhanced accessibility with MathML.
- A simple and intuitive API for developers.
- Support for chainable methods and a modular design.
- Comprehensive handling of decimals, percentages, ratios, and mixed numbers.
- **Automatic simplification** of fractions.

🚀 **Note:** This library is **not** an equation editor. If you need advanced mathematical notation, consider using MathML or dedicated libraries.

---

## ✨ Features
✅ Convert decimals (e.g., `0.75`) to fractions.
✅ Convert fraction strings (e.g., `'3/4'`) to fraction objects.
✅ Handle mixed numbers (e.g., `'3 1/2'`).
✅ **Automatically simplify** fractions (e.g., `'4/8'` → `'1/2'`).
✅ Generate MathML for **better accessibility**.
✅ Chainable methods for easy use (e.g., `fraction('7/3').toMathML()`).
✅ Standalone functions for modularity (e.g., `evaluate('3 * 1/6')`).
✅ Support for percentages (e.g., `'50%'` → `'1/2'`).
✅ Support for ratios (e.g., `'2:3'` → `'2/3'`).
✅ Perform arithmetic operations: addition, subtraction, multiplication, and division.
✅ Comparison methods: equality checks, proper fraction detection.
✅ Conversion methods: to decimal, to mixed number, to string.
✅ Designed specifically for **fraction display**, not complex math equations.

---

## 📦 Installation

Install via **npm**:

```bash
npm install fractionability
```

Or using **Yarn**:

```bash
yarn add fractionability
```

Alternatively, clone the repository and install dependencies manually:

```bash
git clone https://github.com/waiz3ple/fractionability.git
cd fractionability
npm install
```

---

## 🚀 Usage

### Importing the Library

```javascript
import {
  add, divide, evaluate, fraction,
  isEqual, isProper, multiply, subtract
} from 'fractionability';
```

---

## **Sample Code**

### **1. Creating Fractions**
```javascript
import { fraction } from 'fractionability';

// From a decimal
const frac1 = fraction(0.75); // { numerator: 3, denominator: 4 }

// From a fraction string
const frac2 = fraction('2/3'); // { numerator: 2, denominator: 3 }

// From a mixed number
const frac3 = fraction('1 2/3'); // { numerator: 5, denominator: 3 }

// From a percentage
const frac4 = fraction('50%'); // { numerator: 1, denominator: 2 }

// From a ratio
const frac5 = fraction('2:3'); // { numerator: 2, denominator: 3 }
```

#### **Creating an Instance**
```javascript
import Fraction from 'fractionability';

// From an instance
const frac1 = new Fraction(0.75); // { numerator: 3, denominator: 4 }
```

---

### **2. Automatic Simplification**
```javascript
import { fraction } from 'fractionability';

const frac = fraction('4/8'); // Automatically simplified to { numerator: 1, denominator: 2 }
console.log(frac.toString()); // '1/2'
```

---

### **3. Arithmetic Operations**

#### **Addition**
```javascript
import { add } from 'fractionability';

const result = add('2/3', '3/7'); // { numerator: 23, denominator: 21 }
console.log(result.toString()); // '23/21'
```

#### **Subtraction**
```javascript
import { subtract } from 'fractionability';

const result = subtract('5/6', '1/3'); // { numerator: 1, denominator: 2 }
console.log(result.toString()); // '1/2'
```

#### **Multiplication**
```javascript
import { multiply } from 'fractionability';

const result = multiply('2/3', '3/4'); // { numerator: 1, denominator: 2 }
console.log(result.toString()); // '1/2'
```

#### **Division**
```javascript
import { divide } from 'fractionability';

const result = divide('2/3', '3/4'); // { numerator: 8, denominator: 9 }
console.log(result.toString()); // '8/9'
```

---

### **4. Comparison Methods**

#### **Equality Check**
```javascript
import { isEqual } from 'fractionability';

console.log(isEqual('2/4', '1/2')); // true
console.log(isEqual('50%', '0.5')); // true
```

#### **Proper Fraction Check**
```javascript
import { isProper } from 'fractionability';

console.log(isProper('5/3')); // false
console.log(isProper('3/7')); // true
```

---

### **5. Conversion Methods**

#### **To Decimal**
```javascript
const frac = fraction('3/4');
console.log(frac.toDecimal()); // 0.75
```

#### **To Mixed Number**
```javascript
const frac = fraction('7/3');
console.log(frac.toMixedNumber()); // '2 1/3'
```

#### **To String**
```javascript
const frac = fraction('1 3/4');
console.log(frac.toString()); // '7/4'
```

---

### **6. Generating MathML**
```javascript
const frac = fraction('3/4');
console.log(frac.toMathML());
// Output:
// <math xmlns="http://www.w3.org/1998/Math/MathML">
//   <mfrac>
//     <mn>3</mn>
//     <mn>4</mn>
//   </mfrac>
// </math>
```

---

### **7. Evaluating Expressions**
```javascript
import { evaluate } from 'fractionability';

const result = evaluate('3 * 1/6'); // { numerator: 1, denominator: 2 }
console.log(result.toString()); // '1/2'
```

---

### **8. Chaining Methods**
```javascript
const result = fraction('7/3')
  .add('1/2') // { numerator: 17, denominator: 6 }
  .toMathML(); // MathML for 17/6

console.log(result);
// Output:
// <math xmlns="http://www.w3.org/1998/Math/MathML">
//   <mfrac>
//     <mn>17</mn>
//     <mn>6</mn>
//   </mfrac>
// </math>
```

---

## **Real-Life Use Cases**

### **1. Recipes (Cooking)**
When scaling recipes, fractions are commonly used to adjust ingredient quantities. For example, doubling a recipe that requires `1/2` cup of sugar:

```javascript
import { fraction } from 'fractionability';
const sugar = fraction('1/2');
const doubledSugar = multiply(sugar, 2); // { numerator: 1, denominator: 1 }
console.log(toString(doubledSugar)); // '1'
```

---

### **2. Finance**
Calculating interest rates or splitting bills often involves fractions. For example, splitting a bill of `$100` in a ratio of `2:3`:

```javascript
const total = 100;
const ratio = fraction('2:3');
const part1 = multiply(total, ratio); // { numerator: 40, denominator: 1 }
const part2 = subtract(total, part1); // { numerator: 60, denominator: 1 }
console.log(part1.toString(), part2.toString()); // '40', '60'
```

---

### **3. Education**
Teaching fractions in a classroom setting often requires visualizing them. For example, displaying `3/4` as MathML:

```javascript
const frac = fraction('3/4');
const mathML = frac.toMathML();
console.log(mathML);
// Output:
// <math xmlns="http://www.w3.org/1998/Math/MathML">
//   <mfrac>
//     <mn>3</mn>
//     <mn>4</mn>
//   </mfrac>
// </math>
```

---

### **4. Construction**
Measuring materials often involves fractions. For example, calculating the total length of two pieces of wood: `3 1/2` feet and `2 3/4` feet:

```javascript
const piece1 = fraction('3 1/2'); // { numerator: 7, denominator: 2 }
const piece2 = fraction('2 3/4'); // { numerator: 11, denominator: 4 }
const totalLength = add(piece1, piece2); // { numerator: 25, denominator: 4 }
console.log(totalLength.toMixedNumber()); // '6 1/4'
```

---

## **React Usage Examples**

### **1. Displaying Fractions in a Recipe App**
```javascript
import React from 'react';
import { fraction } from 'fractionability';

const Recipe = () => {
  const sugar = fraction('1/2');
  const doubledSugar = fraction('1/2').multiply(2);

  return (
    <div>
      <p>Original Sugar: {sugar.toString()}</p>
      <p>Doubled Sugar: {doubledSugar.toString()}</p>
    </div>
  );
};

export default Recipe;
```

---

### **2. Calculating Interest in a Finance App**
```javascript
import React from 'react';
import { fraction, multiply } from 'fractionability';

const Finance = () => {
  const principal = 1000;
  const rate = fraction('5%'); // 5% interest rate
  const interest = multiply(principal, rate);

  return (
    <div>
      <p>Principal: ${principal}</p>
      <p>Interest: ${interest.toString()}</p>
    </div>
  );
};

export default Finance;
```

---

### **3. Visualizing Fractions in an Education App**
```javascript
import React from 'react';
import { fraction } from 'fractionability';

const Education = () => {
  const frac = fraction('3/4');
  const mathML = frac.toMathML();

  return (
    <div>
      {mathML}
    </div>
  );
};

export default Education;
```

---

### **4. Measuring Materials in a Construction App**
```javascript
import React from 'react';
import { fraction, add } from 'fractionability';

const Construction = () => {
  const piece1 = fraction('3 1/2');
  const piece2 = fraction('2 3/4');
  const totalLength = add(piece1, piece2);

  return (
    <div>
      <p>Total Length: {totalLength.toString()} feet</p>
    </div>
  );
};

export default Construction;
```

---

## 📖 API Reference  

### **Core Functions**  

#### `fraction(value: number | string): Fraction`  
Converts a decimal, string, percentage, or ratio into a fraction object.  

- **Parameters:**  
  - `value` (number | string): The decimal (`0.75`), fraction string (`"3/4"`), percentage (`"50%"`), or ratio (`"2:3"`).  
- **Returns:** A `Fraction` object.  

#### `evaluate(expression: string): Fraction`  
Evaluates a mathematical expression involving fractions.  

- **Parameters:**  
  - `expression` (string): The expression to evaluate (e.g., `'3 * 1/6'`).  
- **Returns:** A `Fraction` object representing the result.  

---

### **Additional Methods**  

#### `add(fraction: Fraction): Fraction`  
Adds another fraction to the current fraction and returns the result.  

#### `subtract(fraction: Fraction): Fraction`  
Subtracts another fraction from the current fraction and returns the result.  

#### `multiply(fraction: Fraction): Fraction`  
Multiplies the current fraction by another fraction and returns the result.  

#### `divide(fraction: Fraction): Fraction`  
Divides the current fraction by another fraction and returns the result.  

#### `isEqual(fraction: Fraction): boolean`  
Checks if the current fraction is equal to another fraction.  

#### `isProper(): boolean`  
Checks if the fraction is proper (numerator < denominator).  

---

## 🌍 Why Accessibility Matters  

Ensuring fractions are properly formatted for screen readers is **essential for inclusivity**. Traditional fraction representations (`3 1/2`) can be ambiguous when read aloud. **Fractionability** makes web content clearer and more accessible, enhancing the experience for visually impaired users.  

---

## 🤝 Contributing  

We welcome contributions! To contribute:  

1. **Fork** the repository.  
2. **Create a new branch** for your feature or bugfix.  
3. **Commit your changes**.  
4. **Submit a pull request**.  

---

## 📜 License  

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---

## 🙌 Acknowledgments  

- Inspired by the need for accessible fraction representation.  
- Built with modularity and inclusivity in mind.  

---

## 📩 Support  

For questions or issues, open an **issue** on the [GitHub repository](https://github.com/waiz3ple/fractionability/issues).  

---

## ⚠️ Disclaimer  

This library is **not** an equation editor. It is specifically designed to remove pain in working with fractions for **accessible fraction display**. For complex equations, consider MathML or other specialized libraries.  

---
💡 **Enjoy using Fractionability to make the web more inclusive!** 🚀  
