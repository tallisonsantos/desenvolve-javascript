
const calcularTempoRestante = (dataFutura) =>{
    const agora = new Date().getTime();
    const diferençaDeDatas = dataFutura-agora;

    const segundosDeMinuto = 60 * 1000;
    const segundosDeHora = 60 * segundosDeMinuto;
    const segundosDoDia = 24 * segundosDeHora;

    const dias = Math.floor(diferençaDeDatas / segundosDoDia);
    const horas = Math.floor((diferençaDeDatas % segundosDoDia) / segundosDeHora);
    const minutos = Math.floor((diferençaDeDatas % segundosDeHora) / segundosDeMinuto);
    const segundos = Math.floor((diferençaDeDatas % segundosDeMinuto) / 1000);

    return {
        dias,
        horas,
        minutos,
        segundos
    }
    
}

const atualizarTemporizador = () => {
    const dataFutura = new Date('2026-01-01T00:00:00').getTime();
    tempoRestante = calcularTempoRestante(dataFutura);

    document.getElementById('dias').innerText = `Dias ${tempoRestante.dias}`;
    document.getElementById('horas').innerText = `Horas ${tempoRestante.horas}`;
    document.getElementById('minutos').innerText = `Minutos ${tempoRestante.minutos}`;
    document.getElementById('segundos').innerText = `Segundos ${tempoRestante.segundos}`;

}

const intervalo = setInterval(atualizarTemporizador,1000);