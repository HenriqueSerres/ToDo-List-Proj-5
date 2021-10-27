// exercicio 4
function listaOrdenada() {
  let containerOl = document.querySelector('#container-ol');
  let listaTarefas = document.createElement('ol');
  listaTarefas.id = 'lista-tarefas';
  containerOl.appendChild(listaTarefas);  
}
listaOrdenada();

//exercicio 5 e 6
const buttonAdd = document.querySelector('#criar-tarefa');
const tarefasOl = document.getElementById('lista-tarefas');
const inputtList = document.getElementById('texto-tarefa');
buttonAdd.addEventListener('click', function(){
  let tarefas = inputtList.value;
  let tarefasLi = document.createElement('li');
  tarefasLi.innerText = tarefas;
  inputtList.value = "";
  tarefasOl.appendChild(tarefasLi);
})

//exercicio 7 e 8

const listaTarefas = document.querySelector('ol');
function selectLi(event){
  let select = document.querySelector('.selected');
  if (select) {
   select.classList.remove("selected");
  }
  event.target.classList.add("selected");
}
listaTarefas.addEventListener('click', selectLi);

//exercicio 9
function riscaLi(event){
  let riscado = document.querySelector('.completed');
  if (riscado) {
   riscado.classList.remove("completed");
  } else if(!riscado)
  event.target.classList.add("completed");
}
listaTarefas.addEventListener('dblclick', riscaLi);