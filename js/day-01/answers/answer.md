# Day 01 Answer

## Explanation
We use the `<script>` tag with the `src` attribute pointing to our `.js` file. Placing it just above `</body>` ensures the HTML loads before the JS runs. We use `console.log()` to output strings (text inside quotes) and numbers (without quotes).

## Complete Solution (Assignment 3)

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Setup</title>
</head>
<body>
    <h1>Check the Console!</h1>
    
    <!-- External JS Link -->
    <script src="script.js"></script>
</body>
</html>
```

### `script.js`
```javascript
// Printing strings (text) requires quotes
console.log("My name is Jane Doe.");
console.log("My favorite language is JavaScript!");

// Printing math/numbers does not require quotes
console.log(10 + 5);
```

## Expected Output
The webpage will just show the heading. However, if you open the Developer Tools (F12) and look at the Console, you will see the three lines of text, with the third line displaying the number `15`.
