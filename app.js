// Selectors
const todoInput = document.querySelector(".todo-description");
const todoButton = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const sortingOption = document.querySelector(".sort-todo");
const todoDeadline = document.getElementById("todo-deadline");

// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
sortingOption.addEventListener("click", sortTodo);

// Functions

// 1.Add ToDo function
function addTodo(e) {
  // Prevent form from submiting
  e.preventDefault();

  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create list item
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  // Session storage
  saveSessionTodos(todoInput.value);
  // ..............

  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Create span with deadline
  const deadlineSpan = document.createElement("span");
  deadlineSpan.innerText = todoDeadline.value;
  newTodo.appendChild(deadlineSpan);

  // Completed Todo Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  // Delete Todo
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  // Append to list
  todoList.appendChild(todoDiv);

  // Clear Todo Input value
  todoInput.value = "";
}

// 2.Delete, Completed ToDo function
// Delete
function deleteTodo(e) {
  const item = e.target;

  if (
    item.classList[0] === "delete-btn" &&
    // Confirm popup
    confirm("Are you sure you want to delete an item?!")
  ) {
    const todo = item.parentElement;
    todo.remove();
  }

  // Completed
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completedItem");
  }
}

// Sorting ToDo's
function sortTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completedItem")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completedItem")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

// Save to Session Storage
function saveSessionTodos(todo) {
  let todos;
  if (sessionStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(sessionStorage.getItem("todos"));
  }
  todos.push(todo);
  sessionStorage.setItem("todos", JSON.stringify(todos));
}
