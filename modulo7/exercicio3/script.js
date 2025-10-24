function guardatarefa() {
    const tarefa = localStorage.getItem('tarefas');
    return tarefa ? JSON.parse(tarefa) : [];
}

function salvartarefa() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

let tarefas = guardatarefa();

function renderizarTarefas() {
    const listaUl = document.getElementById('lista-de-tarefas');
    listaUl.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        
        if (tarefa.status) {
            li.classList.add('concluida');
        }

        li.innerHTML = `
            <input type="checkbox" data-index="${index}" ${tarefa.status ? 'checked' : ''}>
            <span>${tarefa.descricao}</span>
            <button class="excluir-btn" data-index="${index}">Excluir</button>
        `;

        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', alterarStatus);

        const botaoExcluir = li.querySelector('.excluir-btn');
        botaoExcluir.addEventListener('click', excluirTarefa);

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
        salvartarefa();
        renderizarTarefas();
    } else {
        alert('Por favor, digite a descrição da tarefa.');
    }
}

function alterarStatus(event) {
    const index = event.target.getAttribute('data-index');
    tarefas[index].status = !tarefas[index].status;
    salvartarefa();
    renderizarTarefas();
}

function excluirTarefa(event) {
    const index = event.target.getAttribute('data-index');
    tarefas.splice(index, 1);
    salvartarefa();
    renderizarTarefas();
}

const botaoLimpar = document.getElementById('limpar-tudo');

botaoLimpar.addEventListener ('click', () => {
    tarefas.length = 0;
    localStorage.removeItem('tarefas');
    renderizarTarefas();
    alert('A lista de tarefas foi apagada.');
})

document.getElementById('adicionar-tarefa-btn').addEventListener('click', adicionarTarefa);
document.getElementById('nova-tarefa-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

renderizarTarefas();