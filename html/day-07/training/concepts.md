# Semantic HTML

## 1. Concept Explanation
"Semantic" means relating to meaning. Semantic HTML tags clearly describe their meaning to both the browser and the developer. 
Before HTML5, developers used `<div>` (a generic container) for everything, creating a "div soup" (e.g., `<div class="header">`, `<div class="footer">`). HTML5 introduced specific tags to solve this.

## 2. Syntax
```html
<header>...</header>
<nav>...</nav>
<main>
    <article>...</article>
    <section>...</section>
</main>
<aside>...</aside>
<footer>...</footer>
```

## 3. Explanation of Syntax
- `<header>`: Introductory content or navigational links (typically the top of a page).
- `<nav>`: A section containing navigation links (like a menu).
- `<main>`: The dominant content of the `<body>`. There should only be one `<main>` per page.
- `<article>`: A self-contained, independent piece of content (like a blog post or news story).
- `<section>`: A thematic grouping of content, usually with a heading.
- `<aside>`: Content tangentially related to the main content (like a sidebar).
- `<footer>`: The footer of the document or section (copyright, links at the bottom).

## 4. Examples

### Generic Example (The Old Way - Div Soup)
```html
<div class="header">
    <div class="logo">My Site</div>
</div>
<div class="content">
    <div class="post">Hello World</div>
</div>
```

### Semantic Example (The Modern Way)
```html
<header>
    <h1>My Site</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>
<main>
    <article>
        <h2>Hello World</h2>
        <p>This is a semantic blog post.</p>
    </article>
</main>
<footer>
    <p>&copy; 2026 My Site</p>
</footer>
```

## 5. Common Mistakes
- **Putting `<main>` inside `<header>` or `<footer>`**: `<main>` must be a direct child of `<body>` or deeply nested, but never inside header/footer elements.
- **Using `<section>` without a heading**: A `<section>` should theoretically always contain a heading (`h2`-`h6`). If there is no natural heading, a generic `<div>` might be more appropriate.

## 6. Best Practices
- Screen readers use semantic tags to jump around a page. For example, a blind user can press a key to jump directly to the `<main>` content, skipping the `<nav>`. This is why semantic HTML is crucial.

## 7. Trainer Notes
- Emphasize that semantic tags *do not* change how the page looks by default. A `<section>` looks exactly like a `<div>` until styled with CSS. They exist for meaning, not styling.

## 8. Quick Revision
- `header` = top area.
- `nav` = menu.
- `main` = primary content.
- `section` = grouped content.
- `article` = independent content.
- `aside` = sidebar.
- `footer` = bottom area.
