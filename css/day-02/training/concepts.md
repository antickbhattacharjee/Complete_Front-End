# Colors, Backgrounds & Borders

## 1. Concept Explanation
Web design relies heavily on color. CSS allows you to define colors in several formats (Keywords, HEX, RGB, HSL). You can apply colors to the text itself, the background behind the text, or borders wrapping the element.

## 2. Syntax
```css
/* Color formats */
color: red;                   /* Keyword */
color: #ff0000;               /* HEX */
color: rgb(255, 0, 0);        /* RGB */
color: hsl(0, 100%, 50%);     /* HSL */

/* Backgrounds */
background-color: #f4f4f4;
background-image: url("bg.jpg");

/* Borders */
border: 2px solid black;      /* Shorthand */
border-radius: 10px;          /* Rounded corners */
```

## 3. Explanation of Syntax
- **HEX codes**: Start with a `#` followed by 3 or 6 characters (0-9, a-f). Very common in design.
- **RGB**: Red, Green, Blue values (0 to 255).
- **border shorthand**: Combines `border-width`, `border-style` (solid, dashed, dotted), and `border-color`.
- **border-radius**: Curves the sharp 90-degree corners of an HTML element. Setting it to `50%` creates a perfect circle (if the element is a square).

## 4. Examples

### Creating a "Card" Look
```css
.card {
    background-color: #ffffff;
    color: #333333;
    border: 1px solid #cccccc;
    border-radius: 8px;
}
```

### Background Image
```css
body {
    background-image: url("pattern.png");
    background-repeat: no-repeat;
    background-size: cover; /* Makes the image cover the whole screen */
}
```

## 5. Common Mistakes
- **Unreadable text**: Setting a dark background color but forgetting to change the text color to something light. Contrast is crucial for accessibility.
- **Missing `border-style`**: If you write `border: 2px red;`, the border will NOT show up. You must specify a style, e.g., `solid`.

## 6. Best Practices
- Use **HEX** or **HSL** for consistent color palettes. HSL (Hue, Saturation, Lightness) is highly recommended for modern design because it is easier for humans to adjust (e.g., just lower the Lightness percentage to make a color darker).

## 7. Trainer Notes
- Open the browser DevTools and show how to use the built-in color picker to dynamically change colors and copy the HEX codes.

## 8. Quick Revision
- `color`: Changes text color.
- `background-color`: Changes the box behind the text.
- `border: width style color`: Adds an outline.
- `border-radius`: Rounds the corners.
