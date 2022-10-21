// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listener 
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