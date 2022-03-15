const todoInput = document.getElementById("input-todo");
const addBtn = document.getElementById("add-btn");
const container = document.getElementById("todo-container");
const totalText = document.querySelector('.total');
const checkedText = document.querySelector('.checked');

let totalTodos = 0;
let totalChecked = 0;

function createTodo(value) {
    const div = document.createElement("div");
    div.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", (e) => {
        const isChecked = e.target.checked;
        checkbox.nextSibling.style.textDecoration = isChecked ? "line-through" : "";
        isChecked ? totalChecked += 1 : totalChecked -= 1;
        checkedText.innerText = 'Checked : ' + totalChecked;

    })
    div.appendChild(checkbox);
    const p = document.createElement("p");
    p.innerText = value;
    div.appendChild(p);
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener('click', function(e) {
        const target = e.target.parentNode;
        container.removeChild(target);
        totalTodos -= 1;
        totalText.innerText = 'Total : ' + totalTodos;
        target.children[0].checked ? totalChecked -= 1 : {};
        checkedText.innerText = 'Checked : ' + totalChecked;
    })
    div.appendChild(delBtn);
    todoInput.value = "";
    return div;
}

addBtn.addEventListener("click", () => {
    const todo = createTodo(todoInput.value);
    todo.addEventListener('mouseenter', (e) => {
        e.target.children[2].style.display = 'flex';
    })
    todo.addEventListener('mouseleave', (e) => {
        e.target.children[2].style.display = 'none';
    })
    container.appendChild(todo);
    totalTodos += 1;
    totalText.innerText = 'Total : ' + totalTodos;
})