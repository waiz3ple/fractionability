# Fractionability  
## Fraction Converter  

A lightweight and accessible JavaScript library designed to improve fraction representation on the web. It seamlessly converts decimals and strings into fractions, ensuring human-readable and screen-reader-friendly output. Additionally, it generates MathML for enhanced accessibility.

---

## 🔥 Why Fractionability?  

Many websites display fractions in formats like `1/2` or `3 1/2`, which can be challenging for screen readers to interpret correctly. Improper fractions and mixed numbers often cause accessibility issues, making content difficult to understand for visually impaired users.  

**Fractionability** solves this by ensuring:  
- Properly formatted fractions for better readability.  
- Enhanced accessibility with MathML.  
- A simple and intuitive API for developers.  

🚀 **Note:** This library is **not** an equation editor. If you need advanced mathematical notation, consider using MathML or dedicated libraries.

---

## ✨ Features  

✅ Convert decimals (e.g., `0.75`) to fractions.  
✅ Convert fraction strings (e.g., `'3/4'`) to fraction objects.  
✅ Display fractions in a **human-readable** and **screen-reader-friendly** format.  
✅ Generate MathML for **better accessibility**.  
✅ Designed specifically for **fraction display**, not complex math equations.  

---

## 📦 Installation  

Install via **npm**:  

```bash  
npm install fractionability  
```  

Or using an **alias**:  

```bash  
npm install @f13y/fractionability  
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
import { toFraction, evaluate, toMathML } from 'fractionability';  
```  

If installed using an **alias**:  

```javascript  
import { toFraction, evaluate, toMathML } from 'f13y';  
```  

### Converting Decimals to Fractions  

```javascript  
const fraction = toFraction(0.75);  
console.log(displayFraction(fraction)); // Output: "3/4"  
console.log(toMathML(fraction));  
// Output:  
// <math xmlns="http://www.w3.org/1998/Math/MathML">  
//   <mfrac>  
//     <mn>3</mn>  
//     <mn>4</mn>  
//   </mfrac>  
// </math>  
```  

### Converting Strings to Fractions  

```javascript  
const fraction = toFraction("2/3");  
console.log(displayFraction(fraction)); // Output: "2/3"  
console.log(toMathML(fraction));  
```  

### Handling Mixed Numbers  

```javascript  
const fraction = toFraction("3 1/2");  
console.log(displayFraction(fraction)); // Output: "7/2" (improper fraction)  
console.log(toMathML(fraction));  
```  

---

## 📖 API Reference  

### `toFraction(value)`  
Converts a decimal or string into a fraction object.  

- **Parameters:** `value` (number | string) - The decimal (`0.75`) or fraction string (`"3/4"`).  
- **Returns:** A `math.Fraction` object.  

### `displayFraction(fraction)`  
Formats a fraction in a human-readable and screen-reader-friendly format.  

- **Parameters:** `fraction` (math.Fraction) - The fraction object.  
- **Returns:** A string (e.g., "3/4").  

### `toMathML(fraction)`  
Generates a MathML string for better accessibility.  

- **Parameters:** `fraction` (math.Fraction) - The fraction object.  
- **Returns:** A MathML string.  

---

## 🎯 Examples  

### Example 1: Convert a Decimal  
```javascript  
const fraction = toFraction(0.625);  
console.log(displayFraction(fraction)); // Output: "5/8"  
console.log(toMathML(fraction));  
```  

### Example 2: Convert a Fraction String  
```javascript  
const fraction = toFraction("1/2");  
console.log(displayFraction(fraction)); // Output: "1/2"  
console.log(toMathML(fraction));  
```  

### Example 3: Handle Mixed Numbers  
```javascript  
const fraction = toFraction("3 1/2");  
console.log(displayFraction(fraction)); // Output: "7/2"  
console.log(toMathML(fraction));  
```  

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

- [mathjs](https://mathjs.org/) for fraction handling.  
- [xmlbuilder2](https://github.com/oozcitak/xmlbuilder2) for MathML generation.  

---

## 📩 Support  

For questions or issues, open an **issue** on the [GitHub repository](https://github.com/waiz3ple/fractionability/issues).  

---

## ⚠️ Disclaimer  

This library is **not** an equation editor. It is specifically designed for **accessible fraction display**. For complex equations, consider MathML or other specialized libraries.  

---

💡 **Enjoy using Fractionability to make the web more inclusive!** 🚀  

---

