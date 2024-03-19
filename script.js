const diasElemento = document.getElementById('dias');
const horasElemento = document.getElementById('horas');
const minutosElemento = document.getElementById('minutos');
const segundosElemento = document.getElementById('segundos');

function actualizarTemporizador() {
    const ahora = new Date();
    const finDelDia = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate() + 1);
    const tiempoRestante = finDelDia - ahora;

    const segundos = Math.floor((tiempoRestante / 1000) % 60);
    const minutos = Math.floor((tiempoRestante / 1000 / 60) % 60);
    const horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));

    diasElemento.textContent = dias;
    horasElemento.textContent = formatarTiempo(horas);
    minutosElemento.textContent = formatarTiempo(minutos);
    segundosElemento.textContent = formatarTiempo(segundos);
}

function formatarTiempo(tiempo) {
    return tiempo < 10 ? `0${tiempo}` : tiempo;
}

actualizarTemporizador();
setInterval(actualizarTemporizador, 1000);
