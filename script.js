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
  tarefasLi.className = 'ordenaLi';
  tarefasLi.innerText = tarefas;
  inputtList.value = "";
  tarefasOl.appendChild(tarefasLi);
})

//exercicio 7
tarefasOl.addEventListener('click', function(event){
  if (event.target.style.backgroundColor === "rgb(128,128,128)") {
    event.target.style.bacgroundColor = "rgb(255, 255, 255)";
  } else {
    event.target.style.backgroundColor = "rgb(128,128,128)";
  }
})
