# Day 08 Assignment

## Assignment 1: Basic practice
Create an `<h1>` that says "Responsive Text". Make its color red. Add a media query so that if the screen is wider than 600px, the color changes to blue. Resize your browser to test it.

## Assignment 2: Intermediate practice
Create a container with two paragraphs. On mobile, they should stack vertically. Using a media query and Flexbox, make them sit side-by-side (row) on screens wider than 800px.

## Assignment 3: Real-world practical task
Create `responsive.html` and `style.css`.
Build a responsive pricing section with 3 cards.
1. HTML: A wrapper `.pricing-container` containing three `.card` divs.
2. CSS: Make `.pricing-container` a Flexbox. Make the cards stack vertically by default (`flex-direction: column`).
3. CSS: Add a media query for tablet (`min-width: 768px`). Change the flex-direction to `row`, but allow wrapping (`flex-wrap: wrap`) so two cards sit on top and one falls below.
4. CSS: Add a media query for desktop (`min-width: 1024px`). Ensure all 3 cards sit in a single row without wrapping, taking up equal space.
