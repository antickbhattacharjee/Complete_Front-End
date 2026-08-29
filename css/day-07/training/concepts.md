# CSS Grid Layout

## 1. Concept Explanation
Flexbox is for 1-dimensional layouts (a single row OR a single column). CSS Grid is for **2-dimensional** layouts (rows AND columns simultaneously). It is the most powerful layout system in CSS. 
Like Flexbox, it uses a Parent (`display: grid`) and Child relationship.

## 2. Syntax
```css
.grid-container {
    display: grid;
    /* Create 3 columns: 200px, flexible middle, 200px */
    grid-template-columns: 200px 1fr 200px; 
    /* Create 2 rows: 100px and 300px */
    grid-template-rows: 100px 300px;
    gap: 20px;
}

.item1 {
    /* Make this item span across 3 columns */
    grid-column: 1 / 4; 
}
```

## 3. Explanation of Syntax
- `display: grid`: Turns the element into a grid container.
- `grid-template-columns`: Defines the number of columns and their widths.
- `1fr`: One "Fractional Unit". It means "take up the remaining available space". If you write `1fr 1fr 1fr`, you get 3 perfectly equal columns.
- `grid-column: start / end`: Tells a child item which grid lines to span across. (Note: A 3-column grid has 4 lines).

## 4. Examples

### Practical Example (Classic Holy Grail Layout)
```css
.layout {
    display: grid;
    /* Sidebar is 250px, Main content takes the rest */
    grid-template-columns: 250px 1fr;
    /* Header is 80px, Body is auto, Footer is 60px */
    grid-template-rows: 80px auto 60px;
}

header, footer {
    /* Span all the way across the two columns */
    grid-column: 1 / 3; 
}
```

## 5. Common Mistakes
- **Confusing Grid Lines with Columns**: `grid-column: 1 / 3` means start at line 1, end at line 3. It spans *two* columns, not three.
- **Using Grid when Flexbox is better**: If you just need a row of buttons, use Flexbox. Use Grid for macro page layouts.

## 6. Best Practices
- Use the `repeat()` function for cleaner code. `grid-template-columns: repeat(3, 1fr);` is much better than writing `1fr 1fr 1fr`.

## 7. Trainer Notes
- Show the browser DevTools Grid overlay. It visually draws the grid lines on the screen, which is mandatory for beginners to understand what `1 / 3` actually means.

## 8. Quick Revision
- `display: grid` (Parent)
- `grid-template-columns: 1fr 1fr 1fr` (Creates 3 equal columns)
- `grid-column: 1 / -1` (Spans from the very first line to the very last line)
