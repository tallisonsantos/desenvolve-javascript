const feed = document.getElementById('feed');
const formulario = document.getElementById('formularioPostagem');
const textarea = document.getElementById('textoPostagem');

let postagens = [];

function renderizarFeed() {
  feed.innerHTML = '';
  postagens.forEach((postagem, indice) => {
    const divPost = document.createElement('div');
    divPost.classList.add('postagem');

    divPost.innerHTML = `
      <div class="cabecalho-postagem">
        <img src="${postagem.avatar}" class="avatar" alt="Avatar do usuário">
        <span class="nome-usuario">${postagem.nomeUsuario}</span>
      </div>
      <div class="texto-postagem">${postagem.texto}</div>
      <img src="${postagem.imagem}" class="imagem-gato" alt="Gatinho fofo">
      <button class="botao-curtir" data-indice="${indice}">❤️ ${postagem.curtidas}</button>
    `;

    feed.appendChild(divPost);
  });
}

async function adicionarPostagem(texto) {
  try {
    const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
    const dados = await resposta.json();
    const imagemGato = dados[0].url;

    const novaPostagem = {
      data: new Date(),
      nomeUsuario: 'GatinhodoTwitter',
      avatar: 'https://i.pravatar.cc/100?img=12',
      texto: texto,
      imagem: imagemGato,
      curtidas: 0
    };

    postagens.unshift(novaPostagem);
    renderizarFeed();
  } catch (erro) {
    console.error('Erro ao buscar imagem de gato:', erro);
  }
}

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  const texto = textarea.value.trim();
  if (texto) {
    await adicionarPostagem(texto);
    textarea.value = '';
  }
});

feed.addEventListener('click', (evento) => {
  if (evento.target.classList.contains('botao-curtir')) {
    const indice = evento.target.dataset.indice;
    postagens[indice].curtidas++;
    renderizarFeed();
  }
});