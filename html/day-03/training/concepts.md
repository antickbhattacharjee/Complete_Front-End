# Text & Formatting

## 1. Concept Explanation
Webpages are mostly text. HTML provides specific tags to format this text. While we will eventually use CSS to make text look pretty (colors, fonts), HTML is responsible for defining *what* the text is (e.g., this is important, this is a quote, this is a line break).

## 2. Syntax
```html
<b>Bold text</b>
<i>Italic text</i>
<strong>Important text (bold)</strong>
<em>Emphasized text (italic)</em>
<br> <!-- Line break -->
<hr> <!-- Horizontal line -->
```

## 3. Explanation of Syntax
- `<h1>` to `<h6>`: Headings. `<h1>` is the most important, `<h6>` is the least.
- `<b>` vs `<strong>`: Both make text bold. However, `<strong>` is *semantic*—it tells screen readers that the text is strictly important.
- `<i>` vs `<em>`: Both make text italic. `<em>` indicates emphasis.
- `<br>` and `<hr>` are void elements. In HTML, void elements (such as `<img>`, `<br>`, `<hr>`, `<input>`, and `<meta>`) cannot contain child content and do not have closing tags.

## 4. Examples

### Basic Example (Headings)
```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

### Intermediate Example (Inline Formatting)
```html
<p>This is a normal sentence. <strong>This part is very important!</strong> And <em>this part is emphasized</em>.</p>
```

### Practical Example (Line Breaks and Rules)
```html
<h2>Poem</h2>
<p>Roses are red,<br>
Violets are blue.</p>
<hr>
<p>End of poem.</p>
```

## 5. Common Mistakes
- **Using `<br>` for spacing**: Do not use `<br><br><br>` to push content down the page. That is CSS's job (margins). Only use `<br>` for things like poems or addresses.
- **Having multiple `<h1>` tags**: A page should generally only have one `<h1>` (the main title of the document) for SEO purposes.

## 6. Best Practices
- Prefer `<strong>` and `<em>` over `<b>` and `<i>` because they are better for accessibility (screen readers pronounce them with different intonation).

## 7. Trainer Notes
- Explain the concept of "inline" vs "block" elements briefly here. Notice how `<strong>` stays on the same line as the paragraph text, but `<h2>` creates a new block.
- Show what happens if you forget to close a `<strong>` tag (the rest of the page becomes bold!).

## 8. Quick Revision
- `h1-h6` for headings.
- `strong` for importance.
- `em` for emphasis.
- `br` for a line break, `hr` for a horizontal rule.
