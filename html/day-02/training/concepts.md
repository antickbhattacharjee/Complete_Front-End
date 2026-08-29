# HTML Document Structure

## 1. Concept Explanation
While browsers are smart enough to render random HTML tags, a professional webpage requires a specific structure. This structure tells the browser exactly what version of HTML to expect, sets up background metadata (like the page title), and separates the visible content from the invisible settings.

## 2. Syntax
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <!-- Visible content goes here -->
</body>
</html>
```

## 3. Explanation of Syntax
- `<!DOCTYPE html>`: Tells the browser we are using HTML5.
- `<html>`: The root element wrapping everything.
- `<head>`: Contains metadata (data about data). Nothing here is visible on the page except the `<title>` (which appears in the browser tab).
- `<body>`: Contains all the visible content (headings, paragraphs, images).

## 4. Examples

### Basic Example (Empty Structure)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Empty Page</title>
</head>
<body>
</body>
</html>
```

### Practical Example (Structure with Content)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Blog</title>
</head>
<body>
    <h1>Welcome to My Blog</h1>
    <p>This is my first post properly structured.</p>
</body>
</html>
```

## 5. Common Mistakes
- Putting visible content (like `<h1>`) inside the `<head>` tag. It must go in the `<body>`.
- Forgetting the `<!DOCTYPE html>` declaration, which can cause older browsers to render the page incorrectly.
- Forgetting the `lang` attribute on the `<html>` tag (important for screen readers and search engines).
- Not including the viewport meta tag (pages won't be responsive on mobile).

## 6. Best Practices
- Always include `<meta charset="UTF-8">` to ensure special characters (like emojis or accents) display correctly.
- Always include the viewport meta tag for mobile responsiveness (we will use this heavily in CSS).
- Always include a meaningful `<title>` (appears in browser tab and is critical for SEO).
- Use proper indentation (2 or 4 spaces) to make code readable.
- Use lowercase for all HTML tags and attributes.

## 7. Accessibility Considerations
- The `lang` attribute on `<html>` tells screen readers and search engines the page language.
- The `<title>` should be descriptive and unique for each page (screen reader users hear this first).
- Proper document structure with `<head>` and `<body>` ensures assistive technologies can navigate the page correctly.
- Meta charset ensures international characters display correctly.

## 8. Trainer Notes
- Show the students how to type `!` and press `Enter` in VS Code to auto-generate the HTML boilerplate. This saves a lot of time.
- Demonstrate changing the `<title>` and observing the browser tab update.
- Explain that the viewport meta tag is why websites look good on phones (we'll see this when we study CSS).
- Emphasize: "Valid HTML structure is the foundation for CSS styling and JavaScript manipulation."

## 9. Quick Revision Checklist
- [ ] `<!DOCTYPE html>` appears first (before even opening `<html>` tag)
- [ ] `<html lang="en">` wraps everything
- [ ] `<head>` contains metadata (invisible except `<title>`)
- [ ] `<body>` contains all visible content
- [ ] `<meta charset="UTF-8">` enables special characters
- [ ] `<meta name="viewport">` enables mobile responsiveness
- [ ] `<title>` is meaningful and descriptive
- [ ] Code is properly indented for readability
- [ ] All tags and attributes are lowercase
- [ ] Structure: DOCTYPE → html → (head + body) → /html

## 10. Knowledge Check Questions
1. What is the purpose of `<!DOCTYPE html>`?
2. Why is the `lang` attribute on the `<html>` tag important?
3. What goes in the `<head>` vs. the `<body>`?
4. What does the viewport meta tag do?
5. Why is the `<title>` tag important?
6. Can visible content (like `<h1>`) go in the `<head>`? Why or why not?
7. What character encoding should you use and why?
