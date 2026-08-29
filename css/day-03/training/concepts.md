# Typography & Fonts

## 1. Concept Explanation
Browser default fonts (usually Times New Roman) look outdated. Modern web design requires custom fonts and careful control of typography (how text is arranged) to ensure the site looks premium and is easy to read.

## 2. Syntax
```css
p {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400; /* 400 is normal, 700 is bold */
    line-height: 1.5; /* 150% of font size */
    text-align: center;
}
```

## 3. Explanation of Syntax
- **`font-family`**: Defines the font. Always provide a fallback (like `sans-serif`) in case the custom font fails to load.
- **`font-size`**: How large the text is.
- **`font-weight`**: How thick the text is.
- **`line-height`**: The vertical space between lines of text. Crucial for readability.
- **`text-align`**: Left, right, center, or justify.
- **`text-transform`**: Can force text to be `uppercase`, `lowercase`, or `capitalize`.

## 4. Examples

### Importing Google Fonts
To use a beautiful font like 'Inter', you must first link it in your HTML `<head>` (Google provides this link).
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```
Then use it in CSS:
```css
body {
    font-family: 'Inter', sans-serif;
}
```

## 5. Common Mistakes
- **Using too many fonts**: A professional site rarely uses more than 2 font families (one for headings, one for body text).
- **Ignoring line-height**: Default line-height makes paragraphs look squished. Always set it to at least `1.5` or `1.6` for paragraphs.

## 6. Best Practices
- Apply your main font to the `body` tag so that all elements inherit it by default.
- Never use `font-size` on a heading to make it look like a paragraph, or vice-versa. Always use semantic HTML, then style it.

## 7. Trainer Notes
- Walk students through visiting fonts.google.com, selecting a font, copying the `<link>` tags into the HTML, and copying the `font-family` rule into the CSS.

## 8. Quick Revision
- `font-family`: The typeface.
- `font-weight`: Boldness.
- `text-align`: Alignment.
- `line-height`: Vertical spacing.
