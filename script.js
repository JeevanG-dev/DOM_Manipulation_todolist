function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) ||  {"todoList":[]};
  return todos;
}

function addTodoToLocalStorage(todoText){
const todos = loadTodos();
todos.todoList.push(todoText);
localStorage.setItem("todos",JSON.stringify(todos))

}

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const submitButton = document.getElementById("addTodo")


  todoInput.addEventListener("change", (event) => {
    const todoText = event.target.value;
    event.target.value = todoText.trim();
  });


  submitButton.addEventListener("click",(event)=>{
const todoText = todoInput.value;
if(todoText == ''){
    alert("please fill something")
}
else{
    addTodoToLocalStorage(todoText)
}

  })

  loadTodos()
});


