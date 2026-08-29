# Day 04 Answer

## Explanation
We use the anchor tag `<a>` for links, and the `<img>` tag for images. By nesting an `<img>` inside an `<a>`, we create a clickable image.

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
    
    <!-- Clickable Image -->
    <a href="https://en.wikipedia.org/wiki/The_Beatles" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/The_Fabs.JPG/320px-The_Fabs.JPG" alt="The Beatles band members performing">
    </a>
    
    <p>The Beatles were an English rock band formed in Liverpool in 1960. They are widely regarded as the most influential band of all time.</p>
    
    <!-- Standard text link -->
    <p>
        <a href="https://en.wikipedia.org/wiki/The_Beatles" target="_blank">Read more on Wikipedia</a>
    </p>
</body>
</html>
```

## Expected Output
A page featuring a heading, an image of the Beatles, a paragraph, and a text link. Hovering over the image should change the cursor to a pointer, indicating it is clickable. Both links should open Wikipedia in a new tab.
