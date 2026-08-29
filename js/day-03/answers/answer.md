# Day 03 Answer

## Explanation
We use a `for` loop to cycle through numbers 1 to 15. The loop variable `i` represents the current number. Inside the loop, the `if / else if / else` structure checks the conditions from top to bottom. As soon as one is true, it runs that block and skips the rest for that iteration.

## Complete Solution (Assignment 3)

### `script.js`
```javascript
// Loop from 1 to 15
for (let i = 1; i <= 15; i++) {
    
    if (i === 7) {
        // Strict equality check
        console.log("Lucky Seven!");
    } else if (i > 10) {
        // Greater than check
        console.log(`${i} is Greater than ten`);
    } else {
        // Fallback for all other numbers
        console.log(i);
    }
    
}
```

## Expected Output (in Console)
```text
1
2
3
4
5
6
Lucky Seven!
8
9
10
11 is Greater than ten
12 is Greater than ten
13 is Greater than ten
14 is Greater than ten
15 is Greater than ten
```
