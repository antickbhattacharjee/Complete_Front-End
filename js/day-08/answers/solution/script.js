const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = input.value;
    
    const newLi = document.createElement("li");
    newLi.textContent = taskText;
    
    list.appendChild(newLi);
    input.value = "";
});
