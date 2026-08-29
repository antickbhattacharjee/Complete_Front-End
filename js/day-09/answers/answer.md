# Day 09 Answer

## Explanation
We combine Event Listeners, DOM Manipulation, and the Fetch API. When the user clicks the button, the JS reaches out across the internet to the Advice Slip API, waits for the response, converts the JSON text into a JS Object, extracts the specific string we want, and injects it into the DOM.

## Complete Solution (Assignment 3)

### `quote.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quote Generator</title>
</head>
<body>
    <h1>Random Advice</h1>
    <blockquote id="quote-text">Click the button to get advice.</blockquote>
    <button id="new-quote">Get Advice</button>

    <script src="script.js"></script>
</body>
</html>
```

### `script.js`
```javascript
const btn = document.getElementById("new-quote");
const quoteDisplay = document.getElementById("quote-text");

// Async function to handle the network request
const getQuote = async () => {
    try {
        // Show loading state
        quoteDisplay.textContent = "Loading...";
        
        // 1. Fetch data
        const response = await fetch("https://api.adviceslip.com/advice");
        
        // 2. Convert to JS object
        const data = await response.json();
        
        // 3. Update DOM (The API structure is data.slip.advice)
        quoteDisplay.textContent = `"${data.slip.advice}"`;
        
    } catch (error) {
        console.error("Failed to fetch quote", error);
        quoteDisplay.textContent = "Error loading advice. Check your internet.";
    }
};

// Trigger the function on click
btn.addEventListener("click", getQuote);
```

## Expected Output
A simple page with text and a button. Clicking the button changes the text to "Loading...", and a fraction of a second later, a random piece of real advice pulled from the internet replaces it.
