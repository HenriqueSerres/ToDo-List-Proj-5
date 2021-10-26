function listaOrdenada() {
  let containerOl = document.querySelector('#container-ol');
  let listaTarefas = document.createElement('ol');
  listaTarefas.id = 'lista-tarefas';
  containerOl.appendChild(listaTarefas);  
}
listaOrdenada();