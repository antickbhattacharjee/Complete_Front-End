# Introduction to CSS & Selectors

## 1. Concept Explanation
CSS stands for **Cascading Style Sheets**. If HTML is the skeleton of a webpage, CSS is the skin, clothes, and makeup. It describes how HTML elements should be displayed on screen.

CSS operates on a rule-based system. You **select** an HTML element, and then you declare **properties** and **values** to change its appearance.

## 2. Syntax
```css
selector {
    property: value;
    another-property: value;
}
```

## 3. Explanation of Syntax
- **Selector**: Points to the HTML element you want to style (e.g., `h1`, `.my-class`, `#my-id`).
- **Declaration Block**: Everything inside the curly braces `{}`.
- **Property**: The specific aspect you want to change (e.g., `color`, `font-size`).
- **Value**: What you are changing it to (e.g., `blue`, `16px`).

## 4. Examples

### Adding CSS to HTML (External - Best Practice)
```html
<!-- Inside the <head> of index.html -->
<link rel="stylesheet" href="style.css">
```

### Basic Selectors (Inside style.css)
```css
/* 1. Element Selector (targets ALL <p> tags) */
p {
    color: red;
}

/* 2. Class Selector (targets any element with class="highlight") */
.highlight {
    color: blue;
}

/* 3. ID Selector (targets a single element with id="main-title") */
#main-title {
    color: green;
}
```

## 5. Common Mistakes
- **Forgetting the dot or hash**: Writing `highlight { color: blue; }` instead of `.highlight { color: blue; }`. Without the dot, CSS looks for an HTML tag literally named `<highlight>`.
- **Forgetting the semicolon `;`**: This breaks the entire CSS rule. Every value must end with a semicolon.

## 6. Best Practices
- **Always use External CSS** (`<link rel="stylesheet">`). Avoid Inline CSS (`<h1 style="color:red;">`) as it is messy and hard to maintain.
- Use **classes** for styling 95% of the time. Save **IDs** for JavaScript targeting or anchor links.

## 7. Trainer Notes
- Emphasize the "Cascading" part of CSS. If you declare `p { color: red; }` at line 10, and `p { color: blue; }` at line 50, the paragraph will be blue because the latter rule overrides the former.

## 8. Quick Revision
- Element Selector: `tagname`
- Class Selector: `.classname`
- ID Selector: `#idname`
