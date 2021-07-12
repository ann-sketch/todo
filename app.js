// variable declaration and assigning 
const todoinput = document.getElementById('todo-input');
const todobutton = document.getElementById('todo-btn');
const todolist = document.querySelector('.todo-list');
const deletebutton = document.querySelector('.todo-list');
const completedbutton = document.querySelector('.todo-list');

// Event listeners
todobutton.addEventListener('click', addtodoitem);
deletebutton.addEventListener('click', deletetodo);
completedbutton.addEventListener('click', completetodo);

//functions
function addtodoitem(){
    //create todo div
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');
    //create list item
    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    //create completed button
    const completedbtn = document.createElement('button');
    completedbtn.innerText = ('Complete');
    completedbtn.classList.add('completed-btn');
    tododiv.appendChild(completedbtn);
    //create delete button
    const deletebtn = document.createElement('button');
    deletebtn.innerText = ('Delete');
    deletebtn.classList.add('delete-btn');
    tododiv.appendChild(deletebtn);
    //append todo list
    todolist.appendChild(tododiv);
    //clear todo input
    todoinput.value ="";
    
}

function deletetodo(e){
    const item = e.target;
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
}

function completetodo(e){
    const item = e.target;
    const txtIsNormal = true
    const txtIsLinedThrough = false
    // item.previousElementSibling gets the element 
    // <li class="todo-item">todo 1</li>
    // .style.textDecoration styles the element to either normal/line-through
    if (item.classList[0] === 'completed-btn') {
        item.previousElementSibling.style.textDecoration ="line-through"
        item.previousElementSibling.style.textDecoration ="normal"
    }
}

