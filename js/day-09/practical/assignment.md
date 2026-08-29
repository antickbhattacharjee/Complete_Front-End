# Day 09 Assignment

## Assignment 1: Basic practice (LocalStorage)
Write JS to save your favorite color to LocalStorage. Then, immediately read it back out of LocalStorage and log it to the console. Check the browser DevTools (Application tab) to verify it is there.

## Assignment 2: Intermediate practice (Fetch)
Write an `async` function that fetches data from the free API: `https://jsonplaceholder.typicode.com/users/1`. Await the `.json()` response and `console.log` the user's name.

## Assignment 3: Real-world practical task
Create a Random Quote Generator.
1. Create `quote.html` and `script.js`.
2. HTML: Create a `<button id="new-quote">` and a `<blockquote id="quote-text">`.
3. JS: Write an `async` function called `getQuote()`.
4. JS: Inside the function, `fetch("https://api.adviceslip.com/advice")`.
5. JS: Await the response and convert to `.json()`.
6. JS: Extract the quote text (Hint: look at the console to see the structure, it is usually `data.slip.advice`).
7. JS: Update the `<blockquote>` textContent with the quote.
8. JS: Add a click event listener to the button that calls `getQuote()`.
