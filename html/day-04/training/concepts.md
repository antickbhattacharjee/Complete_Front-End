# Links, Images & Multimedia

## 1. Concept Explanation
The "HyperText" in HTML means text with links. Links connect the web together. Along with links, modern websites require media like images, audio, and video to be engaging. HTML provides dedicated tags to handle these natively.

## 2. Syntax
```html
<!-- Links -->
<a href="url">Link Text</a>

<!-- Images -->
<img src="path/to/image.jpg" alt="Description of image">

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>

<!-- Video -->
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
</video>
```

## 3. Explanation of Syntax
- `<a>`: Anchor tag, used for links. The `href` attribute tells it *where* to go.
- `<img>`: Image tag. It is a void element—it cannot contain child content and does not have a closing tag. The `src` attribute is the path to the image, and the `alt` attribute is the text shown if the image fails to load (also used by screen readers).
- `<audio>` & `<video>`: Wrappers for media. The `controls` attribute adds play/pause buttons. `<source>` specifies the file.

## 4. Examples

### Basic Example (Links)
```html
<a href="https://wikipedia.org">Go to Wikipedia</a>
<a href="about.html">Go to About Page (Relative link)</a>
```

### Intermediate Example (Images and opening links in new tabs)
```html
<!-- Open link in new tab using target="_blank" with security attribute -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Search</a>

<!-- Display an image -->
<img src="assets/image-placeholder.svg" alt="A generic landscape placeholder showing mountains and sun" width="150" height="150">
```

### Practical Example (Clickable Image)
```html
<!-- Wrapping an image in an anchor tag makes the image clickable -->
<a href="https://github.com" target="_blank">
    <img src="github-logo.png" alt="GitHub Logo">
</a>
```

## 5. Common Mistakes
- **Forgetting the `alt` attribute**: This is terrible for accessibility and SEO. Always describe your images.
- **Broken relative paths**: Linking to `image.jpg` when the image is inside an `assets` folder (should be `assets/image.jpg`).
- **Forgetting `controls` on media**: Without the `controls` attribute, your video/audio will not have a play button and will just look like a static picture or be invisible.

## 6. Best Practices
- Use **relative links** for pages within your own site (e.g., `href="about.html"`).
- Use **absolute links** for external sites (e.g., `href="https://example.com"`).
- **`target="_blank"`** opens a link in a new tab. Use it sparingly, only when there is a clear reason (e.g., opening documentation while staying on your page). Most navigation should use the same tab so users don't lose the current page in the back button.
- When using `target="_blank"`, always include `rel="noopener noreferrer"` to prevent security vulnerabilities.
- Consider informing users when a link opens a new tab (e.g., via a small icon or text like "(opens in new tab)").
- Ensure images are optimized for the web (compress them) before linking them.

## 7. Trainer Notes
- Clearly explain Absolute URLs (starting with http://) vs Relative URLs (linking to files in the same project). This is a major stumbling block for beginners.

## 8. Quick Revision
- `<a>` + `href` = Link.
- `<img>` + `src` + `alt` = Image (void element, no closing tag).
- `<video>` / `<audio>` + `controls` = Multimedia.
