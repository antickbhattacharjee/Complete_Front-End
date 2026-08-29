# Day 03 Answer

## Explanation
We apply the Google Font link in the HTML `<head>`. By applying the `font-family` to the `body`, all headings and paragraphs inherit Roboto automatically. We then fine-tune the heading and paragraph sizes and line heights.

## Complete Solution (Assignment 3)

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typography</title>
    <!-- Google Fonts Import -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>The Art of Typography</h1>
    <p>Good typography is essential for an excellent user experience. It ensures that the content is highly readable and visually appealing.</p>
    <p>By adjusting line-height and font-size, we give the text room to breathe, preventing the user's eyes from becoming strained.</p>
</body>
</html>
```

### `style.css`
```css
body {
    /* Applies Roboto to everything */
    font-family: 'Roboto', sans-serif;
}

h1 {
    text-align: center;
    color: #003366; /* Dark Blue */
    font-weight: 700;
}

p {
    font-size: 18px;
    line-height: 1.6;
    color: #333333;
}
```

## Expected Output
A highly readable, professional-looking article. The text will not look like the default Times New Roman. The title is centered and bold, and the paragraphs have comfortable spacing between lines.
