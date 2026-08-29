# Day 01 Answer

## Explanation
We link the stylesheet in the HTML `<head>`. In the CSS file, we use `#` to target IDs, `.` to target classes, and just the tag name for elements.

## Complete Solution (Assignment 3)

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors</title>
    <!-- Linking the CSS -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="main-heading">Welcome to CSS</h1>
    <p class="intro">CSS makes webpages look amazing.</p>
    <p>This is a standard paragraph that just inherits the basic styles.</p>
</body>
</html>
```

### `style.css`
```css
/* Element Selector */
p {
    font-family: sans-serif;
}

/* ID Selector */
#main-heading {
    color: darkslategray;
}

/* Class Selector */
.intro {
    font-size: 24px;
}
```

## Expected Output
The webpage will display a dark gray heading. Both paragraphs will use a clean sans-serif font, but the first paragraph will be noticeably larger than the second.
