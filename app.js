// Selectors
const todoInput = document.querySelector(".todo-description");
const todoButton = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  // Prevent form from submiting
  event.preventDefault();

  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "HEY";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Completed Todo Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Delete Todo
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("complete-btn");
  todoDiv.appendChild(deleteButton);

  // Append to list
  todoList.appendChild(todoDiv);
}
