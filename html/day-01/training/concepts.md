# HTML Fundamentals

## 1. Concept Explanation
HTML stands for **HyperText Markup Language**. It is the standard language for creating web pages. HTML describes the structure of a web page semantically. 
Think of HTML as the skeleton of a website. It tells the browser what is a heading, what is a paragraph, and what is a link.

## 2. Syntax
```html
<tagname attribute="value">Content goes here...</tagname>
```

## 3. Explanation of Syntax
- **Tags**: HTML uses tags (like `<p>` for paragraph) enclosed in angle brackets. Most tags come in pairs: an opening tag `<tagname>` and a closing tag `</tagname>`.
- **Attributes**: Tags can have attributes that provide additional information about the element, always specified in the opening tag.
- **Content**: Everything between the opening and closing tag is the content of the element.

## 4. Examples

### Basic Example (A Heading)
```html
<h1>Hello, World!</h1>
```

### Intermediate Example (Heading + Paragraph)
```html
<h1>Welcome to My Website</h1>
<p>This is my first paragraph of text on the web.</p>
```

### Practical Example (Using Attributes)
```html
<a href="https://google.com">Click here to search</a>
```

## 5. Common Mistakes
- **Forgetting closing tags**: Writing `<p>Hello` instead of `<p>Hello</p>`. This can break the layout.
- **Missing quotes around attributes**: Writing `<a href=https://google.com>` instead of `<a href="https://google.com">`.

## 6. Best Practices
- Always use lowercase for tag names (e.g., `<p>`, not `<P>`).
- Always quote attribute values.
- Save your main file as `index.html`.

## 7. Trainer Notes
- Emphasize that HTML is *not* a programming language; it is a markup language. It doesn't have logic (like if/else or loops).
- Demonstrate how to save a file with the `.html` extension and double-click it to open it in Chrome.

## 8. Quick Revision
- HTML = HyperText Markup Language.
- It uses tags (opening `<tag>` and closing `</tag>`).
- Attributes give more info (like `href` or `src`) and live in the opening tag.
