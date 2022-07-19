// Solução 1

function verificaPalíndromo(string) {
    if(!string) return "Digite uma string";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalíndromo("ovo"));