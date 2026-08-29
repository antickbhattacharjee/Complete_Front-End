# Lists and Tables

## 1. Concept Explanation
Web pages often contain grouped data. 
- **Lists** are used for sequences of items (like a recipe or a navigation menu).
- **Tables** are used for multi-dimensional data (like a spreadsheet, schedule, or pricing chart).

## 2. Syntax
```html
<!-- Unordered List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<!-- Ordered List -->
<ol>
    <li>First step</li>
    <li>Second step</li>
</ol>

<!-- Table -->
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

## 3. Explanation of Syntax
- `<ul>`: Unordered List (bullet points).
- `<ol>`: Ordered List (numbers).
- `<li>`: List Item (goes inside `ul` or `ol`).
- `<table>`: Wraps the entire table.
- `<tr>`: Table Row.
- `<th>`: Table Header cell (bold, centered by default).
- `<td>`: Table Data cell (standard content).

## 4. Examples

### Basic Example (Nested Lists)
```html
<h3>My Grocery List</h3>
<ul>
    <li>Fruits
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
        </ul>
    </li>
    <li>Bread</li>
</ul>
```

### Practical Example (Pricing Table)
```html
<table border="1">
    <tr>
        <th>Plan</th>
        <th>Price</th>
        <th>Features</th>
    </tr>
    <tr>
        <td>Basic</td>
        <td>$10/mo</td>
        <td>1 User</td>
    </tr>
    <tr>
        <td>Pro</td>
        <td>$25/mo</td>
        <td>5 Users</td>
    </tr>
</table>
```

## 5. Common Mistakes
- **Putting text directly in a `<ul>` or `<table>`**: Text MUST be wrapped in an `<li>` for lists, or a `<td>`/`<th>` for tables. You cannot put a `<p>` directly inside a `<ul>`.
- **Mismatched table rows**: Having 3 `<th>` in the first row, but only 2 `<td>` in the second row will cause the table layout to break.

## 6. Best Practices
- Never use HTML tables for website layouts (e.g., placing the sidebar in a table cell). Tables are strictly for tabular data. Layouts should be handled by CSS.

## 7. Trainer Notes
- Explain that the `border="1"` attribute is old-fashioned HTML and we will use CSS for borders later, but use it today just so they can actually *see* the table grid structure.

## 8. Quick Revision
- `ul`/`ol` wrap `li`.
- `table` wraps `tr` (rows), which wrap `th` (headers) or `td` (data).
