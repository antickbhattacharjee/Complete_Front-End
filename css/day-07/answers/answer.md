# Day 07 Answer

## Explanation
By defining a 3-column grid and allowing rows to size automatically, the items flow naturally. We then grab the first item and force it to span across multiple tracks (`grid-column: span 2; grid-row: span 2;`), which pushes the other items around it, creating a beautiful masonry-style layout.

## Complete Solution (Assignment 3)

### `gallery.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>My Photo Gallery</h1>
    <div class="gallery">
        <div class="photo featured">Featured</div>
        <div class="photo">2</div>
        <div class="photo">3</div>
        <div class="photo">4</div>
        <div class="photo">5</div>
        <div class="photo">6</div>
    </div>
</body>
</html>
```

### `style.css`
```css
* { box-sizing: border-box; font-family: sans-serif; }
body { padding: 40px; background: #f0f0f0; }
h1 { text-align: center; margin-bottom: 20px; }

.gallery {
    display: grid;
    /* Create 3 equal columns */
    grid-template-columns: repeat(3, 1fr);
    /* Set a fixed height for rows so we can see the layout */
    grid-auto-rows: 150px;
    gap: 15px;
    max-width: 900px;
    margin: 0 auto;
}

.photo {
    background-color: #3498db;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-radius: 8px;
}

/* The magic of Grid */
.featured {
    background-color: #e74c3c;
    grid-column: span 2; /* Take up 2 columns of space */
    grid-row: span 2;    /* Take up 2 rows of space */
}
```

## Expected Output
A grid where the first red box is a massive square on the left, and the smaller blue boxes wrap neatly around the right side and bottom of it.
