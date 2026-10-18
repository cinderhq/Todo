const todoList = [];
const input = document.querySelector("#taskInput");
const dateInput = document.querySelector("#dateInput");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

const addTodo = () => {
  const input = document.querySelector("#taskInput");
  const dateInput = document.querySelector("#dateInput");
  const task = input.value;
  const date = dateInput.value;

  todoList.push({ task, date });
  input.value = "";
  dateInput.value = "";
  console.log(todoList);

  renderTodoList();
}

const renderTodoList = () => {
  document.querySelector("#todoList").innerHTML = "";
  
  todoList.forEach((todoObject, i) => {
    
    const html = `
      <div class="todo-item">${todoObject.task}</div>
      <div class="todo-item">${todoObject.date}</div>
      <button id="deleteButton" onclick="todoList.splice(${i}, 1); renderTodoList();">Delete</button>
    `;
    document.querySelector("#todoList").innerHTML += html;
  })

}

const clearAllTodos = () => {
  todoList.length = 0;
  renderTodoList();
} 

const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};