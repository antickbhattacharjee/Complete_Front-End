# Day 05 Answer

## Explanation
To place text on top of an image, we use the "Absolute inside Relative" technique. The `.hero` wrapper is `relative` to trap the `<h1>`. The `<h1>` is `absolute`. 

To perfectly center an absolute element, we use the classic CSS trick: `top: 50%; left: 50%; transform: translate(-50%, -50%);`.

## Complete Solution (Assignment 3)

### `banner.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hero Banner</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="hero">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Laptop on desk">
        <h1>Welcome to Tech Web</h1>
    </div>
</body>
</html>
```

### `style.css`
```css
* { margin: 0; padding: 0; box-sizing: border-box; }

.hero {
    position: relative; /* TRAPS the absolute child */
    width: 100%;
    height: 400px; /* Limit height */
    overflow: hidden; /* Hide overflow image */
}

.hero img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures image covers area without stretching */
}

.hero h1 {
    position: absolute; /* REMOVED from normal flow */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centers perfectly */
    
    color: white;
    font-size: 48px;
    font-family: sans-serif;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7); /* Helps readability */
}
```

## Expected Output
A wide banner image with white text perfectly centered on top of it.
