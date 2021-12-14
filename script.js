
const taskEditor = document.getElementById("texto-tarefa");
const addTaskBtn = document.getElementById("criar-tarefa");
const taskList = document.getElementById("lista-tarefas");
const tList = document.getElementsByClassName("toDo");
const d0 = 1639442823951;

//criar função para adicionar tarefa à lista
function addTask (){
    let newTask = taskEditor.value;
    let newElement = document.createElement("li");
    newElement.innerText = newTask;
    newElement.classList.add("toDo");
    const dN = Date.now();
    const nID = dN - d0;
    const taskId = "task" + nID;
    newElement.setAttribute("id", taskId);
    taskList.appendChild(newElement);
    //testei incluir um eventlistenner aqui, confesso que isso oi no chutem lance de sorte
    newElement.addEventListener("click", handleChangeTask);
    taskEditor.value = "";
};

addTaskBtn.addEventListener("click", addTask);


//selecionar
function handleChangeTask(event){
    for (i = 0; i < tList.length; i += 1) {
        let thisItem = tList[i];
        thisItem.classList.remove("selected-task");
    };
    event.target.classList.add("selected-task");
};
 
