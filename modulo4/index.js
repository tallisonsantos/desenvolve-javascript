const estoque = [
    {id:2001, titulo:'2001:Uma odisseia no espaço', autor:'Arthur C. Clarke', quantidade:5},
    {id:2002, titulo:'Eu, robô', autor:'Isaac Asimov', quantidade:7},
    {id:2003, titulo:'Duna', autor:'Frank Herbert', quantidade:3},
    {id:2004, titulo:'O senhor dos anéis', autor:'J.R.R. Tolkien', quantidade:2},
    {id:2005, titulo:'O Código da Vinci', autor:'Dan brown', quantidade:4}
];

const adicionarLivro = (id,titulo,autor,quantidade) => {
    estoque.push({
        id,
        titulo,
        autor,
        quantidade,
    });
    console.log(`O livro ${titulo} foi adicionado com sucesso.`)
}

adicionarLivro(2006,'Tarzan, o rei das selvas','Edgar Rice Burroughs',2);

const removeLivro = (idDoLivro) => {
    const existeId = !!estoque.find (livro => livro.id === idDoLivro);
    if(existeId){
        for (let indice = 0; indice < estoque.length; indice++){
            if (estoque[indice].id === idDoLivro){
                console.log(`O livro de id ${idDoLivro} foi removido`);
                estoque.splice(indice, 1);
                break;
            }
        }
    }
    else {
        console.log(`O livro de id ${idDoLivro} não foi encontrado`);
    }
}

removeLivro(2006);

const atualizaQuantidade = (idDoLivro, novaQuantidade) => {
    const existeId = !!estoque.find (livro => livro.id === idDoLivro);
    if(existeId){
        for (let livro of estoque){
            if(livro.id === idDoLivro) {
                livro.quantidade = novaQuantidade;
                console.log (`A quantidade do livro ${livro.titulo} foi atualizada para ${novaQuantidade}`);
                break;
            }
        }
    } 
    else {
        console.log(`O livro de id ${idDoLivro} não foi encontrado`);
    }
}

atualizaQuantidade(2001,7);

const listarLivros = () => {
    if(estoque.length === 0){
        console.log(`O estoque está vazio`);
    }
    else{
        console.log(`O estoque possui ${estoque.length} titulos`);
        for(let livro of estoque){
            console.log(`Id:${livro.id}
                Livro: ${livro.titulo}
                Autor: ${livro.autor}
                Quantidade:${livro.quantidade}`);
                
        }
    }
}

listarLivros();