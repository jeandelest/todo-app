let todos = [];

function renderTodos() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";
    todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.done ? "completed" : "";
    
    const text = document.createElement("span");
    text.textContent = todo.text;
    text.onclick = () => toggleTodo(index);

    const actions = document.createElement("div");
    actions.className = "actions";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Suppr.";
    deleteBtn.onclick = () => deleteTodo(index);

    actions.appendChild(deleteBtn);
    li.appendChild(text);
    li.appendChild(actions);
    list.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById("todo-input");
    const value = input.value.trim();
    if (value !== "") {
    todos.push({ text: value, done: false });
    input.value = "";
    renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function toggleTodo(index) {
    todos[index].done = !todos[index].done;
    renderTodos();
}

document.addEventListener("DOMContentLoaded", () => {
    renderTodos();
})