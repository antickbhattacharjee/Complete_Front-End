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

## 6. Best Practices
- Always include `<meta charset="UTF-8">` to ensure special characters (like emojis or accents) display correctly.
- Always include the viewport meta tag for mobile responsiveness (we will use this heavily in CSS).

## 7. Trainer Notes
- Show the students how to type `!` and press `Enter` in VS Code to auto-generate the HTML boilerplate. This saves a lot of time.
- Demonstrate changing the `<title>` and observing the browser tab update.

## 8. Quick Revision
- `<!DOCTYPE html>` = HTML5.
- `<head>` = Invisible settings and title.
- `<body>` = Visible content.
