# Day 08 Answer

## Explanation
To fix the inaccessible snippet, we must:
1. Replace `<div class="top">` with `<header><h1>`.
2. Replace the `<div class="menu">` with `<nav>` and an unordered list of `<a>` tags.
3. Replace the fake title `<span>` with a proper `<h2>`.
4. Wrap the form in a `<form>` tag.
5. Provide a `<label>` linked to the `<input>` via the `id` attribute.
6. Change the fake `<div>` submit button to a real `<button>`.

## Complete Solution (Assignment 3)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Page</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav aria-label="Main Navigation">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>Sign Up</h2>
            <form action="#" method="POST">
                <label for="userEmail">Email:</label>
                <input type="email" id="userEmail" name="userEmail" required>
                
                <button type="submit">Send</button>
            </form>
        </section>
    </main>
</body>
</html>
```

## Expected Output
A visually plain but fully accessible page. Screen readers will correctly identify the navigation, the headings, and announce "Email, edit text" when the user focuses the input box.
