var input = document.getElementById("input")
var btn = document.getElementById("add")
var todoList = document.getElementById("todoList")

var todos = [];
window.onload = () => {
   todos = JSON.parse(localStorage.getItem('todos')) || []
   todos.forEach(todo => addTodo(todo))
}

btn.addEventListener('click', () => {
    todos.push(input.value)
    addTodo(input.value)
    input.value = ''
    localStorage.setItem('todos', JSON.stringify(todos))
})

function addTodo(todo){
    var para = document.createElement('p')
    para.innerText = todo;
    todoList.appendChild(para)
    para.addEventListener('click',() => {
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',() => {
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
   let index = todos.indexOf(todo)
   if(index>-1)
        todos.splice(index,1);
        localStorage.setItem('todos', JSON.stringify(todos))
}