# Day 09 Assignment

## Assignment 1: Basic practice
Create a button. Make its background green. Add a `:hover` state that makes it dark green. Add a `transition` so the color change takes 0.5 seconds.

## Assignment 2: Intermediate practice
Update your button so that on `:hover`, it also rotates 5 degrees (`transform: rotate(5deg);`). Ensure the rotation is also smooth.

## Assignment 3: Real-world practical task
Create a "Loading Spinner".
1. Create `spinner.html` and `style.css`.
2. HTML: Create a `<div class="spinner"></div>`.
3. CSS: Make `.spinner` a 50x50px square. Give it a transparent background, a 5px solid light gray border, and make the `border-top-color` blue. Use `border-radius: 50%` to make it a circle.
4. CSS: Create a `@keyframes spin` animation. At 0%, `transform: rotate(0deg)`. At 100%, `transform: rotate(360deg)`.
5. CSS: Apply `animation: spin 1s linear infinite;` to `.spinner`.
