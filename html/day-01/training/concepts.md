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
- **Confusing tag names**: Using `<Header>` or `<PARAGRAPH>` instead of standard tags. HTML has specific tag names.

## 6. Best Practices
- Always use lowercase for tag names (e.g., `<p>`, not `<P>`).
- Always quote attribute values.
- Save your main file as `index.html`.
- Use meaningful, descriptive text in your content.
- Use heading tags in logical order (don't skip from `<h1>` to `<h3>`).

## 7. Accessibility Considerations
- Semantic HTML tags (like `<h1>`, `<p>`, `<a>`) are crucial for accessibility. Screen reader users rely on proper heading hierarchy to navigate pages.
- Always use heading tags in hierarchical order (`<h1>`, then `<h2>`, then `<h3>`) - never skip levels.
- Use meaningful text in links (not "click here" or "more") so screen reader users know what they're clicking on.
- Provide descriptive content in all elements.

## 8. Trainer Notes
- Emphasize that HTML is *not* a programming language; it is a markup language. It doesn't have logic (like if/else or loops).
- Demonstrate how to save a file with the `.html` extension and double-click it to open it in Chrome.
- Show that browsers are forgiving - raw HTML tags render even without proper document structure. However, Day 02 teaches the correct way.
- Have students create multiple files to practice the tag syntax. Encourage experimentation.
- Pair: "All opening tags must have closing tags (except void elements, which you'll learn later)."

## 9. Quick Revision
- HTML = HyperText Markup Language.
- It uses tags (opening `<tag>` and closing `</tag>`).
- Attributes give more info (like `href` or `src`) and live in the opening tag.
- Most tags come in pairs (opening and closing).
- Content goes between the opening and closing tags.
- Tags should be lowercase: `<p>`, not `<P>`.

## 10. Knowledge Check Questions
1. What does HTML stand for?
2. What is the difference between an opening tag and a closing tag?
3. What is an attribute, and where does it go in a tag?
4. Why should link text be meaningful instead of just "click here"?
5. What is the purpose of heading tags (h1, h2, h3)?
6. How should you name your files when saving HTML?
