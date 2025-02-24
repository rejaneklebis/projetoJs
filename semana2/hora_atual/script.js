function atualizarRelogio() {
    
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    const horario = `${horas}:${minutos}:${segundos}`;

    document.getElementById("relogio").textContent = horario;

    setTimeout(atualizarRelogio, 1000);
}

window.onload = function() {

    const elementoRelogio = document.createElement("h1");
    elementoRelogio.id = "relogio";
    elementoRelogio.style.fontSize = "2em";
    document.body.appendChild(elementoRelogio);

    atualizarRelogio();
};
