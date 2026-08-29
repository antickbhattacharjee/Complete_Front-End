const form = document.getElementById("movie-form");
const input = document.getElementById("movie-input");
const list = document.getElementById("movie-list");

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

let movies = loadMovies();

const saveToStorage = () => {
    localStorage.setItem("movieWatchlist", JSON.stringify(movies));
};

const renderMovies = () => {
    list.innerHTML = "";
    
    // Show empty state if no movies
    if (movies.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.classList.add("empty-state");
        emptyMessage.textContent = "No movies yet. Add one to get started!";
        list.appendChild(emptyMessage);
        return;
    }
    
    movies.forEach((movie) => {
        const li = document.createElement("li");
        if (movie.watched) li.classList.add("watched");

        // Use a button for the movie title instead of a span (accessibility)
        const toggleBtn = document.createElement("button");
        toggleBtn.type = "button";
        toggleBtn.classList.add("movie-title");
        toggleBtn.textContent = movie.title;
        toggleBtn.setAttribute("aria-pressed", String(movie.watched));
        toggleBtn.addEventListener("click", () => {
            movie.watched = !movie.watched;
            saveToStorage();
            renderMovies();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            movies = movies.filter(m => m.id !== movie.id);
            saveToStorage();
            renderMovies();
        });

        li.appendChild(toggleBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Validate input: reject empty and whitespace-only entries
    const trimmedTitle = input.value.trim();
    if (trimmedTitle === "") {
        console.warn("Cannot add empty movie title");
        return;
    }
    
    movies.push({ id: Date.now(), title: trimmedTitle, watched: false });
    saveToStorage();
    renderMovies();
    input.value = "";
    input.focus();
});

// Initial render
renderMovies();
