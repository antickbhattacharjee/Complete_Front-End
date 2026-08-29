# Advanced Elements & APIs

## 1. Concept Explanation
HTML is constantly evolving. Many UI components that used to require dozens of lines of JavaScript (like collapsible accordions or popup modals) can now be done natively with pure HTML5. 

## 2. Syntax
```html
<!-- Native Accordion -->
<details>
    <summary>Click to expand</summary>
    <p>This is hidden content that appears when clicked.</p>
</details>

<!-- iframe -->
<iframe src="https://example.com" width="600" height="400"></iframe>

<!-- Native Dialog/Modal -->
<dialog open>
    <p>This is a popup box!</p>
</dialog>
```

## 3. Explanation of Syntax
- `<details>` & `<summary>`: Creates a widget from which the user can obtain additional information. The `<summary>` is the visible heading.
- `<iframe>`: Inline Frame. Used to embed another HTML document within the current one (commonly used for YouTube videos or Google Maps).
- `<dialog>`: Represents a dialog box or other interactive component, such as an inspector or window. (Note: toggling it requires a tiny bit of JS, but the structure is HTML).
- `<picture>`: Allows defining multiple image sources based on screen size or format support (e.g., showing a small image on mobile, large on desktop).

## 4. Examples

### Practical Example (FAQ Accordion)
```html
<h2>Frequently Asked Questions</h2>
<details>
    <summary>What is HTML?</summary>
    <p>HTML is the standard markup language for documents designed to be displayed in a web browser.</p>
</details>
<details>
    <summary>Is HTML a programming language?</summary>
    <p>No, it is a markup language.</p>
</details>
```

### Practical Example (Embedded YouTube Video)
```html
<!-- YouTube provides embed code that you can customize with CSS -->
<style>
    iframe {
        border: none;  /* Remove border using CSS instead of frameborder attribute */
    }
</style>
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowfullscreen></iframe>
```

## 5. Common Mistakes
- **Putting an `<iframe>` without a `title`**: Accessibility failure. Screen readers need to know what the embedded content is.
- **Forgetting `<summary>`**: If you use `<details>` without a `<summary>`, the browser will provide a default text (usually just "Details"), which is not user-friendly.

## 6. Best Practices
- Use `<details>`/`<summary>` for FAQs or hiding lengthy secondary information. It saves writing JavaScript and is perfectly accessible out of the box.

## 7. Trainer Notes
- Demonstrate `<details>` in action. Students love this because it adds interactivity without any JS or CSS.
- Show them how to go to Google Maps, click "Share", choose "Embed a map", and paste the `<iframe>` into their code.

## 8. Quick Revision
- `<details>` + `<summary>` = Interactive Accordion.
- `<iframe>` = Embed external websites, maps, videos.
- `<dialog>` = Native popup modal.
