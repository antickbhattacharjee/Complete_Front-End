# Day 09 Answer

## Explanation
To create a loading spinner, we trick the eye by making a circle where one edge of the border is a different color. Then, we use `@keyframes` to continuously rotate (`transform: rotate`) that circle 360 degrees infinitely.

## Complete Solution (Assignment 3)

### `spinner.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading Spinner</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Loading Data...</h2>
        <div class="spinner"></div>
    </div>
</body>
</html>
```

### `style.css`
```css
* { box-sizing: border-box; font-family: sans-serif; }

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    gap: 20px;
}

/* The Spinner UI */
.spinner {
    width: 60px;
    height: 60px;
    border: 6px solid #f3f3f3; /* Light gray */
    border-top: 6px solid #3498db; /* Blue */
    border-radius: 50%; /* Make it a circle */
    
    /* Apply the animation */
    animation: spin 1s linear infinite;
}

/* The Animation Timeline */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

## Expected Output
A blue arc smoothly spinning in a circle forever, looking exactly like a standard modern web loading indicator.
