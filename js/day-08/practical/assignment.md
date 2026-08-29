# Day 08 Assignment

## Assignment 1: Basic practice
Create an HTML button. In JS, add a click event listener that pops up an `alert()` saying "Clicked!".

## Assignment 2: Intermediate practice
Create an HTML text input and a paragraph. Write an `input` event listener so that as you type in the input, the paragraph's text updates to match exactly what you are typing.

## Assignment 3: Real-world practical task
Create a fully functional "To-Do List" input (Local only, no saving yet).
1. Create `todo.html` and `script.js`.
2. HTML: Create a `<form>` containing a text `<input>` and a submit `<button>`. Below the form, create an empty `<ul>` with an ID of `task-list`.
3. JS: Select the form, the input, and the ul.
4. JS: Add a `submit` event listener to the form.
5. JS: Inside the listener, prevent the default refresh.
6. JS: Grab the `.value` from the input field.
7. JS: Create a new `<li>` element using `document.createElement('li')`.
8. JS: Set the `<li>`'s text content to the input value.
9. JS: Append the `<li>` to the `<ul>` using `ulElement.appendChild(newLi)`.
10. JS: Clear the input field by setting `.value = ""`.
