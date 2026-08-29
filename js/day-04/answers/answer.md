# Day 04 Answer

## Explanation
We define a reusable formula inside the function. By using `return`, the function calculates the math and hands the answer back to the main program, allowing us to store it in `fTemp`.

## Complete Solution (Assignment 3)

### `script.js`
```javascript
// Arrow function expression assigned to a constant
const celsiusToFahrenheit = (celsius) => {
    // Calculate and store locally
    let fahrenheit = (celsius * 9/5) + 32;
    
    // Hand the value back
    return fahrenheit;
};

// Main program execution
let todayTemp = 25; 

// Calling the function and catching the returned value
let fTemp = celsiusToFahrenheit(todayTemp);

// Outputting the result
console.log(`Today's temperature is ${todayTemp}°C, which is ${fTemp}°F.`);

// Reusability check
console.log(`0°C is ${celsiusToFahrenheit(0)}°F.`);
console.log(`100°C is ${celsiusToFahrenheit(100)}°F.`);
```

## Expected Output (in Console)
```text
Today's temperature is 25°C, which is 77°F.
0°C is 32°F.
100°C is 212°F.
```
