
//here this loadTodos function is getting the data that is stored on browser localhost
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
  return todos;
}
//this function addTodoToLocalStorage is receving the data from submitButton function and storing the data to localStoage
function addTodoToLocalStorage(todoText) {
  const todos = loadTodos();
  todos.todoList.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function appendList(todoText) {
  const list = document.getElementById("tasklist");
  const listLi = document.createElement("li");
  listLi.textContent = todoText;
  list.appendChild(listLi);
}

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");

  const submitButton = document.getElementById("addTodo");

  const list = document.getElementById("tasklist");

  todoInput.addEventListener("change", (event) => {
    const todoText = event.target.value;
    event.target.value = todoText.trim();
  });

  submitButton.addEventListener("click", (event) => {
    const todoText = todoInput.value;
    if (todoText == "") {
      alert("please fill something");
    } else {
      addTodoToLocalStorage(todoText);
      appendList(todoText);
      todoInput.value = "";
    }
  })

  const todos = loadTodos();

  todos.todoList.forEach((listLi) => {
    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = listLi;
    list.appendChild(newTodoItem);
  });
});
