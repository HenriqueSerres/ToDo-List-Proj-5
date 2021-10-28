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
const buttonClean = document.getElementById('apaga-tudo');
const tarefasOl = document.getElementById('lista-tarefas');
const inputtList = document.getElementById('texto-tarefa');

buttonAdd.addEventListener('click', function () {
  let tarefas = inputtList.value;
  let tarefasLi = document.createElement('li');
  tarefasLi.innerText = tarefas;
  inputtList.value = "";
  tarefasOl.appendChild(tarefasLi);
})

//exercicio 7 e 8
const listaTarefas = document.querySelector('ol');
function selectLi(event) {
  let select = document.querySelector('.selected');
  if (select) {
    select.classList.remove("selected");
  }
  event.target.classList.add("selected");
}
listaTarefas.addEventListener('click', selectLi);

//exercicio 9 (toggle visto no)
const riscado = document.querySelector('.completed');
function riscaLi(event) { 
    event.target.classList.toggle("completed");
}
listaTarefas.addEventListener('dblclick', riscaLi);

//exercicio 10
function cleanTasks() {
  listaTarefas.innerHTML = '';
}
buttonClean.addEventListener('click', cleanTasks);

//exercicio 11
const buttonDone = document.getElementById('remover-finalizados')
function cleanDone() {
  let riscadoA = document.querySelectorAll('.completed');
  for (let li of riscadoA){
    li.remove();
  }
}
buttonDone.addEventListener('click', cleanDone);

//fim dos requisitos obrigatórios. eba!!