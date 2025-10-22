const pessoasQueCurtiram = [];

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

document.addEventListener('DOMContentLoaded', () =>{
    const botao = document.getElementById('botao-curtir');
    if (botao) {
        botao.addEventListener('click', curtir); 
    }
})