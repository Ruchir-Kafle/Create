// HTML selectors
const addButton = document.querySelector("#add")
const todoList = document.querySelector("#todo-list")

// All the data
let data = [];

// Function to create a "Todo" task
// Abstraction
function createTodo(desc, priority=false) {
    if (!desc) {
        return false;
    }

    data.push(
        {
            todo: desc,
            priority,
            done: false,
        }
    );

    return true;
}

function render() {
    let todoList = document.querySelector(".todo-list")
    
    let counter = 0;
    todoList.innerHTML = ``;
    for (task of data) {
        let priorityDisplay = ``;
        if (task.priority) {
            priorityDisplay = ` *`;
        }
        
        
        todoList.innerHTML += `<li>
        <input type="checkbox" id="check-${counter}">
        <label for="check-${counter}">${task.todo}${priorityDisplay}</label>
        </li>`;
        
        let check = document.querySelector(`#check-${counter}`);
        check.checked = true;
        console.log(check);

        counter += 1;
    }

    let todos = todoList.querySelectorAll('input[type="checkbox"]');
    for (checkbox of todos) {
        checkbox.addEventListener("change", handleCheck);
    }
}

function handleCheck(evt) {
    evt.currentTarget.parentElement.querySelector("label").classList.toggle("checked");
    let id = evt.currentTarget.id.split('-');
    data[parseInt(id[id.length - 1])].done = true;
}

function handleAdd() {
    let desc = document.querySelector("#todo");
    let priorityBox = document.querySelector("#priority")
    createTodo(desc.value, priorityBox.checked);
    render()
}

addButton.addEventListener("click", handleAdd);