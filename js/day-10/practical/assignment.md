# Day 10 Assignment (Final Project)

## The Task: Movie Watchlist App
Create `index.html`, `style.css`, and `script.js` in the `starter` folder.

Follow this exact structure:

1. **HTML Structure**
   - A `<header>` with the app title.
   - A `<form id="movie-form">` containing an `<input>` and a submit `<button>`.
   - An empty `<ul>` with an ID of `movie-list`.

2. **CSS Styling**
   - Make it look clean. 
   - Add a class called `.watched` that applies `text-decoration: line-through; color: gray;` to a movie title.

3. **JS Variables & State**
   - Create a `movies` array. Initialize it by checking `localStorage`. If `localStorage` has data, `JSON.parse` it. If not, use `[]`.

4. **JS Render Function**
   - Create a `renderMovies()` function.
   - Clear the `innerHTML` of the `<ul>`.
   - `.forEach` over the `movies` array. For each movie, create an `<li>`.
   - The `<li>` should contain the movie title and a "Delete" button.
   - If `movie.watched` is true, add the `.watched` class to the `<li>`.
   - Append the `<li>` to the `<ul>`.

5. **JS Form Submission**
   - Listen for the form `submit`.
   - Prevent default. Get the input value.
   - Create a new movie object: `{ id: Date.now(), title: inputValue, watched: false }`.
   - `.push()` it to the `movies` array.
   - Save the array to `localStorage`.
   - Call `renderMovies()`.

6. **JS Interactivity (Toggle & Delete)**
   - Add event listeners to handle clicking a movie to toggle its `watched` status, and clicking the Delete button to `.filter()` it out of the array. (Hint: Event Delegation on the `<ul>` is best, but attaching listeners inside the `render` loop is easier for beginners).
