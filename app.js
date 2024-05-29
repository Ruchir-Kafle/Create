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
            done: false,
            priority
        }
    );

    for (task of data) {
        
    };

    return true;
}

function handleAdd() {
    let desc = document.querySelector("#todo");
    createTodo(desc.value);
}

addButton.addEventListener("click", handleAdd);