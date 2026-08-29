# Complete Web App Project

## 1. Concept Explanation
Today is about bringing everything together. You will build a "Movie Watchlist" app. 
Users can type in a movie they want to watch, add it to a list, mark it as "watched", or delete it. The list must save to `localStorage` so it doesn't disappear when they refresh.

## 2. Project Requirements
You must use:
1. **Arrays of Objects**: To store the movie data (e.g., `[{ id: 1, title: "The Matrix", watched: false }]`).
2. **DOM Manipulation**: To generate the list items in HTML based on the array.
3. **Event Listeners**: To handle form submissions (adding movies) and clicks (marking watched / deleting).
4. **Local Storage**: To save the array as a JSON string every time it changes, and load it when the page refreshes.

## 3. Architecture (The "State" pattern)
Instead of just manually adding HTML when a user clicks a button, we use a more professional pattern:
1. User submits form.
2. JS updates the `movies` **Array** (the "State").
3. JS saves the new Array to `localStorage`.
4. JS calls a `render()` function.
5. The `render()` function clears the `<ul>` and rebuilds it entirely based on the current `movies` Array.

## 4. Common Mistakes to Avoid
- **Not clearing the list before re-rendering**: If your `render` function doesn't start with `list.innerHTML = ""`, you will get duplicate items every time you add a new one.
- **Losing the LocalStorage data**: When the page loads, you must try to get the data from LocalStorage. If it's `null` (first time visitor), set your array to `[]`.

## 5. Trainer Notes
- This is a miniature version of how frameworks like React work (State -> UI Render). Emphasize that the Array is the "source of truth", and the HTML is just a visual reflection of that array.

## 6. Quick Revision
- Plan before you code.
- Write your HTML and CSS first to get it out of the way.
- Then, tackle the JS step by step: (1) Setup array, (2) Add to array, (3) Render array, (4) Save to storage.
