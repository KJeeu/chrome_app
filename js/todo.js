const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos(){
    //toDos array내용 로컬스토로지에 넣기
    localStorage.setItem("todos", JSON.stringify(toDos));
}


function deleteToDo(event){
    const li = event.target.parentElement; //버튼의 부모 접근
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.append(span, button);
    toDoList.appendChild(li);
}

function hadleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", hadleToDoSubmit);