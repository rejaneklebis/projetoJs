window.onload = function() {

    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    const mesesAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    const dataAtual = new Date();

    const diaSemana = diasSemana[dataAtual.getDay()];
    const dia = dataAtual.getDate();
    const mes = mesesAno[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

    const elementoData = document.createElement("h2");
    elementoData.textContent = dataFormatada;

    document.body.appendChild(elementoData);
};
