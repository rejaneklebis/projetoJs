let numero;

do {
    numero = prompt("Digite um número inteiro positivo:");
    
    numero = Number(numero);
   
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        alert("Entrada inválida! Digite um número inteiro positivo.");
    }
} while (isNaN(numero) || numero < 0 || !Number.isInteger(numero));

let fatorial = 1;

for (let i = 2; i <= numero; i++) {
    fatorial *= i;
}

alert("O fatorial de " + numero + " é: " + fatorial);
