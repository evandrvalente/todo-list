
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
    criação do elemento, só de curiosidade mesmo. 
    É possivel elaborar diversos métodos para montar um ID que
    seja exclusivo, utilizei o tempo por ser bem simples, funcional e o mais rápido 
    para o momento*/
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
delAllBtn.addEventListener("click", clearAll);


//limpar somente os finalizados
function clearCompleted(){
    document.querySelectorAll('.completed').forEach(
        function(elemento){elemento.remove()}
    );
/*Inicialmente eu estava tentando fazer essa parte utilizando 'laço for', 
porém estava com dificuldade em remover o elemento do nó, pois embora no console 
a variável que atribuí à saída deste queryselector retornava a array com os elementos 
que eu queria, ao executar dentro da função estava retornando 'undefined'. 
Ao pesquisar, encontrei sugestões de tratar esta saída como um array qualquer 
então tentar utilizar o 'forEach'.
Referências:
https://www.ti-enxame.com/pt/javascript/como-remover-elementos-que-foram-buscados-usando-queryselectorall/1068825013/
https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
https://blog.betrybe.com/javascript/javascript-foreach/
*/
};
delDoneBtn.addEventListener("click", clearCompleted);