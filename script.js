
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

function executeOnClick(event){
  const element = event.target;
  const list = document.getElementById("tasklist");
  const complete_task = document.getElementById("tasklist1")
  const elementValue = element.getAttribute("data-filter")
  list.innerHTML = '';
  const todos = loadTodos();
  if(elementValue === 'all'){

  todos.todoList.forEach((listLi) => {
    appendList(listLi)
 
  });
  }

  else if(elementValue === 'pending'){
    todos.todoList.forEach((listLi) => {
      if(listLi.isCompleted ===! true)
        appendList(listLi)
    })
  }
    else{
      todos.todoList.forEach((listLi) => {
        if(listLi.isCompleted === true)
          appendList(listLi)

      
      })

      complete_task.classList.add("visible")


    }
  }


function appendList(todoText) {
  const list = document.getElementById("tasklist");


  const listLi = document.createElement("li");
  
  listLi.classList.add("todoItems")

  const textDiv = document.createElement("div");
  textDiv.textContent = todoText.text;

  const wrapper = document.createElement("div")
  wrapper.classList.add("todoBtns")

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("editBtn");
  wrapper.appendChild(editBtn);


  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delBtn");
  wrapper.appendChild(delBtn);


  const completedBtn = document.createElement("button");
  completedBtn.textContent = "Completed";
  completedBtn.classList.add("completedBtn");


  completedBtn.addEventListener("click",(event)=>{
    const complete_task = document.getElementById("tasklist1")
    
    const tasklist_li = document.createElement("li");
    tasklist_li.textContent = todoText.text;

    complete_task.appendChild(tasklist_li)
    
  })

  wrapper.appendChild(completedBtn);
listLi.appendChild(textDiv)
listLi.appendChild(wrapper)

  list.appendChild(listLi); 
}


document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");

  const submitButton = document.getElementById("addTodo");

  const filterBtn = document.getElementsByClassName("filterBtn");
  

  for(const btn of filterBtn){
    btn.addEventListener("click", executeOnClick)
  }



  todoInput.addEventListener("change", (event) => {
    const todoText = event.target.value;
    event.target.value = todoText.trim();
  });

  submitButton.addEventListener("click", (event) => {
    const todoText = todoInput.value;
    if (todoText == "") {
      alert("please fill something");
    } else {
      addTodoToLocalStorage({text:todoText,isCompleted:false});
      appendList({text:todoText,isCompleted:false});
      todoInput.value = "";
    }
  })

  const todos = loadTodos();

  todos.todoList.forEach((listLi) => {
    appendList(listLi)
 
  });
});
