# Day 08 Answer

## Explanation
We use a Mobile-First approach. The base `.pricing` class is a column. As the screen gets wider, the media queries kick in, changing the layout to a row and adjusting the widths of the cards so they fit perfectly.

## Complete Solution (Assignment 3)

### `responsive.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Pricing</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 style="text-align:center; margin: 20px;">Our Plans</h1>
    <div class="pricing">
        <div class="card">Basic</div>
        <div class="card">Pro</div>
        <div class="card">Enterprise</div>
    </div>
</body>
</html>
```

### `style.css`
```css
* { margin: 0; padding: 0; box-sizing: border-box; font-family: sans-serif;}

.pricing {
    display: flex;
    flex-direction: column; /* Mobile: Stacked */
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.card {
    background: #fff;
    border: 1px solid #ccc;
    padding: 40px 20px;
    text-align: center;
    border-radius: 8px;
    font-size: 24px;
    width: 100%; /* Mobile: Full width */
}

/* Tablet */
@media (min-width: 768px) {
    .pricing {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .card {
        width: calc(50% - 10px); /* 50% width minus half the gap */
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .pricing {
        flex-wrap: nowrap; /* Force single line */
    }
    .card {
        width: 33.333%; /* 3 equal columns */
    }
}
```

## Expected Output
On a phone: 3 vertical cards. 
On a tablet: 2 cards on the top row, 1 card centered below them. 
On a desktop monitor: 3 cards perfectly side-by-side.
