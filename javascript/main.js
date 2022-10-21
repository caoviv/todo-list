// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listener 
todoButton.addEventListener('click', addTodo)

// Functions 
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();

    //create div with todo class
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    //create li 
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    completedButton.classList.add('completed-button');
    todoDiv.appendChild(completedButton);

    //Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);

    //Append todoDiv to .todo-list
    todoList.appendChild(todoDiv)
}