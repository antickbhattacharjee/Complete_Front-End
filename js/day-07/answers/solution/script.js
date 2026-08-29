const pic = document.getElementById("profilePic");
const nameEl = document.getElementById("profileName");
const bioEl = document.getElementById("profileBio");

pic.src = "https://via.placeholder.com/150";
nameEl.textContent = "Jane Developer";
bioEl.textContent = "I love manipulating the DOM with JavaScript!";

document.body.classList.add("dark-mode");
