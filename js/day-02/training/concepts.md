# Variables, Data Types & Operators

## 1. Concept Explanation
A **variable** is a named container that stores data.
**Data Types** categorize what kind of data is in the box (e.g., text vs numbers).
**Operators** allow you to do math or combine data.

## 2. Syntax
```javascript
// Variable Declaration
let age = 25;        // Can be changed later
const name = "John"; // Cannot be changed

// Changing a let variable
age = 26; 

// Data Types
let text = "Hello";  // String
let price = 9.99;    // Number
let isOnline = true; // Boolean (true/false)

// Template Literals (combining variables and text)
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
```

## 3. Explanation of Syntax
- `let`: Used for values that might change (like a score in a game).
- `const`: Used for values that should NEVER change (like an ID number or a birthdate).
- **String**: Text, wrapped in single `''`, double `""`, or backticks ` `` `.
- **Number**: Any number, with or without decimals. No quotes!
- **Boolean**: Strictly `true` or `false`. No quotes!
- **Template Literal**: Uses backticks (`` ` ``) and `${}` to inject variables directly into a string, much cleaner than using `+`.

## 4. Examples

### Practical Example (Math Operators)
```javascript
let apples = 5;
let oranges = 3;
let totalFruit = apples + oranges; // 8

let cost = totalFruit * 2; // Multiplication
console.log(`Total cost is $${cost}`); // Output: Total cost is $16
```

## 5. Common Mistakes
- **Using `var`**: Older tutorials use `var` to declare variables. Do not use it. It has scope issues. Always use `let` or `const`.
- **Trying to reassign a `const`**: `const pi = 3.14; pi = 4;` will throw an error and crash your script.
- **Putting quotes around numbers/booleans**: `let score = "10";` makes it a string. If you try to add 5 to it (`score + 5`), JS might output `"105"` instead of `15`.

## 6. Best Practices
- Default to using `const`. Only change it to `let` if you realize you need to update the value later. This prevents bugs.
- Use camelCase for variable names (e.g., `userAge`, `totalPrice`).

## 7. Trainer Notes
- Explain the difference between `=` (assignment) and `==` (comparison). `let x = 5` means "put 5 into x". It does not ask "is x equal to 5?".

## 8. Quick Revision
- `let` = changeable.
- `const` = constant.
- String = text (quotes). Number = math (no quotes). Boolean = true/false.
