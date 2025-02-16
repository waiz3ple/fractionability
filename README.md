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
- Support for chainable methods and modular design.  
- Comprehensive handling of decimals, percentages, ratios, and mixed numbers.  
- **Automatic simplification** of fractions.  

🚀 **Note:** This library is **not** an equation editor. If you need advanced mathematical notation, consider using MathML or dedicated libraries.

---

## ✨ Features  

✅ Convert decimals (e.g., `0.75`) to fractions.  
✅ Convert fraction strings (e.g., `'3/4'`) to fraction objects.  
✅ Handle mixed numbers (e.g., `'3 1/2'`).  
✅ **Automatic simplification** of fractions (e.g., `'4/8'` → `'1/2'`).  
✅ Generate MathML for **better accessibility**.  
✅ Chainable methods for easy use (e.g., `fraction('7/3').toMathML()`).  
✅ Standalone functions for modularity (e.g., `evaluate('3 * 1/6')`).  
✅ Support for percentages (e.g., `'50%'` → `'1/2'`).  
✅ Support for ratios (e.g., `'2:3'` → `'2/3'`).  
✅ Arithmetic operations: addition, subtraction, multiplication, and division.  
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
import Fraction,{ isEqual, evaluate, toMathML, toString } from 'fractionability';  
```  

---

## **Sample Code**

### **1. Creating Fractions**
```javascript
// From a decimal
const frac1 = new Fraction(0.75); // { numerator: 3, denominator: 4 }

// From a fraction string
const frac2 = new Fraction('2/3'); // { numerator: 2, denominator: 3 }

// From a mixed number
const frac3 = new Fraction('1 2/3'); // { numerator: 5, denominator: 3 }

// From a percentage
const frac4 = new Fraction('50%'); // { numerator: 1, denominator: 2 }

// From a ratio
const frac5 = new Fraction('2:3'); // { numerator: 2, denominator: 3 }
```

---

### **2. Automatic Simplification**
```javascript
const frac = new Fraction('4/8'); // Automatically simplified to { numerator: 1, denominator: 2 }
console.log(frac.toString()); // '1/2'
```

---

### **3. Arithmetic Operations**

#### **Addition**
```javascript
const frac1 = new Fraction('2/3');
const frac2 = new Fraction('3/7');
const result = frac1.add(frac2); // { numerator: 23, denominator: 21 }
console.log(result.toString()); // '23/21'

const result2 = new Fraction('2/3').add('3/7');  //{ numerator: 23, denominator: 21 }
console.log(result2.toString()); // '23/21'

#### as standalone
import { add, toString } from 'fractionability';

 console.log( add('3/2', '7/8'))  // //{ numerator: 8, denominator: 3 }
 console.log( add('3/2', '7/8').toString() )  // '8/3'
```

#### **Subtraction**
```javascript
const frac1 = new Fraction('5/6');
const frac2 = new Fraction('1/3');
const result = frac1.subtract(frac2); // { numerator: 1, denominator: 2 }
console.log(result.toString()); // '1/2'
```

#### **Multiplication**
```javascript
const frac1 = new Fraction('2/3');
const frac2 = new Fraction('3/4');
const result = frac1.multiply(frac2); // { numerator: 1, denominator: 2 }
console.log(result.toString()); // '1/2'
```

#### **Division**
```javascript
const frac1 = new Fraction('2/3');
const frac2 = new Fraction('3/4');
const result = frac1.divide(frac2); // { numerator: 8, denominator: 9 }
console.log(result.toString()); // '8/9'
```

---

### **4. Comparison Methods**

#### **Equality Check**
```javascript
const frac1 = new Fraction('2/4'); // Automatically simplified to { numerator: 1, denominator: 2 }
const frac2 = new Fraction('1/2');
console.log(isEqual(frac1, frac2)); // true

const frac3 = new Fraction('50%');
const frac4 = new Fraction('0.5');
console.log(isEqual(frac3, frac4)); // true
```

#### **Proper Fraction Check**
```javascript
const frac1 = new Fraction('2/3');
console.log(frac1.isProper()); // true

const frac2 = new Fraction('5/3');
console.log(frac2.isProper()); // false
```

---

### **5. Conversion Methods**

#### **To Decimal**
```javascript
const frac = new Fraction('3/4');
const decimal = frac.toDecimal(); // 0.75
console.log(decimal);
```

#### **To Mixed Number**
```javascript
const frac = new Fraction('7/3');
const mixedNumber = frac.toMixedNumber(); // '2 1/3'
console.log(mixedNumber);
```

#### **To String**
```javascript
const frac = new Fraction('3/4');
const str = frac.toString(); // '3/4'
console.log(str);
```

---

### **6. Generating MathML**
```javascript
const frac = new Fraction('3/4');
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

### **7. Evaluating Expressions**
```javascript
const result = evaluate('3 * 1/6'); // { numerator: 1, denominator: 2 }
console.log(result.toString()); // '1/2'
```

---

### **8. Chaining Methods**
```javascript
const result = new Fraction('7/3')
  .add(new Fraction('1/2')) // { numerator: 17, denominator: 6 }
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

### **9. Handling Edge Cases**

#### **Zero Denominator**
```javascript
try {
  const frac = new Fraction('1/0'); // Throws an error
} catch (error) {
  console.error(error.message); // "Invalid input: Denominator cannot be zero."
}
```

#### **Invalid Input**
```javascript
try {
  const frac = new Fraction('invalid'); // Throws an error
} catch (error) {
  console.error(error.message); // "Invalid input format: invalid"
}
```

---

### **10. Combining Operations**
```javascript
const result = new Fraction('2/3')
  .add(new Fraction('3/7')) // { numerator: 23, denominator: 21 }
  .multiply(new Fraction('1/2')) // { numerator: 23, denominator: 42 }
  .toString(); // '23/42'

console.log(result); // '23/42'
```

---

### **11. Working with Percentages and Ratios**
```javascript
const frac1 = new Fraction('50%'); // { numerator: 1, denominator: 2 }
const frac2 = new Fraction('2:3'); // { numerator: 2, denominator: 3 }

const result = frac1.add(frac2); // { numerator: 7, denominator: 6 }
console.log(result.toString()); // '7/6'
```

---

### **12. Using `isEqual` with Different Formats**
```javascript
const frac1 = new Fraction('2/4'); // Automatically simplified to { numerator: 1, denominator: 2 }
const frac2 = new Fraction('1/2');
console.log(isEqual(frac1, frac2)); // true

const frac3 = new Fraction('50%');
const frac4 = new Fraction('0.5');
console.log(isEqual(frac3, frac4)); // true

const frac5 = new Fraction('2:3');
const frac6 = new Fraction('2/3');
console.log(isEqual(frac5, frac6)); // true
```

---

### **13. Converting Improper Fractions to Mixed Numbers**
```javascript
const frac = new Fraction('7/3');
const mixedNumber = frac.toMixedNumber(); // '2 1/3'
console.log(mixedNumber);
```

---

### **14. Using `evaluate` with Complex Expressions**
```javascript
const result = evaluate('(1/2 + 1/3) * (2/3 - 1/4)'); // { numerator: 5, denominator: 18 }
console.log(result.toString()); // '5/18'
```

---

### **15. Combining All Features**
```javascript
const frac1 = new Fraction('2/3');
const frac2 = new Fraction('3/7');
const result = frac1.add(frac2).toMathML();

console.log(result);
// Output:
// <math xmlns="http://www.w3.org/1998/Math/MathML">
//   <mfrac>
//     <mn>23</mn>
//     <mn>21</mn>
//   </mfrac>
// </math>
```

---

## 📖 API Reference  

### **Core Functions**  

#### `Fraction(value: number | string): Fraction`  
Converts a decimal, string, percentage, or ratio into a fraction object.  

- **Parameters:**  
  - `value` (number | string): The decimal (`0.75`), fraction string (`"3/4"`), percentage (`"50%"`), or ratio (`"2:3"`).  
- **Returns:** A `Fraction` object.  

#### `toMathML(fraction: Fraction): string`  
Generates a MathML string for better accessibility.  

- **Parameters:**  
  - `fraction` (Fraction): The fraction object.  
- **Returns:** A MathML string.  

#### `toString(fraction: Fraction): string`  
Converts a fraction to its string representation.  

- **Parameters:**  
  - `fraction` (Fraction): The fraction object.  
- **Returns:** A string (e.g., `"3/4"`).  

#### `evaluate(expression: string): Fraction`  
Evaluates a mathematical expression involving fractions.  

- **Parameters:**  
  - `expression` (string): The expression to evaluate (e.g., `'3 * 1/6'`).  
- **Returns:** A `Fraction` object representing the result.  

---

### **Additional Methods**  

#### `toDecimal(fraction: Fraction): number`  
Converts a fraction to its decimal representation.  

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

#### `toMixedNumber(): string`  
Converts an improper fraction to a mixed number (e.g., `'7/3'` → `'2 1/3'`).  

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

This library is **not** an equation editor. It is specifically designed to remove pain in working with fraction for **accessible fraction display**. For complex equations, consider MathML or other specialized libraries.  

---

💡 **Enjoy using Fractionability to make the web more inclusive!** 🚀  
