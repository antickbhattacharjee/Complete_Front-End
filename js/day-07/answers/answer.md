# Day 07 Answer

## Explanation
We use JS to reach into the HTML DOM, grab the elements by their IDs, and alter their properties. We change the text (`textContent`), the image source attribute (`src`), and we apply a pre-written CSS class (`classList.add`) to the `body` to change the overall theme.

## Complete Solution (Assignment 3)

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <img id="profilePic" src="" alt="Profile">
        <h2 id="profileName">Loading...</h2>
        <p id="profileBio">Loading bio...</p>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### `style.css`
```css
body {
    font-family: sans-serif;
    transition: background-color 0.3s, color 0.3s;
}

.card {
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
    margin: 50px auto;
    text-align: center;
    border-radius: 10px;
}

.card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

/* The class JS will add */
.dark-mode {
    background-color: #222;
    color: #fff;
}
```

### `script.js`
```javascript
// 1. Select the elements
const pic = document.getElementById("profilePic");
const nameEl = document.getElementById("profileName");
const bioEl = document.getElementById("profileBio");

// 2. Modify the elements
pic.src = "https://via.placeholder.com/150";
nameEl.textContent = "Jane Developer";
bioEl.textContent = "I love manipulating the DOM with JavaScript!";

// 3. Apply Dark Mode
document.body.classList.add("dark-mode");
```

## Expected Output
The page loads, and the JS immediately replaces the "Loading..." text with actual data. The background becomes dark grey, and the text becomes white, all triggered by the JavaScript.
