function verificarPalindromo() {
    
    let texto = prompt("Digite uma palavra ou frase:");

    if (!texto) {
        alert("Nenhum texto inserido.");
        return;
    }

    let textoLimpo = texto
        .toLowerCase()
        .replace(/[áàãâä]/g, "a")
        .replace(/[éèêë]/g, "e")
        .replace(/[íìîï]/g, "i")
        .replace(/[óòõôö]/g, "o")
        .replace(/[úùûü]/g, "u")
        .replace(/[^a-z0-9]/g, "");

    let textoInvertido = textoLimpo.split("").reverse().join("");

    if (textoLimpo === textoInvertido) {
        alert(`"${texto}" é um palíndromo!`);
    } else {
        alert(`"${texto}" NÃO é um palíndromo!`);
    }
}

verificarPalindromo();
