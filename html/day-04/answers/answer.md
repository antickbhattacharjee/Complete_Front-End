# Day 04 Answer

## Explanation
We use the anchor tag `<a>` for links, and the `<img>` tag for images. By nesting an `<img>` inside an `<a>`, we create a clickable image. When using `target="_blank"` to open links in a new tab, always include the `rel="noopener noreferrer"` attribute for security.

## Complete Solution (Assignment 3)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artist Fan Page</title>
</head>
<body>
    <h1>The Beatles</h1>
    
    <!-- Clickable Image - opens Wikipedia in a new tab -->
    <a href="https://en.wikipedia.org/wiki/The_Beatles" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/The_Fabs.JPG/320px-The_Fabs.JPG" alt="The Beatles band members performing">
    </a>
    
    <p>The Beatles were an English rock band formed in Liverpool in 1960. They are widely regarded as the most influential band of all time.</p>
    
    <!-- Text link with security attribute -->
    <p>
        <a href="https://en.wikipedia.org/wiki/The_Beatles" target="_blank" rel="noopener noreferrer">Read more on Wikipedia (opens in new tab)</a>
    </p>
</body>
</html>
```

## Expected Output
A page featuring a heading, an image of the Beatles, a paragraph, and a text link. Hovering over the image should change the cursor to a pointer, indicating it is clickable. Both links open Wikipedia in a new tab (note the security attributes included).
