AOS.init();


/** Criando a contagem regressiva */
const dataDoEvento = new Date("Aug 14, 2024 12:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;


    const diaAteEvento = Math.floor(distanciaEvento / diaEmMs); /** contagem em dias */
    const horasAteEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs); /** contagem em horas */
    const minutosEvento = Math.floor((distanciaEvento % horaEmMs) / minutoEmMs); /**contagem em minutos */
    const segundosEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000); /**contagem em segundos */


    document.getElementById('contagem').innerHTML = `${diaAteEvento}d ${horasAteEvento}h ${minutosEvento}m ${segundosEvento}s`;

    if (distanciaEvento < 0) { 
        clearInterval(contaHoras);
        document.getElementById('contagem').innerHTML = 'Evento Expirado'
    }
}, 1000);