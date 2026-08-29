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
- **Incorrect specificity assumptions**: Thinking classes always override tags (actually, `#id > .class > element` in specificity).
- **Over-relying on ID selectors**: Using IDs for styling instead of classes (reduces reusability).

## 6. Best Practices
- **Always use External CSS** (`<link rel="stylesheet">`). Avoid Inline CSS (`<h1 style="color:red;">`) as it is messy and hard to maintain.
- Use **classes** for styling 95% of the time. Save **IDs** for JavaScript targeting or unique page sections.
- Use meaningful selector names: `.button-primary` is clearer than `.blue-box`.
- Start with element selectors for base styles, then use classes for variations.

## 7. Accessibility Considerations
- Color contrast is critical for readability (WCAG AA requires 4.5:1 contrast for normal text).
- Don't rely on color alone to convey information (e.g., "red means error" - also use icons or text).
- Maintain visible focus states for keyboard navigation (don't remove outlines without providing alternatives).
- Ensure text is resizable (don't use fixed px sizes exclusively; consider rem or em).

## 8. Trainer Notes
- Emphasize the "Cascading" part of CSS. If you declare `p { color: red; }` at line 10, and `p { color: blue; }` at line 50, the paragraph will be blue because the latter rule overrides the former.
- Show the browser DevTools inspector to reveal which CSS rule is actually applied to an element.
- Explain that specificity prevents CSS chaos: more specific selectors override general ones.
- Demo: Show what happens when mixing inline styles, internal, and external CSS (external wins due to order).

## 9. Quick Revision Checklist
- [ ] CSS = Cascading Style Sheets (adds styling to HTML)
- [ ] Element Selector: `p { ... }` targets all `<p>` tags
- [ ] Class Selector: `.classname { ... }` targets `class="classname"`
- [ ] ID Selector: `#idname { ... }` targets `id="idname"`
- [ ] **Always use a dot (.) before class names**: `.classname` not `classname`
- [ ] **Always use a hash (#) before ID names**: `#idname` not `idname`
- [ ] External CSS linked in `<head>`: `<link rel="stylesheet" href="style.css">`
- [ ] Every CSS rule ends with a semicolon (;)
- [ ] IDs are unique (use once per page)
- [ ] Classes are reusable (use on multiple elements)
- [ ] Specificity: ID > Class > Element
- [ ] Cascade: Later rules override earlier ones (same specificity)

## 10. Knowledge Check Questions
1. What does CSS stand for?
2. What are the three ways to add CSS to HTML? Which is best and why?
3. What is the difference between a class selector and an ID selector?
4. How do you select all `<p>` tags with CSS?
5. What does "cascading" mean in CSS?
6. What is specificity and why does it matter?
7. Why should you avoid using inline styles?
8. What CSS properties are most commonly used for styling?
