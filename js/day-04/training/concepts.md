# Functions & Scope

## 1. Concept Explanation
A **Function** is a reusable block of code designed to perform a particular task. Instead of writing the same 5 lines of code 10 times, you write it once inside a function and just *call* the function 10 times.

**Scope** determines where variables are visible. A variable declared *inside* a function cannot be seen *outside* of it.

## 2. Syntax
```javascript
// Traditional Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// ES6 Arrow Function (Modern way)
const addNumbers = (a, b) => {
    return a + b;
};

// Calling a function
let message = greet("Alice"); 
console.log(message); // "Hello, Alice!"
```

## 3. Explanation of Syntax
- `function`: The keyword to declare a function.
- `name`: A **parameter** (a placeholder variable used inside the function).
- `"Alice"`: An **argument** (the actual value passed into the function when you call it).
- `return`: Sends a value *back* to wherever the function was called. If you don't return anything, the function outputs `undefined`.
- `() => {}`: The arrow function syntax. It is shorter and behaves slightly differently with the `this` keyword (advanced).

## 4. Examples

### Practical Example (Scope)
```javascript
let globalScore = 0; // Global Scope (everyone can see this)

function increaseScore() {
    let localBonus = 50; // Local Scope (only exists inside this function)
    globalScore = globalScore + 10 + localBonus;
}

increaseScore();
console.log(globalScore); // 60
// console.log(localBonus); // ERROR: localBonus is not defined
```

## 5. Common Mistakes
- **Forgetting to return a value**: If a function does a calculation but lacks a `return` statement, you cannot save the result to a variable.
- **Calling the function incorrectly**: Writing `greet;` instead of `greet();`. The parentheses `()` are what actually execute the function.

## 6. Best Practices
- Function names should usually be verbs (e.g., `calculateTotal()`, `getUser()`, `validateForm()`) because functions *do* things.
- Keep functions small. A function should ideally do one thing only.

## 7. Trainer Notes
- Write a function that calculates tax. Have the students call it three times with three different prices. This perfectly illustrates the power of reusability.

## 8. Quick Revision
- `function name(parameters) { ... }`
- `const name = (parameters) => { ... }`
- `return` sends data back.
- Variables inside a function die when the function finishes (Local Scope).
