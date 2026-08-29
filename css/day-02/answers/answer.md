# Day 02 Answer

## Explanation
We apply styling rules to a specific class to create a reusable component (an alert banner). By combining background color, text color, and borders, we create a visually distinct UI element.

## Complete Solution (Assignment 3)

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alert Banner</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="alert-danger">
        Error: Invalid Password!
    </div>
</body>
</html>
```

### `style.css`
```css
.alert-danger {
    background-color: #ffe6e6;
    color: #cc0000;
    border: 1px solid red;
    border-radius: 5px;
}
```

## Expected Output
A red-themed horizontal banner with slightly rounded corners containing the error message.
