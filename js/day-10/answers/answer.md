# Day 10 Answer

## Explanation
This is a complete CRUD (Create, Read, Update, Delete) application. 
The core engine is the `movies` array. Every time the user interacts with the app (Adds a movie, clicks Delete, clicks a movie to mark it watched), we update the array, save it to `localStorage`, and call `renderMovies()` to redraw the screen.

## Complete Solution (Assignment)

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Watchlist</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Movie Watchlist</h1>
        
        <form id="movie-form">
            <input type="text" id="movie-input" placeholder="What do you want to watch?" required>
            <button type="submit">Add</button>
        </form>

        <ul id="movie-list">
            <!-- Movies injected here via JS -->
        </ul>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### `style.css`
```css
* { box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
body { background: #f4f4f9; display: flex; justify-content: center; padding: 50px 20px; }
.container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); width: 100%; max-width: 500px; }
h1 { text-align: center; color: #333; margin-top: 0; }

form { display: flex; gap: 10px; margin-bottom: 20px; }
input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 5px; font-size: 16px; }
button { padding: 10px 20px; background: #2563eb; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; }
button:hover { background: #1d4ed8; }

ul { list-style: none; padding: 0; margin: 0; }
li { display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #eee; transition: background 0.2s; }
li:hover { background: #f9f9f9; }

.movie-title { cursor: pointer; flex: 1; }
.watched .movie-title { text-decoration: line-through; color: #999; }
.delete-btn { background: #ef4444; padding: 5px 10px; font-size: 12px; }
.delete-btn:hover { background: #dc2626; }
```

### `script.js`
```javascript
// Safely load movies from localStorage with error handling
const loadMovies = () => {
    try {
        const savedMovies = localStorage.getItem("movieWatchlist");
        
        if (!savedMovies) {
            return [];
        }
        
        const parsedMovies = JSON.parse(savedMovies);
        
        // Ensure parsed data is an array
        return Array.isArray(parsedMovies) ? parsedMovies : [];
    } catch (error) {
        console.error("Could not load saved movies:", error);
        return [];
    }
};

// --- 1. DOM Elements ---
const form = document.getElementById("movie-form");
const input = document.getElementById("movie-input");
const list = document.getElementById("movie-list");

// --- 2. State (Data) ---
let movies = loadMovies();

// --- 3. Save Function ---
const saveToStorage = () => {
    localStorage.setItem("movieWatchlist", JSON.stringify(movies));
};

// --- 4. Render Function ---
const renderMovies = () => {
    // Clear current list
    list.innerHTML = "";
    
    // Show empty state if no movies
    if (movies.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.classList.add("empty-state");
        emptyMessage.textContent = "No movies yet. Add one to get started!";
        list.appendChild(emptyMessage);
        return;
    }

    // Loop through state array and build HTML
    movies.forEach((movie) => {
        const li = document.createElement("li");
        if (movie.watched) {
            li.classList.add("watched");
        }

        // Use a button for accessibility (not a clickable span)
        const toggleBtn = document.createElement("button");
        toggleBtn.type = "button";
        toggleBtn.classList.add("movie-title");
        toggleBtn.textContent = movie.title;
        toggleBtn.setAttribute("aria-pressed", String(movie.watched));
        
        // Toggle Watched Event
        toggleBtn.addEventListener("click", () => {
            movie.watched = !movie.watched; // Flip boolean
            saveToStorage();
            renderMovies(); // Re-draw
        });

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        
        // Delete Event
        deleteBtn.addEventListener("click", () => {
            // Filter out THIS movie
            movies = movies.filter(m => m.id !== movie.id);
            saveToStorage();
            renderMovies(); // Re-draw
        });

        // Assemble <li>
        li.appendChild(toggleBtn);
        li.appendChild(deleteBtn);
        
        // Add <li> to <ul>
        list.appendChild(li);
    });
};

// --- 5. Add New Movie ---
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Validate: reject empty and whitespace-only entries
    const trimmedTitle = input.value.trim();
    if (trimmedTitle === "") {
        console.warn("Cannot add empty movie title");
        return;
    }

    const newMovie = {
        id: Date.now(), // Unique ID based on time
        title: trimmedTitle,
        watched: false
    };

    movies.push(newMovie);
    saveToStorage();
    renderMovies();

    input.value = ""; // Clear input
    input.focus(); // Return focus to input
});

// --- 6. Initial Load ---
// Draw the list as soon as the page loads
renderMovies();
```

## Expected Output
A fully functional Web Application. You can add movies, click their names to cross them out, or click delete to remove them. You can refresh the page or completely close the browser, and your list will remain perfectly intact.
