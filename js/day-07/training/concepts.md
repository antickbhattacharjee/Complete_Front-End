# DOM Manipulation

## 1. Concept Explanation
The **DOM (Document Object Model)** is the bridge between HTML and JavaScript. When the browser loads an HTML file, it converts it into a giant JavaScript Object (the DOM). 
Because it's an object, we can use JS to select specific parts of it (like an `<h1>`), change their properties (like text or color), or add/remove them entirely.

## 2. Syntax
```javascript
// 1. Selecting Elements
const title = document.getElementById("main-title");
const button = document.querySelector(".btn-primary"); // Uses CSS selectors!

// 2. Changing Content
title.textContent = "New Title!";
title.innerHTML = "New <em>Title!</em>"; // Parses HTML tags

// 3. Changing Styles & Classes
title.style.color = "red";
title.classList.add("highlight");
title.classList.remove("hidden");
```

## 3. Explanation of Syntax
- `document`: The global object representing your entire HTML page.
- `querySelector()`: The modern, most powerful way to select elements. You pass it a string formatted exactly like a CSS selector (e.g., `.class`, `#id`, `div > p`). It returns the *first* matching element.
- `textContent`: Safely changes the text inside an element.
- `style`: Allows you to change inline CSS. Note: CSS properties with dashes (`background-color`) become camelCase in JS (`backgroundColor`).
- `classList`: The best way to change styles is to add/remove predefined CSS classes.

## 4. Examples

### Practical Example (Dark Mode Toggle Logic)
```javascript
const body = document.querySelector("body");

// If this runs, the body gets the class "dark-theme"
body.classList.add("dark-theme");

// To toggle it on and off:
body.classList.toggle("dark-theme");
```

## 5. Common Mistakes
- **Typos in IDs or Classes**: If `querySelector` can't find the element, it returns `null`. Trying to change `textContent` on `null` will crash your script. Always check your spelling.
- **Putting the `<script>` in the `<head>`**: If the script runs before the HTML `<body>` loads, the DOM doesn't exist yet, and `querySelector` will fail. Put scripts at the bottom.

## 6. Best Practices
- Never use `.style` to apply complex styling. Instead, write a class in your CSS file (e.g., `.active { color: blue; font-weight: bold; }`) and use JS to simply `.classList.add("active")`.

## 7. Trainer Notes
- This is the "Aha!" moment for students where they realize how websites actually work. Spend extra time demonstrating how changing `textContent` instantly updates the browser.

## 8. Quick Revision
- `document.querySelector(".class")` selects elements.
- `el.textContent` changes text.
- `el.classList.add("class")` changes CSS safely.
