# Day 07 Answer

## Explanation
We are building a structural skeleton. By using tags like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`, we create a highly accessible and SEO-friendly document.

## Complete Solution (Assignment 3)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic Blog</title>
</head>
<body>
    
    <header>
        <h1>Developer Journal</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Latest Posts</h2>
            
            <article>
                <h3>Learning HTML5</h3>
                <p><em>Published on Oct 10</em></p>
                <p>Today I learned about semantic HTML and why it is so important for accessibility.</p>
            </article>
            
            <article>
                <h3>Mastering CSS Soon</h3>
                <p><em>Published on Oct 11</em></p>
                <p>Next week, we dive into CSS to make these plain layouts look beautiful.</p>
            </article>
        </section>
        
        <aside>
            <h2>About the Author</h2>
            <p>I am a student learning Front-End Development to build a better web.</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2026 Developer Journal. All rights reserved.</p>
    </footer>

</body>
</html>
```

## Expected Output
A plain, unstyled webpage where the content is logically ordered top-to-bottom. Even without CSS, the visual hierarchy is clear due to the use of headings.
