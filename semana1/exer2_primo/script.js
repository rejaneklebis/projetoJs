let numero;

do {
    numero = prompt("Digite um número inteiro positivo:");

    if (isNaN(numero) || numero <= 1) {
        alert("Entrada inválida! Digite um número inteiro positivo maior que 1. O número 1 não é primo.");
    }
} while (isNaN(numero) || numero <= 1);

let primo = true;

for (let i = 2; i * i <= numero; i++) {
    if (numero % i === 0) {
        primo = false;
        break;
    }
}

if (primo) {
    alert(numero + " é um número primo.");
} else {
    alert(numero + " não é um número primo.");
}