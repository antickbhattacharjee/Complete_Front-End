# Events and Form Handling

## 1. Concept Explanation
Websites are interactive. When a user clicks a button, hovers over an image, or types in a form, the browser fires an **Event**. 
In JS, we can attach an **Event Listener** to an HTML element. It sits there, waiting for the event to happen, and when it does, it runs a specific function.

## 2. Syntax
```javascript
// 1. Select the element
const myButton = document.querySelector("#my-btn");

// 2. Attach the listener
// element.addEventListener("event_type", callback_function)
myButton.addEventListener("click", () => {
    console.log("Button was clicked!");
});
```

## 3. Explanation of Syntax
- `addEventListener()`: The method used to listen for events.
- `"click"`: The name of the event. Others include `"submit"`, `"input"`, `"mouseover"`, `"keydown"`.
- `() => {}`: The callback function that executes *only* when the event occurs.

## 4. Examples

### Practical Example (Reading an Input Field)
```javascript
const inputField = document.querySelector("#username");
const displayMsg = document.querySelector("#msg");

// Fires every time the user types a letter
inputField.addEventListener("input", () => {
    // .value grabs what the user typed
    displayMsg.textContent = `Hello, ${inputField.value}`; 
});
```

### Practical Example (Form Submission)
```javascript
const form = document.querySelector("#login-form");

form.addEventListener("submit", (event) => {
    // CRITICAL: Stops the page from refreshing!
    event.preventDefault(); 
    
    console.log("Form submitted via JS instead of refreshing!");
});
```

## 5. Common Mistakes
- **Not using `preventDefault()` on forms**: By default, submitting an HTML form refreshes the entire page, which immediately deletes all your JavaScript memory and variables. You MUST prevent the default action if you want JS to handle the form.
- **Using `.textContent` on an input**: To get what a user typed into an `<input>`, you must use `.value`. `.textContent` is for things like `<p>` and `<h1>`.

## 6. Best Practices
- Never use inline HTML event handlers like `<button onclick="doSomething()">`. It mixes logic with markup. Always use `addEventListener` in your JS file.

## 7. Trainer Notes
- The concept of the `event` object (the `e` or `event` passed into the callback) is tricky. `console.log(event)` inside a click listener to show students how much data the browser generates for a single click (X/Y coordinates, which button was pressed, etc.).

## 8. Quick Revision
- `element.addEventListener("click", () => { ... })`
- Input field data = `element.value`
- Form submission = `event.preventDefault()` is mandatory.
