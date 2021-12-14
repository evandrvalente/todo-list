
const taskEditor = document.getElementById("texto-tarefa");
const addTaskBtn = document.getElementById("criar-tarefa");
const taskList = document.getElementById("lista-tarefas");
const tList = document.getElementsByTagName("li");
const delAllBtn = document.getElementById("apaga-tudo");
const delDoneBtn = document.getElementById("remover-finalizados");
const d0 = 1639442823951;

//criar função para adicionar tarefa à lista
function addTask (){
    let newTask = taskEditor.value;
    let newElement = document.createElement("li");
    newElement.innerText = newTask;
    /*Queria saber se era possível atribuir um ID já na 
    criação do elemento, só de curiosidade mesmo. */
    const dN = Date.now();
    const nID = dN - d0;
    const taskId = "task" + nID;
    newElement.setAttribute("id", taskId);
    taskList.appendChild(newElement);
    /*Testei incluir um eventlistenner ao elemento já na criação,
     já que colocar outros atributos deu certo, 
     confesso que isso foi no chute, lance de sorte*/
    newElement.addEventListener("click", handleChangeTask);
    newElement.addEventListener("dblclick", checkTask);
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

//completed 
function checkTask(event){
    
        if (event.target.className === "completed" || event.target.className === "completed selected-task") {
            event.target.removeAttribute("class" , "completed");
        } else {
            event.target.setAttribute("class", "completed");
        };
    
};

//limpar lista
function clearAll(){
    while (taskList.hasChildNodes()){
        taskList.removeChild(taskList.firstChild);
    };
};

//limpar somente os finalizados

let c = document.querySelectorAll('.completed');
function clearCompleted(){
    for (let s = 0; s < c.length; s += 1) {
        console.log(c[s]);
    };
};