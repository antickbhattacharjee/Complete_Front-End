# Day 02 Answer

## Explanation
We use `const` for things that won't change (the product name and unit price). We use `let` for the quantity and the total cost, because they will be updated later in the script. Template literals make it very easy to inject these variables into a readable string.

## Complete Solution (Assignment 3)

### `script.js`
```javascript
// Step 2 & 3: Constants
const itemName = "Wireless Mouse";
const itemPrice = 25.00;

// Step 4: Variable
let quantity = 2;

// Step 5: Calculation
let totalCost = itemPrice * quantity;

// Step 6: Log Receipt
console.log(`Receipt 1: You bought ${quantity} ${itemName}(s) for a total of $${totalCost}.`);

// Step 7: Update and Recalculate
quantity = 3;
totalCost = itemPrice * quantity; // Must recalculate because quantity changed!

console.log(`Receipt 2: You bought ${quantity} ${itemName}(s) for a total of $${totalCost}.`);
```

## Expected Output (in Console)
```text
Receipt 1: You bought 2 Wireless Mouse(s) for a total of $50.
Receipt 2: You bought 3 Wireless Mouse(s) for a total of $75.
```
