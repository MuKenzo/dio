const form = document.getElementById('tarefa_form');
const lista_tarefas = document.getElementById('tarefas');

form.onsubmit = function(e) {
    e.preventDefault();
    const entrada = document.getElementById('input_tarefa');
    adiciona_tarefa(entrada.value);
    form.reset();
};

function adiciona_tarefa(desc) {
    const tarefa_container = document.createElement('div');
    const nova_tarefa = document.createElement('input');
    const tarefa_etiqueta = document.createElement('label');
    const tarefa_desc = document.createTextNode(desc);

    nova_tarefa.setAttribute('type', 'checkbox');
    nova_tarefa.setAttribute('name', desc);
    nova_tarefa.setAttribute('id', desc);

    tarefa_etiqueta.setAttribute('for', desc);
    tarefa_etiqueta.appendChild(tarefa_desc);

    tarefa_container.classList.add('tarefa-item');
    tarefa_container.appendChild(nova_tarefa);
    tarefa_container.appendChild(tarefa_etiqueta);

    lista_tarefas.appendChild(tarefa_container);
}