# Fractionability  
## Accessible Fraction Library  

**Fractionability** is a lightweight, modular, and accessible JavaScript library designed to improve fraction representation on the web. It seamlessly converts decimals, strings, and mixed numbers into fractions, ensuring human-readable and screen-reader-friendly output. Additionally, it generates MathML for enhanced accessibility, making it an ideal tool for creating inclusive web content.

---

## 🔥 Why Fractionability?  

Many websites display fractions in formats like `1/2` or `3 1/2`, which can be challenging for screen readers to interpret correctly. Improper fractions and mixed numbers often cause accessibility issues, making content difficult to understand for visually impaired users.  

**Fractionability** solves this by ensuring:  
- Properly formatted fractions for better readability.  
- Enhanced accessibility with MathML.  
- A simple and intuitive API for developers.  
- Support for chainable methods and modular design.  

🚀 **Note:** This library is **not** an equation editor. If you need advanced mathematical notation, consider using MathML or dedicated libraries.

---

## ✨ Features  

✅ Convert decimals (e.g., `0.75`) to fractions.  
✅ Convert fraction strings (e.g., `'3/4'`) to fraction objects.  
✅ Handle mixed numbers (e.g., `'3 1/2'`).  
✅ Simplify fractions (e.g., `'4/8'` → `'1/2'`).  
✅ Generate MathML for **better accessibility**.  
✅ Chainable methods for easy use (e.g., `fraction('7/3').simplify().toMathML()`).  
✅ Standalone functions for modularity (e.g., `evaluate('3 * 1/6')`).  
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
import { fraction, simplify, evaluate, toMathML, toString } from 'fractionability';  
```  

### Basic Usage  

#### Convert Decimals or Strings to Fractions  
```javascript  
const frac1 = fraction(0.25); // '1/4'  
const frac2 = fraction('7/3'); // '7/3'  
const frac3 = fraction('1 2/3'); // '5/3'  
```  

#### Simplify Fractions  
```javascript  
const simplified = fraction('4/8').simplify(); // '1/2'  
```  

#### Generate MathML  
```javascript  
const mathML = fraction('1/4').toMathML();  
// Output:  
// <math xmlns="http://www.w3.org/1998/Math/MathML">  
//   <mfrac>  
//     <mn>1</mn>  
//     <mn>4</mn>  
//   </mfrac>  
// </math>  
```  

#### Evaluate Expressions  
```javascript  
const result = evaluate('3 * 1/6'); // '1/2'  
```  

#### Convert to String  
```javascript  
const str = fraction('7/3').toString(); // '7/3'  
```  

---

## 📖 API Reference  

### **Core Functions**  

#### `fraction(value: number | string): Fraction`  
Converts a decimal or string into a fraction object.  

- **Parameters:**  
  - `value` (number | string): The decimal (`0.75`) or fraction string (`"3/4"`).  
- **Returns:** A `Fraction` object.  

#### `simplify(fraction: Fraction): Fraction`  
Simplifies a fraction to its lowest terms.  

- **Parameters:**  
  - `fraction` (Fraction): The fraction object to simplify.  
- **Returns:** A new `Fraction` object in its simplest form.  

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

#### `add(fraction1: Fraction, fraction2: Fraction): Fraction`  
Adds two fractions and returns the result.  

#### `subtract(fraction1: Fraction, fraction2: Fraction): Fraction`  
Subtracts one fraction from another and returns the result.  

#### `multiply(fraction1: Fraction, fraction2: Fraction): Fraction`  
Multiplies two fractions and returns the result.  

#### `divide(fraction1: Fraction, fraction2: Fraction): Fraction`  
Divides one fraction by another and returns the result.  

#### `isEqual(fraction1: Fraction, fraction2: Fraction): boolean`  
Checks if two fractions are equal, accounting for simplification.  

#### `isProper(fraction: Fraction): boolean`  
Checks if a fraction is proper (numerator < denominator).  

#### `toMixedNumber(fraction: Fraction): string`  
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

This library is **not** an equation editor. It is specifically designed for **accessible fraction display**. For complex equations, consider MathML or other specialized libraries.  

---

💡 **Enjoy using Fractionability to make the web more inclusive!** 🚀  
---