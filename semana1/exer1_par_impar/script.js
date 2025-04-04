let x=prompt("Entre com um número inteiro","");
let aux = x % 2;
switch (aux) {
    case 0:
        alert("Número par");
        break;
    case 1:
        alert("Número ímpar");
        break;
    default:
        alert("Valor inválido");
}
