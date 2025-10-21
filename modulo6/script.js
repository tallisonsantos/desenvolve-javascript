let tarefas = [];

function renderizarTarefas() {
    const listaUl = document.getElementById('lista-de-tarefas');
    listaUl.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        
        if (tarefa.status) {
            li.classList.add('concluida');
        }

        li.innerHTML = `
            <input type="checkbox"data-index="${index}"${tarefa.status ? 'checked' : ''}>
            <span>${tarefa.descricao}</span>
        `;

        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', alterarStatus);

        listaUl.appendChild(li);
    });
}

function adicionarTarefa() {
    const input = document.getElementById('nova-tarefa-input');
    const descricao = input.value.trim();

    if (descricao) {
        const novaTarefa = {
            descricao: descricao,
            status: false
        };

        tarefas.push(novaTarefa);
        
        input.value = '';

        renderizarTarefas();
    } else {
        alert('Por favor, digite a descrição da tarefa.');
    }
}


function alterarStatus(event) {
    
    const index = event.target.getAttribute('data-index');
    
    tarefas[index].status = !tarefas[index].status;
    
    renderizarTarefas();
}

document.getElementById('adicionar-tarefa-btn').addEventListener('click', adicionarTarefa);

document.getElementById('nova-tarefa-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

renderizarTarefas();