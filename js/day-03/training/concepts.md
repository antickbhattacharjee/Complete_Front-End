# Conditions and Loops

## 1. Concept Explanation
**Conditions** allow your code to ask questions (e.g., "Is the user logged in?"). If the answer is true, run some code. If false, run different code.
**Loops** allow you to run the exact same block of code multiple times without writing it out multiple times.

## 2. Syntax
```javascript
// Conditions
if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}

// For Loop
// for (start; condition_to_keep_going; step)
for (let i = 0; i < 5; i++) {
    console.log(`Iteration number ${i}`);
}
```

## 3. Explanation of Syntax
- **`if / else`**: Evaluates the condition inside the parenthesis `()`. If it is a `true` boolean, it executes the code in the `{}`.
- **`===`**: Strict equality operator. (e.g., `if (color === "red")`). Do NOT use a single `=`.
- **`!==`**: Not equal to.
- **`for` loop**: Has 3 parts:
  1. `let i = 0`: Creates a counter variable `i`.
  2. `i < 5`: The loop runs as long as this is true.
  3. `i++`: Adds 1 to `i` after every loop.

## 4. Examples

### Practical Example (Login Check)
```javascript
const password = "secretPassword123";
const input = "wrongPass";

if (input === password) {
    console.log("Login successful!");
} else {
    console.log("Incorrect password. Try again.");
}
```

## 5. Common Mistakes
- **Using `=` instead of `===`**: `if (x = 5)` assigns 5 to x and is always "true". You must use `if (x === 5)` to *compare* them.
- **Infinite Loops**: Writing a `for` loop where the condition is never false (e.g., forgetting the `i++`). This will crash the browser tab.

## 6. Best Practices
- Always use `===` (strict equality) instead of `==` (loose equality). Loose equality tries to convert types (`"5" == 5` is true), which causes weird bugs. `===` checks both value AND type (`"5" === 5` is false).

## 7. Trainer Notes
- Break down the `for` loop slowly. Walk through iterations 0, 1, 2 manually so they understand how the `i` variable increments.

## 8. Quick Revision
- `if (condition) { action }`
- `===` means "is exactly equal to".
- `for(let i=0; i<max; i++)` repeats code.
