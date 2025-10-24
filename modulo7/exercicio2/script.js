document.getElementById("botao-buscar").addEventListener("click", async () => {
    const termo = document.getElementById("campo-busca").value.trim();
    const lista = document.getElementById("lista-resultados");

    lista.innerHTML = "";

    if (!termo) {
        lista.innerHTML = "<li>Por favor, digite um nome de usuário.</li>";
        return;
    }

    try {
        const resposta = await fetch(`https://api.github.com/users/${termo}`);

        if (!resposta.ok) {
            if (resposta.status === 404) {
                lista.innerHTML = "<li>Não foram encontrados usuários para esta pesquisa.</li>";
                return;
            }
            alert("Erro ao buscar o usuário.");
        }

        const usuario = await resposta.json();

        for (const chave in usuario) {
            const li = document.createElement("li");
            li.textContent = `${chave}: ${usuario[chave]}`;
            lista.appendChild(li);
        }

    } catch (erro) {
        console.error(erro);
        lista.innerHTML = "<li>Ocorreu um erro ao buscar o usuário.</li>";
    }
});
