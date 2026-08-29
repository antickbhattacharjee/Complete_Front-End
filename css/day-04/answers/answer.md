# Day 04 Answer

## Explanation
By using the universal reset `* { margin: 0; padding: 0; box-sizing: border-box; }`, we wipe out the browser's default spacing, giving us total control. We then use `margin: auto` to center the card, `padding` to give the text room to breathe inside the card, and `margin-bottom` to separate the text elements.

## Complete Solution (Assignment 3)

### `card.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pricing Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>Pro Plan</h2>
        <h1>$29/mo</h1>
        <p>Get access to all premium features and 24/7 priority support.</p>
    </div>
</body>
</html>
```

### `style.css`
```css
/* Universal Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

.card {
    width: 300px;
    margin: 50px auto; /* 50px top/bottom, auto left/right (centers it) */
    padding: 20px;     /* Inside spacing */
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
}

.card h2 {
    margin-bottom: 10px;
    color: #555;
}

.card h1 {
    margin-bottom: 15px;
    color: #000;
}

.card p {
    color: #666;
    line-height: 1.5;
}
```

## Expected Output
A perfectly centered, nicely spaced pricing card. The text is not touching the borders because of the padding, and the headings are spaced out because of the margins.
