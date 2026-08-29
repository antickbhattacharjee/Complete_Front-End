# HTML Accessibility (a11y)

## 1. Concept Explanation
Accessibility (often abbreviated as **a11y** because there are 11 letters between 'a' and 'y') ensures that websites can be used by everyone, including people with visual, motor, auditory, or cognitive disabilities. HTML is the primary layer for accessibility.

## 2. Syntax (ARIA Attributes)
```html
<button aria-label="Close dialog">X</button>

<div role="alert">
    Invalid password!
</div>

<img src="decorative-swirl.png" alt="" aria-hidden="true">
```

## 3. Explanation of Syntax
- `aria-label`: Provides a label for an element that doesn't have visible text (like an icon button).
- `role`: Overrides or defines the semantic meaning of an element (e.g., making a generic `<div>` act as an `alert` to a screen reader).
- `aria-hidden="true"`: Completely hides the element from screen readers. Use this for purely decorative icons/images.
- `alt=""`: An empty alt attribute tells screen readers to skip the image.

## 4. Examples

### Bad Example (Inaccessible)
```html
<div class="button" onclick="close()">X</div>
<input type="text" placeholder="Enter Name">
```
*Why it's bad: Screen readers don't know a `<div>` is clickable. The input has no label, so a screen reader user doesn't know what to type.*

### Good Example (Accessible)
```html
<button aria-label="Close Modal" onclick="close()">X</button>

<label for="nameInput">Enter Name</label>
<input type="text" id="nameInput" placeholder="e.g. John Doe">
```

## 5. Common Mistakes
- **Redundant alt text**: Writing `alt="Image of a dog"`. The screen reader already says "Image", so just write `alt="A golden retriever playing in the grass"`.
- **Using color alone to convey meaning**: Making an error message red, but not stating "Error:" in the text. Colorblind users won't see the red.
- **Skipping heading levels**: Jumping from `<h1>` to `<h3>`. Screen reader users navigate by headings, and skipping levels confuses them.

## 6. Best Practices
- The first rule of ARIA is: **No ARIA is better than bad ARIA**. If a native HTML element exists (like `<button>`), use it instead of making a `<div role="button">`.
- Always ensure form inputs have associated `<label>` elements.

## 7. Trainer Notes
- If possible, turn on a screen reader (like VoiceOver on Mac or NVDA on Windows) and navigate a poorly structured page vs a well-structured page. This usually blows students' minds and cements the importance of a11y.

## 8. Quick Revision
- Use native elements (`<button>`, `<nav>`) whenever possible.
- Use `aria-label` for icon buttons.
- Use empty `alt=""` or `aria-hidden="true"` for decorative images.
- Never skip heading levels.
