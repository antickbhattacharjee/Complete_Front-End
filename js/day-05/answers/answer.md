# Day 05 Answer

## Explanation
We use `.filter()` to weed out the failing grades. Because `.filter()` returns a new array, we store it in a variable. Then we use `.map()` on that new array to transform the data (adding the curve), storing it in the final variable.

## Complete Solution (Assignment 3)

### `script.js`
```javascript
const scores = [45, 80, 65, 92, 30, 75];

// 1. Filter out scores below 60
const passedScores = scores.filter((score) => {
    return score >= 60;
});
console.log("Passed:", passedScores);

// 2. Map the passed scores to add a 10% curve
const gradedScores = passedScores.map((score) => {
    return score * 1.1;
});

// Output the final results
console.log("Final Graded Scores:", gradedScores);
```
*(Note: You could also chain these methods together like `scores.filter(...).map(...)`, but breaking it into steps is better for beginners).*

## Expected Output (in Console)
```text
Passed: [80, 65, 92, 75]
Final Graded Scores: [88, 71.5, 101.2, 82.5]
```
