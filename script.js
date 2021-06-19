function getTodos(params) {
    var todos = new Array();
    // create a local storage for todos
    var todos_str = localStorage.getItem('todo');
    // if the todos string is !null then parse the todos
    //return the todos form local storage
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    //get task from the input box
    var task = document.getElementById('task').value;
    //get all the todos from the localstorage and set on todos
    var todos = getTodos();
    //add the task on the todos 
    todos.push(task);
    //send the data to the local storage
    localStorage.setItem('todo', JSON.stringify(todos));
    console.log(localStorage);
    show();
    return false;
}

function clearDefault(a) {
    //clear any task from the input if any
    if (a.defaultValue == a.value) {
        a.value = "";
    }
}

function remove(){

    var id = this.getAttribute('id');
    //get the tasks from the local storage
    var todos = getTodos();

    //splice the item to remove the task 
    todos.splice(id,1);
    // set the updated todo tasks into the local storage
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').innerHTML = null;

    show();

    return false;
}


function show() {
    var todos = getTodos();
    var html = '<ul>';
    for (let i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="'+ i + '"> Delete</button> </li>';
    }
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }

}

show();



