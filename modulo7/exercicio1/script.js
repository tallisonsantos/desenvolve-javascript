guardarnome = () => {
    const nomes = localStorage.getItem('pessoasQueCurtiram');
    return nomes ? JSON.parse(nomes) : [] ;
}
let pessoasQueCurtiram = guardarnome();

salvarnome = () => {
    localStorage.setItem('pessoasQueCurtiram',JSON.stringify(pessoasQueCurtiram));
}


atualizarParagrafo = () => { 
    const paragrafo = document.getElementById('pessoas-curtiram');
    let texto = '';
    const tamanho = pessoasQueCurtiram.length;

    if (tamanho === 0){
        texto = "Ninguém curtiu";
    }
    else if (tamanho === 1){
        texto = `${pessoasQueCurtiram[0]} curtiu`;
    }
    else if (tamanho === 2){
        texto = `${pessoasQueCurtiram[0]} e ${pessoasQueCurtiram[1]} curtiram`;
    }
    else {
        const restantes = tamanho - 2;
        texto = `${pessoasQueCurtiram[0]}, ${pessoasQueCurtiram[1]} e mais ${restantes} pessoas curtiram`;
    }
    paragrafo.innerText = texto;
}

curtir = () => {
    const input = document.getElementById('campo-de-texto');
    const nome = input.value.trim();

    if (nome){
        const nomeMinusculo = nome.toLowerCase();
        const jaCurtiu = pessoasQueCurtiram.some(p => p.toLowerCase() === nomeMinusculo);
        if (!jaCurtiu){
            pessoasQueCurtiram.push(nome);
            input.value = '';
            salvarnome();
            atualizarParagrafo();
        }
        else{
            alert(`${nome} já curtiu!`);
        }
    }
    else {
        alert(`Digite um nome para curtir!`);
    }
}

limpar = () => {
    pessoasQueCurtiram.length = 0;
    localStorage.removeItem('pessoasQueCurtiram');
    atualizarParagrafo();
    alert ('A lista de curtidas foi apagada');
}

document.addEventListener('DOMContentLoaded', () =>{
    const botaoCurtir = document.getElementById('botao-curtir');
    if (botaoCurtir) {
        botaoCurtir.addEventListener('click', curtir); 
    }
})

document.addEventListener('DOMContentLoaded', () =>{
    const botaoLimpar = document.getElementById('botao-limpar');
    if (botaoLimpar) {
        botaoLimpar.addEventListener('click', limpar);
    }
})