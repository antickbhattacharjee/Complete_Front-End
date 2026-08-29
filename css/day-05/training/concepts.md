# Display & Positioning

## 1. Concept Explanation
By default, elements flow top-to-bottom on a webpage. 
- **Display** dictates how an element behaves in this normal flow (does it take up the whole width or sit side-by-side?).
- **Positioning** allows you to completely break an element out of the normal flow and place it exactly where you want on the screen.

## 2. Syntax
```css
/* Display */
.inline { display: inline; }
.block { display: block; }
.inline-block { display: inline-block; }
.hide { display: none; } /* Removes from DOM flow entirely */

/* Position */
.nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
}
```

## 3. Explanation of Syntax
**Display Types:**
- `block`: (e.g., `<div>`, `<p>`) Takes up 100% width. Starts on a new line. You can set width/height.
- `inline`: (e.g., `<span>`, `<a>`) Takes up only as much width as necessary. **Ignores top/bottom margin and height/width**.
- `inline-block`: Sits side-by-side like inline, but *allows* you to set width/height/margin-top.

**Position Types:**
- `static`: Default. Flows normally.
- `relative`: Flows normally, but you can nudge it using `top/left/right/bottom` relative to its normal position.
- `absolute`: Removed from normal flow. Positions itself relative to its closest *positioned* ancestor.
- `fixed`: Removed from flow. Fixed to the viewport (the screen). Doesn't move when you scroll.
- `sticky`: Toggles between relative and fixed depending on scroll position.

## 4. Examples

### Practical Example (Sticky Navigation)
```css
header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100; /* Ensures it stays on top of other content */
}
```

## 5. Common Mistakes
- **Applying width to an `inline` element**: It will just be ignored. Change it to `inline-block` first.
- **Absolute without Relative parent**: If you make a child `position: absolute;`, it will position itself based on the whole page *unless* you make its parent `position: relative;`.

## 6. Best Practices
- Use `display: none` to hide elements completely (great for JS toggling). Note: `visibility: hidden` hides the element but it still takes up empty physical space!

## 7. Trainer Notes
- The "Absolute inside Relative" concept is very hard for beginners. Draw a box inside a box on a whiteboard. Show how the inner box escapes the outer box if the outer box isn't marked as `relative`.

## 8. Quick Revision
- `block`: Full width, new line.
- `inline`: content width, side-by-side, no height/width.
- `inline-block`: side-by-side, allows height/width.
- `fixed`: stays on screen on scroll.
- `absolute`: positioned relative to nearest `relative` parent.
