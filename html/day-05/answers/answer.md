# Day 05 Answer

## Explanation
For the nested list, the nested `<ol>` must go *inside* the `<li>` of the parent list. 
For the table, we ensure every row (`<tr>`) has exactly 3 cells to match our 3 headers.

## Complete Solution (Assignment 3)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Training Schedule</title>
</head>
<body>
    <h1>HTML Training Schedule</h1>
    
    <table border="1">
        <tr>
            <th>Day</th>
            <th>Topic</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>Day 01</td>
            <td>HTML Fundamentals</td>
            <td>Completed</td>
        </tr>
        <tr>
            <td>Day 02</td>
            <td>Document Structure</td>
            <td>Completed</td>
        </tr>
        <tr>
            <td>Day 03</td>
            <td>Text & Formatting</td>
            <td>Completed</td>
        </tr>
    </table>
</body>
</html>
```

## Expected Output
A structured table with a visible border, bold headers, and neatly aligned data in 3 columns.
