// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listener 
document.addEventListener('DOMContentLoaded', getLocalTodos)
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


// Functions 
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    
    //create div with todo class
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    
    //create li 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //Add todo item to local storage
    saveLocalTodos(todoInput.value);
    
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
    
    //Clear todo-input value
    todoInput.value = ''; 
}

function deleteCheck(event) {
    const item = event.target;
    //Delete todo item 
    if (item.classList[0] === "delete-button") {
        const todo = item.parentElement;
        //Add animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
    
    //Toggle todo item completed style
    if(item.classList[0] === "completed-button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(event.target.value) {
            case 'all':
            todo.style.display = 'flex';
            break;
            case 'completed':
            if (todo.classList.contains('completed')){
                todo.style.display = 'flex';
            } else {
                todo.style.display = 'none';
            }
            break;
            case 'uncompleted':
            if (!todo.classList.contains('completed')){
                todo.style.display = 'flex';
            } else {
                todo.style.display = 'none';
            }
            break;            
        } 
    });
}

function saveLocalTodos(todo) {
    //check local storage for stored data
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocalTodos() {
    //check local storage for stored data
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        //create div with todo class
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo')
        
        //create li 
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
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
    })
}

function removeLocalTodos(todo) {
    //check local storage for stored data
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}