const form = document.getElementById("movie-form");
const input = document.getElementById("movie-input");
const list = document.getElementById("movie-list");

let movies = JSON.parse(localStorage.getItem("movieWatchlist")) || [];

const saveToStorage = () => {
    localStorage.setItem("movieWatchlist", JSON.stringify(movies));
};

const renderMovies = () => {
    list.innerHTML = "";
    movies.forEach((movie) => {
        const li = document.createElement("li");
        if (movie.watched) li.classList.add("watched");

        const titleSpan = document.createElement("span");
        titleSpan.textContent = movie.title;
        titleSpan.classList.add("movie-title");
        titleSpan.addEventListener("click", () => {
            movie.watched = !movie.watched;
            saveToStorage();
            renderMovies();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            movies = movies.filter(m => m.id !== movie.id);
            saveToStorage();
            renderMovies();
        });

        li.appendChild(titleSpan);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() === "") return;
    
    movies.push({ id: Date.now(), title: input.value, watched: false });
    saveToStorage();
    renderMovies();
    input.value = "";
});

renderMovies();
