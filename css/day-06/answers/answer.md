# Day 06 Answer

## Explanation
This is the standard modern way to build a navbar. The `header` is the main flex container, pushing the logo and the list apart. The `ul` is a secondary flex container, aligning the list items into a neat horizontal row.

## Complete Solution (Assignment 3)

### `nav.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Navbar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">MyBrand</div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
</body>
</html>
```

### `style.css`
```css
* {
    margin: 0; padding: 0; box-sizing: border-box;
    font-family: sans-serif;
}

header {
    display: flex;
    justify-content: space-between; /* Pushes children to edges */
    align-items: center;            /* Vertically centers them */
    background-color: #1a1a1a;
    padding: 20px 40px;
    color: white;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

ul {
    display: flex;
    gap: 30px;         /* Spacing between links */
    list-style: none;  /* Removes bullets */
}

a {
    color: white;
    text-decoration: none; /* Removes underline */
    font-size: 16px;
    transition: color 0.3s;
}

a:hover {
    color: #4CAF50; /* Green hover effect */
}
```

## Expected Output
A sleek, dark navigation bar. The logo is strictly on the left, and the links are nicely spaced on the right. Both are perfectly vertically centered.
