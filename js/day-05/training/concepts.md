# Arrays & Array Methods

## 1. Concept Explanation
An **Array** is a special variable that can hold more than one value at a time. Think of it as a list.
Instead of creating `item1`, `item2`, `item3`, you create one array: `items`.

## 2. Syntax
```javascript
// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing an element (Arrays are 0-indexed!)
console.log(fruits[0]); // Apple

// Basic Methods
fruits.push("Orange"); // Adds to the end
fruits.pop();          // Removes from the end

// Modern Iteration (forEach)
fruits.forEach((fruit) => {
    console.log(fruit);
});
```

## 3. Explanation of Syntax
- `[]`: Square brackets define an array.
- `[0]`: The **index**. Computers start counting at 0. So the first item is `0`, the second is `1`.
- `push()`: A built-in function (called a method) attached to all arrays that adds data.
- `forEach()`: A method that loops through the array. It takes a function as an argument (a callback function) and runs that function once for *every* item in the array.

## 4. Examples

### Practical Example (Map and Filter)
```javascript
const numbers = [1, 2, 3, 4, 5];

// .filter() creates a NEW array with only items that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// .map() creates a NEW array by transforming every item
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

## 5. Common Mistakes
- **Off-by-one errors**: Trying to access the 3rd item in an array using `arr[3]`. The 3rd item is `arr[2]`. `arr[3]` is actually the 4th item!
- **Not saving `.map()` or `.filter()`**: These methods do *not* modify the original array. They return a brand new array. You must save it: `let newArr = oldArr.map(...)`.

## 6. Best Practices
- Prefer `.forEach()`, `.map()`, and `.filter()` over traditional `for (let i=0...)` loops. They are cleaner, less prone to errors, and standard in modern JS frameworks like React.

## 7. Trainer Notes
- Explain the concept of a "Callback Function" here. This is usually the hardest concept for beginners to grasp—the idea that you can pass a whole function *into* another function (`forEach`).

## 8. Quick Revision
- `[]` creates an array. Index starts at 0.
- `.push()` adds data.
- `.forEach()` loops over data.
- `.filter()` extracts specific data.
- `.map()` transforms data.
