# Day 08 Answer

## Explanation
We use `submit` on the `<form>`, not `click` on the button, because `submit` allows the user to press "Enter" on their keyboard to submit. We prevent the default refresh, extract the value, dynamically build a new HTML element using JS (`createElement`), attach it to the DOM (`appendChild`), and clear the input for the next task.

## Complete Solution (Assignment 3)

### `todo.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
</head>
<body>
    <h1>My Tasks</h1>
    
    <form id="todoForm">
        <input type="text" id="taskInput" required placeholder="New task...">
        <button type="submit">Add Task</button>
    </form>

    <ul id="taskList">
        <!-- Tasks will appear here -->
    </ul>

    <script src="script.js"></script>
</body>
</html>
```

### `script.js`
```javascript
const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", (event) => {
    // 1. Prevent page refresh
    event.preventDefault();

    // 2. Get the text the user typed
    const taskText = input.value;

    // 3. Create a brand new <li> element
    const newLi = document.createElement("li");
    newLi.textContent = taskText;

    // 4. Inject it into the <ul> on the page
    list.appendChild(newLi);

    // 5. Clear the input box
    input.value = "";
});
```

## Expected Output
You can type a task, press Enter or click the button, and the task will instantly appear in the list below. The page will not flicker or refresh. The input box clears itself automatically.
